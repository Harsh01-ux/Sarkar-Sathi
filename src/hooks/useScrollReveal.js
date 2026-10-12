import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If reduced motion is preferred, reveal everything immediately
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-item').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Animate once only
            observer.unobserve(entry.target);
            const target = entry.target;
            setTimeout(() => {
              if (target) target.style.transitionDelay = '';
            }, 700);
          }
        });
      },
      {
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.08,
      }
    );

    const observeUnrevealed = () => {
      const items = document.querySelectorAll('.reveal-item:not(.revealed)');
      items.forEach((item) => observer.observe(item));
    };

    // Initial check on mount or route transition
    observeUnrevealed();

    // A small timeout to catch items rendered after initial mount
    const timer = setTimeout(observeUnrevealed, 50);

    // Watch for DOM mutations (e.g. dynamically rendered lists)
    const mutationObserver = new MutationObserver(() => {
      observeUnrevealed();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname, location.search]);
}
