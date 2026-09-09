import type { ExercisePayload } from '@exercises/registry';

interface LessonStepBase {
  /** Заголовок шага; у упражнений уходит в заголовок ExerciseShell. */
  title: string;
  /** Пояснение под заголовком; у упражнений — instruction движка. */
  aboutLesson: string;
}

/**
 * Шаг урока. Размеченное объединение: у видео и Wordwall данные помещаются
 * в строку-адрес, а встроенным упражнениям нужны массивы (cards, questions,
 * pairs, rows) — их форму задаёт ExercisePayload по выбранному engine.
 */
export type LessonStepData =
  | (LessonStepBase & { type: 'video'; src: string })
  | (LessonStepBase & { type: 'wordwall'; src: string })
  | (LessonStepBase & { type: 'exercise' } & ExercisePayload);

export interface LessonData {
  id: number;
  title: string;
  content: string;
  image: string;
  steps?: LessonStepData[];
}

export type CourseData = LessonData[];

export type LessonStatus = 'lock' | 'unlock' | 'done';
