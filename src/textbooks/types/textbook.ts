import type { LessonStepData } from '@app-types/lesson';

/** Колонки таблицы модуля. Порядок колонок задаётся TOPIC_CATEGORIES. */
export type TopicCategory = 'vocabulary' | 'grammar' | 'practice';

export const TOPIC_CATEGORIES = [
  'vocabulary',
  'grammar',
  'practice',
] as const satisfies readonly TopicCategory[];

export const TOPIC_CATEGORY_LABELS: Record<TopicCategory, string> = {
  vocabulary: 'Vocabulary',
  grammar: 'Grammar',
  practice: 'Practice',
};

/** Цвет бейджа модуля. Ключ → CSS-переменная в компоненте. */
export type ModuleAccent = 'blue' | 'violet' | 'green' | 'orange' | 'pink';

/**
 * Тема = один пункт списка в ячейке таблицы = одна страница урока
 * (последовательность видео/упражнений, как в курсе alphabet).
 * steps отсутствуют — тема ещё не наполнена, ссылка неактивна.
 */
export interface TopicData {
  /** slug, уникальный внутри модуля: 'personality-adjectives' */
  slug: string;
  title: string;
  /** подзаголовок на странице урока */
  aboutTopic?: string;
  steps?: LessonStepData[];
}

export interface ModuleData {
  /**
   * Идентификатор модуля: сегмент URL и часть ключа прогресса.
   * Уникален внутри класса. 0 зарезервирован за вступительным блоком Starter.
   */
  id: number;
  /** Что показывать в бейдже вместо номера: 'S' у Starter. Одна-две буквы. */
  badge?: string;
  title: string;
  accent: ModuleAccent;
  topics: Record<TopicCategory, TopicData[]>;
}

export interface GradeData {
  grade: number;
  modules: ModuleData[];
}

/** Цветовая тема страницы учебника. Ключ → блок [data-theme] в TextbookPage. */
export type TextbookTheme = 'starlight' | 'spotlight';

export interface TextbookData {
  /** сегмент в URL: 'starlight' */
  slug: string;
  title: string;
  subtitle: string;
  /** импортированная картинка-иконка учебника */
  icon: string;
  grades: GradeData[];
  /** какой класс открыт по умолчанию */
  defaultGrade: number;
  theme: TextbookTheme;
}
