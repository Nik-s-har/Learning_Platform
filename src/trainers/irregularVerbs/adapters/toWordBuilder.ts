import { shuffle } from '@exercises/shared';
import type { WordBuilderItem } from '@exercises/WordBuilder';
import type { Verb } from '../types';

const FORM_LABELS = {
  infinitive: 'Infinitive',
  past: 'Past Simple',
  participle: 'Past Participle',
} as const;

type FormKey = keyof typeof FORM_LABELS;

const FORM_KEYS: FormKey[] = ['infinitive', 'past', 'participle'];

/** Формы вида was/were и «—» собрать из букв нельзя. */
const isBuildable = (form: string) => /^[a-z]+$/i.test(form);

/** Составь слово: одна из форм собирается из перемешанных букв. */
export function toWordBuilder(verbs: Verb[]): WordBuilderItem[] {
  return shuffle(verbs).flatMap((verb) => {
    const buildable = FORM_KEYS.filter((key) => isBuildable(verb[key]));
    if (buildable.length === 0) return [];

    const target = buildable[Math.floor(Math.random() * buildable.length)];

    return [
      {
        id: verb.infinitive,
        answer: verb[target],
        slots: FORM_KEYS.map((key) => ({
          label: FORM_LABELS[key],
          value: key === target ? undefined : verb[key],
          target: key === target,
        })),
      },
    ];
  });
}
