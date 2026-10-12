import { Volume2, Pause, Play, Square, Settings2 } from 'lucide-react';
import { useVoiceOutput } from '../hooks/useVoiceOutput';
import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function ProcessSteps({ service }) {
  const { currentLang, t } = useLanguage();
  const steps = service.process[currentLang] || [];

  const {
    isPlaying,
    isPaused,
    activeStepIndex,
    playbackRate,
    setPlaybackRate,
    voiceWarning,
    speak,
    pause,
    resume,
    stop,
    voiceLang,
    setVoiceLang
  } = useVoiceOutput({ process: service.process, documents: service.documents }, currentLang);
  
  // Stop when component unmounts
  useEffect(() => {
    return () => stop();
  }, [stop]);

  return (
    <div>
      {/* Voice Controls */}
      <div className="mb-5 p-3 bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 rounded-lg flex flex-wrap items-center gap-3">
        {!isPlaying ? (
          <button
            onClick={speak}
            className="flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-sky-400 hover:text-brand-700 dark:hover:text-sky-300 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 px-3 py-1.5 rounded shadow-sm transition-colors"
          >
            <Volume2 size={16} />
            {t.listenToSteps}
          </button>
        ) : (
          <div className="flex items-center gap-2">
            {isPaused ? (
              <button onClick={resume} className="flex items-center gap-1 p-1.5 text-brand-600 dark:text-sky-400 hover:bg-brand-50 dark:hover:bg-slate-700 rounded" title="Resume">
                <Play size={16} />
              </button>
            ) : (
              <button onClick={pause} className="flex items-center gap-1 p-1.5 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-700 rounded" title="Pause">
                <Pause size={16} />
              </button>
            )}
            <button onClick={stop} className="flex items-center gap-1 p-1.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-slate-700 rounded" title="Stop">
              <Square size={16} />
            </button>
          </div>
        )}

        {/* Voice Language Toggle */}
        <div className="ml-2 border-l pl-3 flex items-center border-gray-200 dark:border-slate-700">
          <Volume2 size={14} className="text-gray-400 dark:text-slate-500 mr-1.5" />
          <button
            onClick={() => setVoiceLang('en')}
            className={`text-xs font-medium px-2 py-1 rounded transition-colors ${voiceLang === 'en' ? 'text-brand-600 dark:text-sky-400 bg-brand-50 dark:bg-slate-700' : 'text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
          >
            EN
          </button>
          <span className="text-gray-300 dark:text-slate-600 mx-0.5">|</span>
          <button
            onClick={() => setVoiceLang('hi')}
            className={`text-xs font-medium px-2 py-1 rounded transition-colors ${voiceLang === 'hi' ? 'text-brand-600 dark:text-sky-400 bg-brand-50 dark:bg-slate-700' : 'text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
          >
            हिंदी
          </button>
        </div>

        <div className="flex items-center gap-1.5 ml-auto text-sm text-gray-500 dark:text-slate-400">
          <Settings2 size={14} />
          <select 
            value={playbackRate} 
            onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
            className="bg-transparent dark:bg-slate-800 border-none outline-none cursor-pointer hover:text-gray-700 dark:hover:text-slate-200 text-gray-700 dark:text-slate-300"
            title="Speed"
          >
            <option value={0.8} className="dark:bg-slate-800 dark:text-slate-200">0.8x</option>
            <option value={1} className="dark:bg-slate-800 dark:text-slate-200">1x</option>
            <option value={1.2} className="dark:bg-slate-800 dark:text-slate-200">1.2x</option>
          </select>
        </div>
      </div>
      
      {voiceWarning && (
        <p className="mb-4 text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-2 rounded border border-amber-100 dark:border-amber-800/60">{voiceWarning}</p>
      )}

      <ol className="space-y-0 relative">
        {steps.map((item, idx) => (
          <li
            key={idx}
            style={{ transitionDelay: `${(idx % 8) * 80}ms` }}
            className="step-item relative flex gap-4 pb-6 transition-all duration-300 reveal-item"
          >
            <div className="step-line relative flex-shrink-0">
              <div className={`w-8 h-8 rounded-full text-sm font-semibold flex items-center justify-center z-10 relative transition-colors ${
                activeStepIndex === idx ? 'bg-amber-500 text-white shadow-md scale-110' : 'bg-brand-500 dark:bg-sky-600 text-white'
              }`}>
                {item.step}
              </div>
            </div>
            <div className={`pt-1 pb-1 px-3 -ml-3 rounded-lg transition-colors duration-300 ${activeStepIndex === idx ? 'bg-amber-50 dark:bg-amber-950/40' : ''}`}>
              <h4 className={`text-sm font-semibold mb-1 ${activeStepIndex === idx ? 'text-amber-900 dark:text-amber-200' : 'text-gray-900 dark:text-slate-100'}`}>
                {item.title}
              </h4>
              <p className={`text-sm leading-relaxed ${activeStepIndex === idx ? 'text-amber-800 dark:text-amber-300' : 'text-gray-600 dark:text-slate-300'}`}>
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
