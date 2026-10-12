import { ExternalLink, Shield } from 'lucide-react';

export default function OfficialSource({ sources }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-3">
        <Shield size={14} className="text-gov-green dark:text-emerald-400" />
        <span className="text-xs text-gov-green dark:text-emerald-400 font-semibold uppercase tracking-wide">Official Government Sources</span>
      </div>
      <ul className="space-y-2">
        {sources.map((src, idx) => (
          <li key={idx}>
            {src.url.startsWith('tel:') ? (
              <a
                href={src.url}
                className="flex items-center gap-2 text-sm text-brand-600 dark:text-sky-400 hover:text-brand-700 dark:hover:text-sky-300 hover:underline"
              >
                <span className="text-gov-green dark:text-emerald-400 font-mono text-xs">•</span>
                {src.label}
              </a>
            ) : (
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-brand-600 dark:text-sky-400 hover:text-brand-700 dark:hover:text-sky-300 hover:underline group"
              >
                <span className="text-gov-green dark:text-emerald-400 font-mono text-xs mt-0.5">•</span>
                <span className="flex-1">{src.label}</span>
                <ExternalLink size={13} className="shrink-0 mt-0.5 text-gray-400 dark:text-slate-500 group-hover:text-brand-500 dark:group-hover:text-sky-400" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
