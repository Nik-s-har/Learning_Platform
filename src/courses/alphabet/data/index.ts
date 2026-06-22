import type { CourseData } from '@app-types/lesson';
import { alphabetCourseData } from './alphabetLessons';
import { spotlightLessons } from './spotlightLessons';

export interface TextbookMeta {
  menuLabel: string;
  data: CourseData;
}

// Реестр учебников курса «Алфавит». Движок один, меняется только контент.
// starlight — существующие данные (alphabetLessons.ts), редактируются в другой ветке.
export const alphabetTextbooks = {
  starlight: {
    menuLabel: 'Вводный курс к Starlight',
    data: alphabetCourseData,
  },
  spotlight: {
    menuLabel: 'Вводный курс к Spotlight',
    data: spotlightLessons,
  },
} satisfies Record<string, TextbookMeta>;

export type TextbookSlug = keyof typeof alphabetTextbooks;

export const isTextbookSlug = (
  value: string | undefined,
): value is TextbookSlug => value !== undefined && value in alphabetTextbooks;
