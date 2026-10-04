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
        <p className="text-xs text-brand-600 mb-3 font-medium">
          {checkedCount} of {documents.length} {t.docsReady}
        </p>
      )}
      <ul className="space-y-2">
        {documents.map((doc, idx) => (
          <li key={idx}>
            <button
              onClick={() => toggle(idx)}
              className={`w-full text-left flex items-start gap-3 p-3 rounded-lg border transition-all ${
                checked[idx]
                  ? 'bg-green-50 border-green-200'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className={`mt-0.5 shrink-0 ${checked[idx] ? 'text-gov-green' : 'text-gray-300'}`}>
                {checked[idx] ? <CheckSquare size={18} /> : <Square size={18} />}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${checked[idx] ? 'text-green-800 line-through' : 'text-gray-800'}`}>
                    {doc.name}
                  </span>
                  {doc.required && (
                    <span className="text-xs text-red-500 font-medium">{t.required}</span>
                  )}
                  {!doc.required && (
                    <span className="text-xs text-gray-400">{t.optional}</span>
                  )}
                </div>
                {doc.examples && (
                  <p className="text-xs text-gray-500 mt-0.5">{doc.examples}</p>
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-400 mt-2">{t.tapToMarkReady}</p>
    </div>
  );
}
