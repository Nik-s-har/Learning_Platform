import type { RouteObject } from 'react-router-dom';
import { TopicLesson } from './pages';

/**
 * Форма URL совпадает с topicKey: /:textbook/:grade/:module/:topic.
 * Роут полностью динамический, но роуты со статическими сегментами
 * (например /alphabet/:textbook/lesson/:lessonId) ранжируются выше,
 * а чужой textbook отсеивает isTextbookSlug внутри страницы.
 */
export const textbookRoutes: RouteObject[] = [
  { path: '/:textbook/:grade/:module/:topic', element: <TopicLesson /> },
];
