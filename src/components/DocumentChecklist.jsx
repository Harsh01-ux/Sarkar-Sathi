import { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function DocumentChecklist({ documents }) {
  const [checked, setChecked] = useState({});
  const { t } = useLanguage();

  const toggle = (idx) => {
    setChecked(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div>
      {checkedCount > 0 && (
        <p className="text-xs text-brand-600 dark:text-sky-400 mb-3 font-medium">
          {checkedCount} of {documents.length} {t.docsReady}
        </p>
      )}
      <ul className="space-y-2">
        {documents.map((doc, idx) => (
          <li
            key={idx}
            className="reveal-item"
            style={{ transitionDelay: `${(idx % 8) * 80}ms` }}
          >
            <button
              onClick={() => toggle(idx)}
              className={`w-full text-left flex items-start gap-3 p-3 rounded-lg border transition-all ${
                checked[idx]
                  ? 'bg-green-50 dark:bg-emerald-950/40 border-green-200 dark:border-emerald-800/60'
                  : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600'
              }`}
            >
              <span className={`mt-0.5 shrink-0 ${checked[idx] ? 'text-gov-green dark:text-emerald-400' : 'text-gray-300 dark:text-slate-600'}`}>
                {checked[idx] ? <CheckSquare size={18} /> : <Square size={18} />}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${checked[idx] ? 'text-green-800 dark:text-emerald-300 line-through' : 'text-gray-800 dark:text-slate-200'}`}>
                    {doc.name}
                  </span>
                  {doc.required && (
                    <span className="text-xs text-red-500 dark:text-red-400 font-medium">{t.required}</span>
                  )}
                  {!doc.required && (
                    <span className="text-xs text-gray-400 dark:text-slate-500">{t.optional}</span>
                  )}
                </div>
                {doc.examples && (
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{doc.examples}</p>
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-400 dark:text-slate-500 mt-2">{t.tapToMarkReady}</p>
    </div>
  );
}
