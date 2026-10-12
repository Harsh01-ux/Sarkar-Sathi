import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, RefreshCw, Clock, DollarSign, MapPin, FileText, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { getServiceById } from '../data/services';
import GuideHeader from '../components/GuideHeader';
import DocumentChecklist from '../components/DocumentChecklist';
import ProcessSteps from '../components/ProcessSteps';
import OfficialSource from '../components/OfficialSource';
import InfoSection from '../components/InfoSection';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(id);
  const [copied, setCopied] = useState(false);
  const { currentLang, t } = useLanguage();

  if (!service) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
        <p className="text-gray-500 dark:text-slate-400 mb-4">{t.serviceNotFound}</p>
        <Link to="/services" className="text-brand-600 dark:text-sky-400 text-sm hover:underline">{t.browseAllServices}</Link>
      </div>
    );
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      {/* Breadcrumb & Actions */}
      <div className="flex items-center justify-between mb-5 gap-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-200 transition-colors"
        >
          <ArrowLeft size={15} />
          {t.back}
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={copyLink}
            className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-200 border border-gray-200 dark:border-slate-700 px-3 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
          >
            {copied ? <CheckCircle size={13} className="text-green-500 dark:text-emerald-400" /> : <Copy size={13} />}
            {copied ? t.copied : t.copyLink}
          </button>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-200 border border-gray-200 dark:border-slate-700 px-3 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
          >
            <RefreshCw size={13} />
            {t.startOver}
          </Link>
        </div>
      </div>

      {/* Guide Header */}
      <GuideHeader service={service} />

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Main column */}
        <div className="md:col-span-2 space-y-5">

          {/* Before You Start */}
          <InfoSection title={t.beforeYouStart}>
            <div className="space-y-3">
              <div>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wide mb-2">{t.eligibility}</h3>
                <ul className="space-y-1.5">
                  {service.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                      <span className="text-gov-green dark:text-emerald-400 mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {service.officeInfo && (
                <div className="pt-3 border-t border-gray-100 dark:border-slate-700">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                    <MapPin size={12} />
                    {t.whereToApply}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-slate-300">{service.officeInfo}</p>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent('nearest ' + service.department + ' office')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-brand-700 dark:text-sky-300 bg-brand-50 dark:bg-slate-700/80 hover:bg-brand-100 dark:hover:bg-slate-700 border border-brand-200 dark:border-slate-600 rounded-md transition-colors"
                  >
                    <MapPin size={14} />
                    {t.findNearestOffice}
                  </a>
                </div>
              )}
            </div>
          </InfoSection>

          {/* Application/Form */}
          <InfoSection title={t.applicationForm}>
            <div className="flex items-start gap-3">
              <FileText size={16} className="text-brand-500 dark:text-sky-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-slate-200">{service.application.formName}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.application.onlineAvailable && (
                    <span className="text-xs bg-green-50 dark:bg-emerald-950/60 text-green-700 dark:text-emerald-300 border border-green-200 dark:border-emerald-800/70 px-2 py-0.5 rounded">{t.onlineAvailable}</span>
                  )}
                  {service.application.offlineAvailable && (
                    <span className="text-xs bg-gray-50 dark:bg-slate-700/70 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded">{t.offlineAvailable}</span>
                  )}
                </div>
                {service.application.formLink && (
                  <a
                    href={service.application.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm text-brand-600 dark:text-sky-400 hover:underline"
                  >
                    {t.accessForm}
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </InfoSection>

          {/* Process */}
          <InfoSection title={t.stepByStepProcess}>
            <ProcessSteps service={service} />
          </InfoSection>

          {/* Documents */}
          <InfoSection title={t.documentsYouNeed}>
            <DocumentChecklist documents={service.documents[currentLang]} />
          </InfoSection>

          {/* Notes */}
          {service.notes && service.notes.length > 0 && (
            <InfoSection title={t.importantNotes}>
              <ul className="space-y-2">
                {service.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                    <AlertTriangle size={14} className="text-amber-500 dark:text-amber-400 mt-0.5 shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </InfoSection>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Fee & Time */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5 space-y-4 reveal-item">
            <h2 className="text-base font-semibold text-gray-900 dark:text-slate-100 pb-3 border-b border-gray-100 dark:border-slate-700">{t.feesTimeline}</h2>
            {service.fee && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 bg-amber-50 dark:bg-amber-950/50 rounded flex items-center justify-center shrink-0">
                  <DollarSign size={14} className="text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-slate-400 font-medium">{t.applicationFee}</div>
                  <div className="text-sm text-gray-800 dark:text-slate-200 font-semibold mt-0.5">{service.fee}</div>
                </div>
              </div>
            )}
            {service.processingTime && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 bg-blue-50 dark:bg-sky-950/50 rounded flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-blue-600 dark:text-sky-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-slate-400 font-medium">{t.processingTime}</div>
                  <div className="text-sm text-gray-800 dark:text-slate-200 font-semibold mt-0.5">{service.processingTime}</div>
                </div>
              </div>
            )}
            <p className="text-xs text-gray-400 dark:text-slate-500 pt-1 border-t border-gray-100 dark:border-slate-700">
              {t.feesDisclaimer}
            </p>
          </div>

          {/* Official Sources */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5 reveal-item">
            <h2 className="text-base font-semibold text-gray-900 dark:text-slate-100 mb-4 pb-3 border-b border-gray-100 dark:border-slate-700">{t.officialSources}</h2>
            <OfficialSource sources={service.officialSources} />
          </div>

          {/* State note */}
          {service.stateDependent && (
            <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-lg p-4 reveal-item">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">{t.stateLevelService}</div>
                  <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                    {t.stateDisclaimer}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-lg p-4 reveal-item">
            <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
              {t.generalDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 flex flex-wrap items-center gap-3">
        <Link
          to="/services"
          className="flex items-center gap-1.5 text-sm text-brand-600 dark:text-sky-400 hover:underline"
        >
          <ArrowLeft size={14} />
          {t.backToAll}
        </Link>
        <span className="text-gray-300 dark:text-slate-600">·</span>
        <Link to="/" className="text-sm text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200">
          {t.startNewSearch}
        </Link>
      </div>
    </div>
  );
}
