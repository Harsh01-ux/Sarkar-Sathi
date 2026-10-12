export default function InfoSection({ title, children, className = '' }) {
  return (
    <section className={`bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5 reveal-item ${className}`}>
      <h2 className="text-base font-semibold text-gray-900 dark:text-slate-100 mb-4 pb-3 border-b border-gray-100 dark:border-slate-700">
        {title}
      </h2>
      {children}
    </section>
  );
}
