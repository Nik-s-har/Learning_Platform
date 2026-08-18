import type { RouteObject } from 'react-router-dom';
import { STARLIGHT_ALPHABET_PATH } from './data';
import { StarlightAlphabetPage } from './pages';

export const starlightAlphabetRoutes: RouteObject[] = [
  {
    path: STARLIGHT_ALPHABET_PATH,
    element: <StarlightAlphabetPage />,
  },
];
