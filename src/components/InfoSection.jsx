export default function InfoSection({ title, children, className = '' }) {
  return (
    <section className={`bg-white border border-gray-200 rounded-lg p-5 ${className}`}>
      <h2 className="text-base font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </section>
  );
}
