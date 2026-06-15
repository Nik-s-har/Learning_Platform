import type { CourseData } from '@app-types/lesson';
import Tort from '@assets/pictures/tort-48x64.png';

// TODO: Spotlight content — структурная заглушка, заполнить видео и Wordwall-ссылки.
// Структура повторяет alphabetLessons.ts (Starlight): уроки c id, title, image,
// content и опциональным массивом steps (video | exercise).
export const spotlightLessons: CourseData = [
  {
    id: 1,
    title: 'Урок 1',
    image: Tort,
    content: 'A, B, C, D',
    steps: [
      // {
      //   type: 'video',
      //   src: mediaUrl('courses/spotlight/alphabet/video/ABCD.mp4'),
      //   aboutLesson: '...',
      // },
      // {
      //   type: 'exercise',
      //   src: 'https://wordwall.net/embed/...',
      //   aboutLesson: '...',
      // },
    ],
  },
  {
    id: 2,
    title: 'Урок 2',
    image: Tort,
    content: 'Продолжаем изучать алфавит',
  },
  {
    id: 3,
    title: 'Урок 3',
    image: Tort,
    content: 'Веселые звуки',
  },
  {
    id: 4,
    title: 'Урок 4',
    image: Tort,
    content: 'Магия букв',
  },
  {
    id: 5,
    title: 'Урок 5',
    image: Tort,
    content: 'Путешествие продолжается',
  },
  {
    id: 6,
    title: 'Урок 6',
    image: Tort,
    content: 'Почти у цели',
  },
  {
    id: 7,
    title: 'Урок 7',
    image: Tort,
    content: 'Мы это сделали!',
  },
];
