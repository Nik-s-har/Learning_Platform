import type { Verb } from '../types';

/**
 * Как читать формы вслух. Часть глаголов синтезатор произносит неверно,
 * поэтому для них подсказываем фонетическое написание.
 */
const SPEECH_OVERRIDES: Record<string, string[]> = {
  read: ['reed', 'red', 'red'],
  sit: ['sit', 'satt', 'satt'],
};

export function verbSpeech(verb: Verb): string[] {
  const override = SPEECH_OVERRIDES[verb.infinitive];
  if (override) return override;
  return [verb.infinitive, verb.past, verb.participle].filter(
    (form) => form && form !== '—',
  );
}
