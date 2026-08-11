import { useCallback, useEffect, useMemo } from 'react';

export interface SpeakOptions {
  lang?: string;
  rate?: number;
  pitch?: number;
}

export interface UseSpeechResult {
  /** Поддерживает ли браузер синтез речи. */
  isSupported: boolean;
  /** Произнести фразы подряд, с паузами между ними. */
  speak: (phrases: string[], options?: SpeakOptions) => void;
  /** Немедленно замолчать. */
  cancel: () => void;
}

/**
 * Озвучка через Web Speech API.
 * Речь обрывается при размонтировании, чтобы она не «догоняла» пользователя
 * на следующем экране.
 */
export function useSpeech(): UseSpeechResult {
  const synth = useMemo(
    () =>
      typeof window !== 'undefined' && 'speechSynthesis' in window
        ? window.speechSynthesis
        : null,
    [],
  );

  const cancel = useCallback(() => synth?.cancel(), [synth]);

  const speak = useCallback(
    (phrases: string[], options: SpeakOptions = {}) => {
      if (!synth || phrases.length === 0) return;
      const { lang = 'en-GB', rate = 0.72, pitch = 1 } = options;

      synth.cancel();

      const text = `${phrases.map((phrase) => phrase.replace(/\//g, ', ')).join('. ')}.`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = pitch;

      const voices = synth.getVoices();
      const preferred =
        voices.find((voice) => voice.lang === lang) ??
        voices.find((voice) => voice.lang.startsWith(lang.slice(0, 2)));
      if (preferred) utterance.voice = preferred;

      synth.resume();
      synth.speak(utterance);
    },
    [synth],
  );

  useEffect(() => () => synth?.cancel(), [synth]);

  return { isSupported: synth !== null, speak, cancel };
}
