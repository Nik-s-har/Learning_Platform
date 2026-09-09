import type {
  GradeData,
  ModuleData,
  TextbookData,
  TopicCategory,
  TopicData,
} from '@textbooks/types/textbook';
import { TOPIC_CATEGORIES } from '@textbooks/types/textbook';
import { starlightTextbook } from './data/starlight';
import { spotlightTextbook } from './data/spotlight';

// Реестр учебников. Страница и роуты одни на всех, меняется только контент.
export const textbooks = {
  starlight: starlightTextbook,
  spotlight: spotlightTextbook,
} satisfies Record<string, TextbookData>;

export type TextbookSlug = keyof typeof textbooks;

export const isTextbookSlug = (
  value: string | undefined,
): value is TextbookSlug => value !== undefined && value in textbooks;

export const findGrade = (
  textbook: TextbookData,
  grade: number | string | undefined,
): GradeData | undefined =>
  textbook.grades.find((item) => item.grade === Number(grade));

export const findModule = (
  grade: GradeData,
  moduleId: number | string | undefined,
): ModuleData | undefined =>
  grade.modules.find((item) => item.id === Number(moduleId));

export const findTopic = (
  module: ModuleData,
  topicSlug: string | undefined,
): { topic: TopicData; category: TopicCategory } | undefined => {
  for (const category of TOPIC_CATEGORIES) {
    const topic = module.topics[category].find(
      (item) => item.slug === topicSlug,
    );
    if (topic) return { topic, category };
  }
  return undefined;
};

export const hasContent = (topic: TopicData): boolean =>
  (topic.steps?.length ?? 0) > 0;

/** Ключ прогресса, стабильный для будущей таблицы в Supabase. */
export const topicKey = (
  textbookSlug: string,
  grade: number,
  moduleId: number,
  topicSlug: string,
): string => `${textbookSlug}/${grade}/${moduleId}/${topicSlug}`;

/** URL страницы темы. Совпадает по форме с topicKey — идентификатор один. */
export const topicPath = (
  textbookSlug: string,
  grade: number,
  moduleId: number,
  topicSlug: string,
): string => `/${topicKey(textbookSlug, grade, moduleId, topicSlug)}`;

/** Плоский список тем модуля в порядке колонок — для «следующего урока». */
export const flattenTopics = (module: ModuleData): TopicData[] =>
  TOPIC_CATEGORIES.flatMap((category) => module.topics[category]);
