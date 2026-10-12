import SearchBox from '../components/SearchBox';
import ExampleQueries from '../components/ExampleQueries';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { ShieldCheck, Clock, BookOpen } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    { icon: ShieldCheck, label: t.feat1Label, desc: t.feat1Desc },
    { icon: BookOpen, label: t.feat2Label, desc: t.feat2Desc },
    { icon: Clock, label: t.feat3Label, desc: t.feat3Desc },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-sky-400 text-xs font-semibold px-3 py-1 rounded-full mb-5 border border-brand-100 dark:border-slate-700">
            <ShieldCheck size={13} />
            {t.verifiedOfficial}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 leading-tight mb-3 whitespace-pre-line">
            {t.heroTitle}
          </h1>
          <p className="text-base text-gray-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
            {t.heroDesc}
          </p>
          <SearchBox large />
          <ExampleQueries />
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {features.map((f, idx) => (
            <div
              key={f.label}
              className="flex gap-3 reveal-item"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="w-9 h-9 bg-brand-50 dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-lg flex items-center justify-center shrink-0">
                <f.icon size={17} className="text-brand-500 dark:text-sky-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-slate-100">{f.label}</div>
                <div className="text-sm text-gray-500 dark:text-slate-400 mt-0.5">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Service list */}
        <div>
          <h2 className="text-base font-semibold text-gray-900 dark:text-slate-100 mb-4 reveal-item">
            {t.availableServices}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
