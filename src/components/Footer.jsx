import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react';
import { footerConfig } from '../data/contactConfig';

function SocialIcon({ id }) {
  switch (id) {
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-16 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        {/* 4-column layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-100 dark:border-slate-800">
          {/* Column 1: About */}
          <div className="reveal-item">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-brand-600 dark:text-sky-400 font-semibold text-lg tracking-tight mb-3"
            >
              <div className="w-7 h-7 bg-brand-500 dark:bg-sky-500 rounded flex items-center justify-center shrink-0">
                <FileText size={15} className="text-white" />
              </div>
              <span>{footerConfig.about.name}</span>
            </Link>
            <p className="text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
              {footerConfig.about.tagline}
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
              {footerConfig.about.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="reveal-item" style={{ transitionDelay: '80ms' }}>
            <h3 className="text-xs font-bold text-gray-900 dark:text-slate-100 uppercase tracking-wider mb-3.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {footerConfig.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-sky-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-gray-300 dark:text-slate-600 group-hover:text-brand-400 dark:group-hover:text-sky-400 transition-colors">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="reveal-item" style={{ transitionDelay: '160ms' }}>
            <h3 className="text-xs font-bold text-gray-900 dark:text-slate-100 uppercase tracking-wider mb-3.5">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-600 dark:text-slate-400">
              <li>
                <a
                  href={`mailto:${footerConfig.contact.email}`}
                  className="hover:text-brand-600 dark:hover:text-sky-400 transition-colors flex items-start gap-2 group"
                >
                  <Mail size={15} className="text-brand-500 dark:text-sky-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="break-all">{footerConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerConfig.contact.phoneTel}`}
                  className="hover:text-brand-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <Phone size={15} className="text-brand-500 dark:text-sky-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{footerConfig.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-brand-500 dark:text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{footerConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-500 dark:text-slate-400">
                <Clock size={15} className="text-brand-500 dark:text-sky-400 shrink-0" />
                <span>{footerConfig.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="reveal-item" style={{ transitionDelay: '240ms' }}>
            <h3 className="text-xs font-bold text-gray-900 dark:text-slate-100 uppercase tracking-wider mb-3.5">
              Follow Us
            </h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 mb-3 leading-relaxed">
              Connect with us for citizen guides, government alerts, and procedure updates.
            </p>
            <div className="flex items-center gap-2">
              {footerConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  title={social.name}
                  className="w-8 h-8 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-sky-400 hover:border-brand-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-700 flex items-center justify-center transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <SocialIcon id={social.id} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed disclaimer notification */}
        <div className="mt-6 p-3 rounded-lg bg-amber-50/60 dark:bg-slate-800/60 border border-amber-200/50 dark:border-slate-800 flex items-start gap-2.5 text-xs text-gray-600 dark:text-slate-400 reveal-item">
          <AlertCircle size={15} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-gray-800 dark:text-slate-200">Disclaimer: </strong>
            {footerConfig.bottom.detailedDisclaimer}
          </span>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-slate-400 border-t border-gray-100 dark:border-slate-800 reveal-item">
          <p>{footerConfig.bottom.copyright}</p>
          <p className="text-center sm:text-right text-gray-400 dark:text-slate-500">
            {footerConfig.bottom.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
