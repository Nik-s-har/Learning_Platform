import { AlphabetRoadmap, AlphabetLesson } from '@alphabet/pages';

export const alphabetRoutes = [
  { path: '/alphabet/:textbook', element: <AlphabetRoadmap /> },
  { path: '/alphabet/:textbook/lesson/:lessonId', element: <AlphabetLesson /> },
];
