import { Link } from 'react-router-dom';
import { SearchX, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function LoadingState() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="animate-pulse space-y-4">
        <div className="h-28 bg-gray-100 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <div className="h-40 bg-gray-100 rounded-lg" />
            <div className="h-56 bg-gray-100 rounded-lg" />
          </div>
          <div className="space-y-4">
            <div className="h-32 bg-gray-100 rounded-lg" />
            <div className="h-32 bg-gray-100 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function EmptyState({ query }) {
  const { t } = useLanguage();
  return (
    <div className="text-center py-12 px-4">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mb-4">
        <SearchX size={24} className="text-gray-400" />
      </div>
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        {t.couldNotIdentify}
      </h2>
      {query && (
        <p className="text-sm text-gray-500 mb-1">
          {t.weSearchedFor} <span className="font-medium text-gray-700">"{query}"</span>
        </p>
      )}
      <p className="text-sm text-gray-500 mb-6">
        {t.tryRephrasing}
      </p>
      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 text-sm text-brand-600 font-medium hover:underline"
      >
        <ArrowLeft size={15} />
        {t.browseAllServices}
      </Link>
    </div>
  );
}
