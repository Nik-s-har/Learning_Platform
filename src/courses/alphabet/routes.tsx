import { AlphabetRoadmap, AlphabetLesson } from '@alphabet/pages';

export const alphabetRoutes = [
  { path: '/alphabet', element: <AlphabetRoadmap /> },
  { path: '/alphabet/lesson/:lessonId', element: <AlphabetLesson /> },
];
