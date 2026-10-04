import { useState, useEffect, useRef, useCallback } from 'react';

export function useVoiceOutput(content, initialLang = 'en') {
  const [voiceLang, setVoiceLangState] = useState(() => sessionStorage.getItem('voiceLang') || initialLang);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [voiceWarning, setVoiceWarning] = useState('');
  
  const synthRef = useRef(window.speechSynthesis);

  const setVoiceLang = useCallback((lang) => {
    sessionStorage.setItem('voiceLang', lang);
    setVoiceLangState(lang);
  }, []);

  // Clear any ongoing speech when component unmounts
  useEffect(() => {
    return () => {
      if (synthRef.current) synthRef.current.cancel();
    };
  }, []);

  const getChunks = (text) => {
    // Split text into smaller chunks by sentences to avoid Chrome cutoff
    const chunks = text.match(/[^.!?]+[.!?]+/g) || [text];
    return chunks.map(c => c.trim()).filter(Boolean);
  };

  const speak = useCallback((startIndex = 0) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    
    let voices = synthRef.current.getVoices();
    
    const getBestVoice = () => {
      if (voiceLang === 'hi') {
        const hindiVoice = voices.find(v => v.lang === 'hi-IN' || v.lang.startsWith('hi'));
        if (hindiVoice) return { voice: hindiVoice, warning: '' };
        const enVoice = voices.find(v => v.lang === 'en-IN' || v.lang.startsWith('en'));
        return { voice: enVoice || voices[0], warning: 'Hindi voice not found. Falling back to English.' };
      } else {
        const enVoice = voices.find(v => v.lang === 'en-IN' || v.lang.startsWith('en'));
        return { voice: enVoice || voices[0], warning: 'English voice not found. Using default voice.' };
      }
    };

    let { voice, warning } = getBestVoice();
    
    // If voices aren't loaded yet, try again in a bit
    if (voices.length === 0) {
      warning = 'Voices are loading...';
    }
    
    setVoiceWarning(warning);
    setIsPlaying(true);
    setIsPaused(false);
    
    // Prepare items to read: documents first (if any), then steps
    const items = [];
    const currentProcess = content.process?.[voiceLang] || [];
    const currentDocs = content.documents?.[voiceLang] || [];
    
    // We only highlight steps in the UI, so we need to track if it's a step
    currentDocs.forEach((doc) => {
      items.push({
        text: `${doc.name}. ${doc.examples || ''}`,
        isStep: false,
        stepIndex: -1
      });
    });
    
    currentProcess.forEach((stepItem, index) => {
      items.push({
        text: `Step ${stepItem.step}. ${stepItem.title}. ${stepItem.detail}`,
        isStep: true,
        stepIndex: index
      });
    });

    if (items.length === 0) return;

    let currentItemIndex = startIndex;
    if (currentItemIndex >= items.length) currentItemIndex = 0;

    const playNextItem = () => {
      if (currentItemIndex >= items.length) {
        setIsPlaying(false);
        setActiveItemIndex(-1);
        return;
      }

      const item = items[currentItemIndex];
      if (item.isStep) {
        setActiveItemIndex(item.stepIndex);
      } else {
        setActiveItemIndex(-1); // No step to highlight while reading docs
      }

      const chunks = getChunks(item.text);
      let currentChunkIndex = 0;

      const playNextChunk = () => {
        if (currentChunkIndex >= chunks.length) {
          currentItemIndex++;
          playNextItem();
          return;
        }

        const utterance = new SpeechSynthesisUtterance(chunks[currentChunkIndex]);
        if (voice) utterance.voice = voice;
        utterance.rate = playbackRate;
        
        // Use a dummy handler to keep Chrome TTS from garbage collecting the utterance
        utterance.onresume = () => {};
        
        utterance.onend = () => {
          currentChunkIndex++;
          playNextChunk();
        };

        utterance.onerror = (e) => {
          if (e.error !== 'canceled') {
            console.error("Speech synthesis error", e);
          }
        };

        synthRef.current.speak(utterance);
      };

      playNextChunk();
    };

    playNextItem();
    
  }, [content, voiceLang, playbackRate]);

  // Restart from active index if voiceLang changes while playing
  const prevVoiceLang = useRef(voiceLang);
  useEffect(() => {
    if (prevVoiceLang.current !== voiceLang) {
      if (isPlaying && !isPaused) {
        // If it's playing a step, restart from that step's index.
        // Wait, activeItemIndex is the step index. 
        // We need to map stepIndex back to the items array index.
        const currentDocsCount = content.documents?.[voiceLang]?.length || 0;
        const restartIndex = activeItemIndex >= 0 ? currentDocsCount + activeItemIndex : 0;
        speak(restartIndex);
      }
      prevVoiceLang.current = voiceLang;
    }
  }, [voiceLang, isPlaying, isPaused, speak, activeItemIndex, content]);

  const pause = useCallback(() => {
    if (synthRef.current && isPlaying) {
      synthRef.current.pause();
      setIsPaused(true);
    }
  }, [isPlaying]);

  const resume = useCallback(() => {
    if (synthRef.current && isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
    }
  }, [isPaused]);

  const stop = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setActiveItemIndex(-1);
    }
  }, []);

  // Handle voice load
  useEffect(() => {
    const handleVoicesChanged = () => {
      // Re-trigger speak if voices changed while trying to speak but failed initially?
      // Just clearing warning if voices load
      if (synthRef.current.getVoices().length > 0 && voiceWarning === 'Voices are loading...') {
        setVoiceWarning('');
      }
    };
    if (synthRef.current && synthRef.current.addEventListener) {
      synthRef.current.addEventListener('voiceschanged', handleVoicesChanged);
      return () => synthRef.current.removeEventListener('voiceschanged', handleVoicesChanged);
    }
  }, [voiceWarning]);

  return {
    isPlaying,
    isPaused,
    activeStepIndex: activeItemIndex, // Rename to match ProcessSteps expectations
    playbackRate,
    setPlaybackRate,
    voiceWarning,
    speak: () => speak(0), // Play from start
    pause,
    resume,
    stop,
    voiceLang,
    setVoiceLang
  };
}
