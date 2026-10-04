import { useState, useRef, useCallback, useEffect } from 'react';

export function useVoiceInput({ onResult, onError, language = 'hi-IN' }) {
  const [status, setStatus] = useState('idle'); // 'idle', 'listening', 'processing', 'error'
  const [isSupported, setIsSupported] = useState(true);
  const recognitionRef = useRef(null);

  // Check for browser support on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setIsSupported(false);
      }
    }
  }, []);

  const startListening = useCallback(async () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      onError?.('Voice input is not supported in this browser. Please try using Google Chrome.');
      setStatus('error');
      return;
    }

    try {
      // Explicitly request mic permission first to catch errors reliably
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Immediately stop the tracks to release the mic for SpeechRecognition
      stream.getTracks().forEach(track => track.stop());
    } catch (err) {
      console.error('Mic permission error:', err);
      onError?.('Microphone access denied. Please allow microphone permissions in your browser settings.');
      setStatus('error');
      return;
    }

    if (status === 'listening') {
      recognitionRef.current?.stop();
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.lang = language;

    recognition.onstart = () => {
      setStatus('listening');
    };

    recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      if (finalTranscript) {
        setStatus('processing');
        onResult?.(finalTranscript, true);
      } else if (interimTranscript) {
        onResult?.(interimTranscript, false);
      }
    };

    recognition.onerror = (event) => {
      setStatus('error');
      if (event.error === 'not-allowed') {
        onError?.('Microphone access was blocked. Please allow mic access and try again.');
      } else if (event.error === 'no-speech') {
        onError?.('No speech detected. Please try speaking again.');
      } else if (event.error === 'network') {
        onError?.('Network error occurred. Please check your internet connection.');
      } else {
        onError?.(`Voice error: ${event.error}. Please try again.`);
      }
    };

    recognition.onend = () => {
      // Transition back to idle only if we haven't hit processing or error
      setStatus(prev => prev === 'listening' ? 'idle' : prev);
    };

    recognitionRef.current = recognition;
    try {
      recognition.start();
    } catch (e) {
      setStatus('error');
      onError?.('Failed to start voice recognition.');
    }
  }, [status, onResult, onError, language]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setStatus('idle');
  }, []);

  return { status, isSupported, startListening, stopListening };
}
