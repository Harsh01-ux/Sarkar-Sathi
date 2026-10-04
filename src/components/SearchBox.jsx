import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Mic, MicOff, X, Loader2 } from 'lucide-react';
import { findService } from '../data/services';
import { useVoiceInput } from '../hooks/useVoiceInput';
import { useLanguage } from '../hooks/useLanguage';

export default function SearchBox({ large = false, initialValue = '' }) {
  const [query, setQuery] = useState(initialValue);
  const [voiceError, setVoiceError] = useState('');
  
  const { lang, setLang, t, isHi } = useLanguage();

  const navigate = useNavigate();

  const submitQuery = (q) => {
    if (!q.trim()) return;
    const service = findService(q);
    if (service) {
      navigate(`/service/${service.id}?q=${encodeURIComponent(q)}`);
    } else {
      navigate(`/services?q=${encodeURIComponent(q)}&notfound=1`);
    }
  };

  const { status, isSupported, startListening, stopListening } = useVoiceInput({
    language: lang,
    onResult: (text, isFinal) => {
      setQuery(text);
      setVoiceError('');
      if (isFinal) {
        submitQuery(text);
      }
    },
    onError: (msg) => {
      setVoiceError(msg);
    },
  });

  const handleSearch = (e) => {
    e?.preventDefault();
    submitQuery(query);
  };

  const clearQuery = () => {
    setQuery('');
    setVoiceError('');
    if (status === 'listening' || status === 'processing') stopListening();
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearch}>
        <div className={`flex items-center bg-white border-2 rounded-lg shadow-sm transition-colors ${status === 'listening' ? 'border-brand-500' : 'border-gray-200 focus-within:border-brand-400'}`}>
          <Search size={18} className="ml-4 text-gray-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className={`flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 ${large ? 'py-4 px-3 text-base' : 'py-3 px-3 text-sm'}`}
            autoFocus={large}
          />
          {query && (
            <button
              type="button"
              onClick={clearQuery}
              className="p-2 mx-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
          {isSupported && (
            <div className="flex items-center gap-1 mx-1 border-l pl-2 border-gray-200">
              <button
                type="button"
                onClick={status === 'listening' ? stopListening : startListening}
                className={`p-2 rounded transition-colors ${
                  status === 'listening'
                    ? 'text-brand-500 bg-brand-50 listening-pulse'
                    : 'text-gray-400 hover:text-brand-500 hover:bg-brand-50'
                }`}
                aria-label={status === 'listening' ? 'Stop listening' : 'Start voice input'}
                title={status === 'listening' ? 'Tap to stop' : 'Tap to speak'}
                disabled={status === 'processing'}
              >
                {status === 'processing' ? <Loader2 size={18} className="animate-spin text-brand-500" /> : status === 'listening' ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
            </div>
          )}
          <button
            type="submit"
            className={`bg-brand-500 text-white font-medium rounded-md hover:bg-brand-600 transition-colors shrink-0 mr-1 ${large ? 'px-5 py-2.5 text-sm' : 'px-4 py-2 text-sm'}`}
          >
            {isHi ? "खोजें" : "Search"}
          </button>
        </div>
      </form>
      
      {/* Voice Status Messages */}
      {status === 'listening' && (
        <p className="mt-2 text-sm text-brand-600 flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
          {isHi ? "सुन रहा हूँ... अब बोलें" : "Listening... speak now"}
        </p>
      )}
      {status === 'processing' && (
        <p className="mt-2 text-sm text-brand-600 flex items-center gap-1.5">
          <Loader2 size={12} className="animate-spin" />
          {isHi ? "प्रोसेसिंग..." : "Processing..."}
        </p>
      )}
      {status === 'error' && voiceError && (
        <p className="mt-2 text-sm text-red-600">{voiceError}</p>
      )}
      {!isSupported && (
        <p className="mt-2 text-xs text-amber-600">Voice input is not supported in this browser. Please try Chrome.</p>
      )}
    </div>
  );
}
