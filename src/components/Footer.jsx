import { Link } from 'react-router-dom';
import { AlertCircle, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-16 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-start gap-2 mb-4">
          <AlertCircle size={16} className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-600 dark:text-slate-400">
            <strong className="text-gray-800 dark:text-slate-200">Disclaimer:</strong> Requirements and procedures may change. Always verify the latest details on the linked official government website before applying. Sarkar Sathi is an informational guide and not affiliated with any government department.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-400 dark:text-slate-500 pt-4 border-t border-gray-100 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span>Sarkar Sathi — Government services, explained simply.</span>
            <span className="hidden sm:inline text-gray-300 dark:text-slate-700">·</span>
            <Link to="/feedback" className="inline-flex items-center gap-1 text-brand-600 dark:text-sky-400 hover:underline">
              <MessageSquare size={12} />
              Feedback
            </Link>
          </div>
          <span>For informational purposes only.</span>
        </div>
      </div>
    </footer>
  );
}
