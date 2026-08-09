export { verbs, verbGrades, verbByInfinitive } from './verbs';
export { getVerbMedia } from './media';
export type { VerbMedia } from './media';
export {
  irregularExercises,
  isIrregularExerciseId,
  getIrregularExercise,
} from './exercises';
export type { IrregularExerciseId, IrregularExerciseMeta } from './exercises';

/** Базовый адрес тренажёра. */
export const IRREGULAR_VERBS_PATH = '/trainers/irregular-verbs';

/** Описание тренажёра для меню и списка тренажёров. */
export const irregularVerbsTrainer = {
  slug: 'irregular-verbs',
  path: IRREGULAR_VERBS_PATH,
  menuLabel: 'Неправильные глаголы',
  title: 'Тренажёр неправильных глаголов',
  description:
    'Восемь упражнений на формы неправильных глаголов: карточки, пары, сортировка, мемори и другие.',
};
