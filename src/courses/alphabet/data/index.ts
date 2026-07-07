import type { CourseData } from '@app-types/lesson';
import mapSpotlight from '@assets/pictures/MapSpotlight.jpg';
import mapStarlight from '@assets/pictures/MapStarlight.jpg';
import { alphabetCourseData } from './alphabetLessons';
import { spotlightLessons } from './spotlightLessons';

export interface TextbookMeta {
  menuLabel: string;
  data: CourseData;
  mapImage: string;
  workbookUrl?: string;
  workbookDownloadName?: string;
}

// Реестр учебников курса «Алфавит». Движок один, меняется только контент.
// starlight — существующие данные (alphabetLessons.ts), редактируются в другой ветке.
export const alphabetTextbooks = {
  starlight: {
    menuLabel: 'Вводный курс к Starlight',
    data: alphabetCourseData,
    mapImage: mapStarlight,
    workbookUrl:
      'https://storage.yandexcloud.net/learning-platform-media/courses/introduction/starlight/pdf/Alphabet%20workbook%20StL.pdf',
    workbookDownloadName: 'Alphabet workbook StL.pdf',
  },
  spotlight: {
    menuLabel: 'Вводный курс к Spotlight',
    data: spotlightLessons,
    mapImage: mapSpotlight,
    workbookUrl:
      'https://storage.yandexcloud.net/learning-platform-media/courses/introduction/spotlight/pdf/Alphabet%20workbook%20SpL.pdf',
    workbookDownloadName: 'Alphabet workbook SpL.pdf',
  },
} satisfies Record<string, TextbookMeta>;

export type TextbookSlug = keyof typeof alphabetTextbooks;

export const isTextbookSlug = (
  value: string | undefined,
): value is TextbookSlug => value !== undefined && value in alphabetTextbooks;
