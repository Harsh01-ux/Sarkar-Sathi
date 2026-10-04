import { AlertCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-start gap-2 mb-4">
          <AlertCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-600">
            <strong className="text-gray-800">Disclaimer:</strong> Requirements and procedures may change. Always verify the latest details on the linked official government website before applying. Sarkar Sathi is an informational guide and not affiliated with any government department.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-400 pt-4 border-t border-gray-100">
          <span>Sarkar Sathi — Government services, explained simply.</span>
          <span>For informational purposes only.</span>
        </div>
      </div>
    </footer>
  );
}
