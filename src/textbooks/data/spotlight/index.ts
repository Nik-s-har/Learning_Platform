import type { TextbookData } from '@textbooks/types/textbook';
import star from '@assets/pictures/Star.webp';
import { spotlightGrade2 } from './grade2';
import { spotlightGrade3 } from './grade3';
import { spotlightGrade4 } from './grade4';

// Классы, для которых уже есть данные. Добавление класса = новый файл gradeN.ts
// и одна строка в этом массиве.
export const spotlightTextbook: TextbookData = {
  slug: 'spotlight',
  title: 'Spotlight',
  subtitle: 'Звёздный английский',
  icon: star,
  defaultGrade: 2,
  grades: [spotlightGrade2, spotlightGrade3, spotlightGrade4],
  theme: 'spotlight',
};
