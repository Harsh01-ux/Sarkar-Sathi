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
  'Identity': 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300',
  'Civil Records': 'bg-green-50 text-green-700 dark:bg-emerald-950/70 dark:text-emerald-300',
  'Revenue / Financial': 'bg-amber-50 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300',
  'Revenue / Social': 'bg-purple-50 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300',
  'Land & Revenue': 'bg-orange-50 text-orange-700 dark:bg-orange-950/70 dark:text-orange-300',
};

export default function ServiceCard({ service, index = 0 }) {
  const { currentLang, isHi } = useLanguage();
  const Icon = categoryIcons[service.category] || FileText;
  const colorClass = categoryColors[service.category] || 'bg-gray-50 text-gray-700 dark:bg-slate-700 dark:text-slate-300';

  return (
    <Link
      to={`/service/${service.id}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
      tabIndex={0}
      className="service-card block bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 group reveal-item"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-slate-700/80 border border-brand-100/60 dark:border-slate-600/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-100/70 dark:group-hover:bg-slate-700 transition-colors">
            <Icon size={19} className="text-brand-600 dark:text-sky-400 service-card-icon" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorClass}`}>
                {service.category}
              </span>
              {service.application.onlineAvailable && (
                <span className="text-xs text-gov-green dark:text-emerald-400 flex items-center gap-0.5 font-medium">
                  <Globe size={11} />
                  Online
                </span>
              )}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-sky-400 group-focus-visible:text-brand-600 dark:group-focus-visible:text-sky-400 transition-colors leading-snug">
              {service.name.en} / {service.name.hi}
            </h3>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-1 line-clamp-2">{service.description}</p>
            <div className="mt-2 text-xs text-gray-400 dark:text-slate-500">{service.department}</div>
          </div>
        </div>
        <ChevronRight
          size={18}
          className="service-card-arrow text-gray-300 dark:text-slate-600 group-hover:text-brand-500 dark:group-hover:text-sky-400 group-focus-visible:text-brand-500 dark:group-focus-visible:text-sky-400 mt-1 shrink-0"
        />
      </div>
    </Link>
  );
}
