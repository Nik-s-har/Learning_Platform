import type { TextbookData } from '@textbooks/types/textbook';
import star from '@assets/pictures/Star.webp';
import { starlightGrade4 } from './grade4';

// Классы, для которых уже есть данные. Добавление класса = новый файл gradeN.ts
// и одна строка в этом массиве.
export const starlightTextbook: TextbookData = {
  slug: 'starlight',
  title: 'Starlight',
  subtitle: 'Звёздный английский',
  icon: star,
  defaultGrade: 4,
  grades: [starlightGrade4],
};
