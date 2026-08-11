import type { RouteObject } from 'react-router-dom';
import { IrregularVerbsSelectionProvider } from './state';
import {
  IrregularVerbsSelect,
  IrregularVerbsExercises,
  IrregularVerbsExercise,
} from './pages';
import { IRREGULAR_VERBS_PATH } from './data';

/**
 * Все три экрана тренажёра живут под общим провайдером,
 * поэтому выбор глаголов не теряется при переходах.
 */
export const irregularVerbsRoutes: RouteObject[] = [
  {
    path: IRREGULAR_VERBS_PATH,
    element: (
      <IrregularVerbsSelectionProvider>
        <IrregularVerbsSelect />
      </IrregularVerbsSelectionProvider>
    ),
  },
  {
    path: `${IRREGULAR_VERBS_PATH}/exercises`,
    element: (
      <IrregularVerbsSelectionProvider>
        <IrregularVerbsExercises />
      </IrregularVerbsSelectionProvider>
    ),
  },
  {
    path: `${IRREGULAR_VERBS_PATH}/:exerciseId`,
    element: (
      <IrregularVerbsSelectionProvider>
        <IrregularVerbsExercise />
      </IrregularVerbsSelectionProvider>
    ),
  },
];
