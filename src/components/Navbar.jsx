import { Link, useLocation } from 'react-router-dom';
import { FileText, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const location = useLocation();
  const { isHi, setLang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-brand-600 dark:text-sky-400 font-semibold text-lg tracking-tight shrink-0">
          <div className="w-7 h-7 bg-brand-500 dark:bg-sky-500 rounded flex items-center justify-center">
            <FileText size={15} className="text-white" />
          </div>
          <span>Sarkar Sathi</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-1.5">
          <Link
            to="/"
            className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded transition-colors ${
              location.pathname === '/'
                ? 'text-brand-600 dark:text-sky-400 bg-brand-50 dark:bg-slate-800 font-medium'
                : 'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded transition-colors ${
              location.pathname === '/services'
                ? 'text-brand-600 dark:text-sky-400 bg-brand-50 dark:bg-slate-800 font-medium'
                : 'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="hidden sm:inline">All </span>Services
          </Link>
          <Link
            to="/feedback"
            className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded transition-colors ${
              location.pathname === '/feedback'
                ? 'text-brand-600 dark:text-sky-400 bg-brand-50 dark:bg-slate-800 font-medium'
                : 'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'
            }`}
          >
            Feedback
          </Link>
          <div className="ml-1 sm:ml-2 border-l pl-2 sm:pl-3 flex items-center border-gray-200 dark:border-slate-700">
            <button
              onClick={() => setLang('en-IN')}
              className={`text-xs font-medium px-1.5 sm:px-2 py-1 rounded transition-colors ${!isHi ? 'text-brand-600 dark:text-sky-400 bg-brand-50 dark:bg-slate-800' : 'text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800'}`}
            >
              EN
            </button>
            <span className="text-gray-300 dark:text-slate-600 mx-0.5">|</span>
            <button
              onClick={() => setLang('hi-IN')}
              className={`text-xs font-medium px-1.5 sm:px-2 py-1 rounded transition-colors ${isHi ? 'text-brand-600 dark:text-sky-400 bg-brand-50 dark:bg-slate-800' : 'text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800'}`}
            >
              हिंदी
            </button>
          </div>
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-1.5 sm:p-2 ml-1 text-gray-500 dark:text-slate-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-sky-400"
          >
            {isDark ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
