import type { ComponentProps, ComponentType } from 'react';
import type { BaseExerciseProps } from '@exercises/shared';
import Flashcards from '@exercises/Flashcards';
import QuizChoice from '@exercises/QuizChoice';
import MatchPairs from '@exercises/MatchPairs';
import MemoryGame from '@exercises/MemoryGame';
import SortTable from '@exercises/SortTable';
import SpotIt from '@exercises/SpotIt';
import WordBuilder from '@exercises/WordBuilder';

/**
 * Все движки упражнений, доступные как шаг урока.
 * Добавление нового движка — одна строка здесь: тип шага и подсказки
 * в файлах с данными выводятся отсюда автоматически.
 *
 * ChoiceCard сюда не входит: у него нет ни onFinish, ни BaseExerciseProps —
 * это презентационная карточка, а не движок.
 */
export const exerciseEngines = {
  flashcards: Flashcards,
  quizChoice: QuizChoice,
  matchPairs: MatchPairs,
  memoryGame: MemoryGame,
  sortTable: SortTable,
  spotIt: SpotIt,
  wordBuilder: WordBuilder,
} as const;

export type ExerciseEngineName = keyof typeof exerciseEngines;

/**
 * Данные конкретного движка без title/instruction/onFinish —
 * их шаг урока подставляет сам.
 */
export type ExercisePayload = {
  [K in ExerciseEngineName]: { engine: K } & Omit<
    ComponentProps<(typeof exerciseEngines)[K]>,
    keyof BaseExerciseProps
  >;
}[ExerciseEngineName];

/**
 * Тип для места рендера: движок выбирается по строке, и TypeScript не может
 * связать её с формой пропсов. Проверка типов остаётся там, где она важна, —
 * в файлах с данными, где ExercisePayload требует поля выбранного движка.
 */
export type AnyExerciseProps = BaseExerciseProps & Record<string, unknown>;

export const getExerciseEngine = (
  name: ExerciseEngineName,
): ComponentType<AnyExerciseProps> =>
  exerciseEngines[name] as unknown as ComponentType<AnyExerciseProps>;
