import type { RouteObject } from 'react-router-dom';
import { irregularVerbsRoutes } from './irregularVerbs/routes';
import { starlightAlphabetRoutes } from './starlightAlphabet/routes';
import { spotlightAlphabetRoutes } from './spotlightAlphabet/routes';

/** Роуты всех тренажёров одним списком. */
export const trainerRoutes: RouteObject[] = [
  ...irregularVerbsRoutes,
  ...starlightAlphabetRoutes,
  ...spotlightAlphabetRoutes,
];
