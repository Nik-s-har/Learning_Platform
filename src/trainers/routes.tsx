import type { RouteObject } from 'react-router-dom';
import { irregularVerbsRoutes } from './irregularVerbs/routes';

/** Роуты всех тренажёров одним списком. */
export const trainerRoutes: RouteObject[] = [...irregularVerbsRoutes];
