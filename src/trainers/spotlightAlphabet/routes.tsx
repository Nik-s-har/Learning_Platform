import type { RouteObject } from 'react-router-dom';
import { SPOTLIGHT_ALPHABET_PATH } from './data';
import { SpotlightAlphabetPage } from './pages';

export const spotlightAlphabetRoutes: RouteObject[] = [
  {
    path: SPOTLIGHT_ALPHABET_PATH,
    element: <SpotlightAlphabetPage />,
  },
];
