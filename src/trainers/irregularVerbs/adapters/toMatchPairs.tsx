import type { MatchPair } from '@exercises/MatchPairs';
import { VerbForms, VerbTranslation } from '../components/VerbForms';
import type { Verb } from '../types';

/** Найди пару: три формы слева, перевод с картинкой справа. */
export function toMatchPairs(verbs: Verb[]): MatchPair[] {
  return verbs.map((verb) => ({
    id: verb.infinitive,
    left: <VerbForms verb={verb} stacked />,
    right: <VerbTranslation verb={verb} />,
  }));
}
