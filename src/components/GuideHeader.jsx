import { Shield, Globe, Building2, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function GuideHeader({ service }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">{service.category}</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">{service.name.en} / {service.name.hi}</h1>
        </div>
        <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full shrink-0">
          <Shield size={12} />
          Official Source
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>

      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <Building2 size={13} className="text-gray-400" />
          <span>{service.department}</span>
        </div>
        {service.application.onlineAvailable && (
          <div className="flex items-center gap-1.5 text-xs text-gov-green">
            <Globe size={13} />
            <span>Online application available</span>
          </div>
        )}
        {service.stateDependent && (
          <div className="flex items-center gap-1.5 text-xs text-amber-600">
            <MapPin size={13} />
            <span>Process varies by state</span>
          </div>
        )}
      </div>

      {service.onlineApply && (
        <a
          href={service.onlineApply}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 bg-brand-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-brand-600 transition-colors"
        >
          <Globe size={14} />
          Apply Online
        </a>
      )}
    </div>
  );
}
