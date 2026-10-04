import { Link } from 'react-router-dom';
import { ChevronRight, CreditCard, FileText, Globe, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const categoryIcons = {
  'Identity': CreditCard,
  'Civil Records': FileText,
  'Revenue / Financial': FileText,
  'Revenue / Social': FileText,
  'Land & Revenue': MapPin,
};

const categoryColors = {
  'Identity': 'bg-blue-50 text-blue-700',
  'Civil Records': 'bg-green-50 text-green-700',
  'Revenue / Financial': 'bg-amber-50 text-amber-700',
  'Revenue / Social': 'bg-purple-50 text-purple-700',
  'Land & Revenue': 'bg-orange-50 text-orange-700',
};

export default function ServiceCard({ service }) {
  const { currentLang, isHi } = useLanguage();
  const Icon = categoryIcons[service.category] || FileText;
  const colorClass = categoryColors[service.category] || 'bg-gray-50 text-gray-700';

  return (
    <Link
      to={`/service/${service.id}`}
      className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-brand-300 hover:shadow-sm transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorClass}`}>
              {service.category}
            </span>
            {service.application.onlineAvailable && (
              <span className="text-xs text-gov-green flex items-center gap-0.5">
                <Globe size={11} />
                Online
              </span>
            )}
          </div>
          <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
            {service.name.en} / {service.name.hi}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{service.description}</p>
          <div className="mt-2 text-xs text-gray-400">{service.department}</div>
        </div>
        <ChevronRight size={18} className="text-gray-300 group-hover:text-brand-400 transition-colors mt-1 shrink-0" />
      </div>
    </Link>
  );
}
