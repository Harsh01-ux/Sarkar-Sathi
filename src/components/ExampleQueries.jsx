import { useNavigate } from 'react-router-dom';
import { findService } from '../data/services';
import { useLanguage } from '../hooks/useLanguage';

const examples = {
  en: [
    { label: 'Make a Voter ID', query: 'Make a Voter ID' },
    { label: 'Update Aadhaar address', query: 'Aadhaar address update' },
    { label: 'Get income certificate', query: 'Get an income certificate' },
    { label: 'Apply for caste certificate', query: 'Apply for caste certificate' },
    { label: 'Birth certificate', query: 'Birth certificate kaise banaye' },
    { label: 'Land Patta', query: 'Land patta documents' },
  ],
  hi: [
    { label: 'वोटर कार्ड', query: 'वोटर कार्ड' },
    { label: 'आधार में पता बदलें', query: 'आधार में पता बदलें' },
    { label: 'आय प्रमाण पत्र', query: 'आय प्रमाण पत्र' },
    { label: 'जाति प्रमाण पत्र', query: 'जाति प्रमाण पत्र' },
    { label: 'जन्म प्रमाण पत्र', query: 'जन्म प्रमाण पत्र' },
    { label: 'जमीन का पट्टा', query: 'जमीन का पट्टा' },
  ]
};

export default function ExampleQueries() {
  const navigate = useNavigate();
  const { currentLang, t } = useLanguage();

  const handleClick = (query) => {
    const service = findService(query);
    if (service) {
      navigate(`/service/${service.id}?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="mt-5">
      <p className="text-xs text-gray-500 mb-2.5 uppercase tracking-wide font-medium">{t.tryAskingAbout || (currentLang === 'hi' ? 'खोज कर देखें' : 'Try asking about')}</p>
      <div className="flex flex-wrap gap-2">
        {examples[currentLang].map((ex) => (
          <button
            key={ex.query}
            onClick={() => handleClick(ex.query)}
            className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
          >
            {ex.label}
          </button>
        ))}
      </div>
    </div>
  );
}
