import { useState, useEffect } from 'react';
import { t } from '../data/translations';

export function useLanguage() {
  const [lang, setLangState] = useState(() => localStorage.getItem('appLang') || 'en-IN');

  useEffect(() => {
    const handleStorageChange = () => {
      setLangState(localStorage.getItem('appLang') || 'en-IN');
    };
    
    // Listen to custom event fired within the same window
    window.addEventListener('appLangChanged', handleStorageChange);
    // Listen to storage event for other tabs
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('appLangChanged', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const setLang = (newLang) => {
    localStorage.setItem('appLang', newLang);
    setLangState(newLang);
    window.dispatchEvent(new Event('appLangChanged'));
  };

  const isHi = lang === 'hi-IN';
  const currentLang = isHi ? 'hi' : 'en';
  
  return { 
    lang, 
    setLang, 
    isHi,
    currentLang,
    t: t[currentLang]
  };
}
