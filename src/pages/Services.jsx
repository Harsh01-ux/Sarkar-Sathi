import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import ServiceCard from '../components/ServiceCard';
import { EmptyState } from '../components/States';
import { services } from '../data/services';
import { useLanguage } from '../hooks/useLanguage';

export default function Services() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const notfound = params.get('notfound') === '1';
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-900 mb-4">{t.allServices}</h1>
        <SearchBox initialValue={query} />
      </div>

      {notfound && query && (
        <div className="mb-6">
          <EmptyState query={query} />
          <div className="border-t border-gray-100 pt-6 mt-6">
            <p className="text-sm font-medium text-gray-700 mb-4">{t.availableServices}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
