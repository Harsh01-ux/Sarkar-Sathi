import { Link, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Navbar() {
  const location = useLocation();
  const { isHi, setLang } = useLanguage();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-brand-600 font-semibold text-lg tracking-tight">
          <div className="w-7 h-7 bg-brand-500 rounded flex items-center justify-center">
            <FileText size={15} className="text-white" />
          </div>
          <span>Sarkar Sathi</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            to="/"
            className={`px-3 py-1.5 text-sm rounded transition-colors ${
              location.pathname === '/'
                ? 'text-brand-600 bg-brand-50 font-medium'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`px-3 py-1.5 text-sm rounded transition-colors ${
              location.pathname === '/services'
                ? 'text-brand-600 bg-brand-50 font-medium'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            All Services
          </Link>
          <div className="ml-2 border-l pl-3 flex items-center border-gray-200">
            <button
              onClick={() => setLang('en-IN')}
              className={`text-xs font-medium px-2 py-1 rounded transition-colors ${!isHi ? 'text-brand-600 bg-brand-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
            >
              EN
            </button>
            <span className="text-gray-300 mx-0.5">|</span>
            <button
              onClick={() => setLang('hi-IN')}
              className={`text-xs font-medium px-2 py-1 rounded transition-colors ${isHi ? 'text-brand-600 bg-brand-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
