import { shuffle } from '@exercises/shared';
import type { QuizQuestion } from '@exercises/QuizChoice';
import { VerbForms, VerbTranslation } from '../components/VerbForms';
import { verbs as allVerbs } from '../data/verbs';
import type { Verb } from '../types';

/**
 * Выбери правильный ответ: три формы в условии, переводы в вариантах.
 * Отвлекающие варианты берём из всего словаря, а не только из выбранных
 * глаголов, — так их всегда хватает.
 */
export function toQuizChoice(verbs: Verb[]): QuizQuestion[] {
  const optionsCount = verbs.length <= 3 ? 3 : 5;

  return shuffle(verbs).map((verb) => {
    const distractors = shuffle(
      allVerbs.filter(
        (candidate) =>
          candidate.infinitive !== verb.infinitive &&
          candidate.translation !== verb.translation,
      ),
    ).slice(0, optionsCount - 1);

    const options = shuffle([verb, ...distractors]).map((candidate) => ({
      id: candidate.infinitive,
      content: <VerbTranslation verb={candidate} />,
      correct: candidate.infinitive === verb.infinitive,
    }));

    return {
      id: verb.infinitive,
      prompt: <VerbForms verb={verb} />,
      options,
    };
  });
}
