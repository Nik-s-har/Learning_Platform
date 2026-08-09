/** Идентификаторы упражнений тренажёра — попадают в адрес страницы. */
export type IrregularExerciseId =
  | 'cards'
  | 'recall'
  | 'pair'
  | 'choice'
  | 'word'
  | 'sort'
  | 'memory'
  | 'spot';

export interface IrregularExerciseMeta {
  id: IrregularExerciseId;
  title: string;
  /** Описание на карточке выбора упражнения. */
  description: string;
  /** Подсказка на самом игровом экране. */
  instruction?: string;
  /** Минимальное число выбранных глаголов. */
  minVerbs?: number;
}

export const irregularExercises: IrregularExerciseMeta[] = [
  {
    id: 'cards',
    title: 'Карточки',
    description:
      'Повторяйте формы, слушайте произношение и проверяйте перевод.',
    instruction: 'Чтобы узнать перевод, нажмите на карточку.',
  },
  {
    id: 'recall',
    title: 'Вспомни форму глагола',
    description: 'Посмотрите на инфинитив и проверьте вторую и третью формы.',
    instruction:
      'Вспомните вторую и третью формы. Чтобы проверить себя, нажмите на карточку.',
  },
  {
    id: 'pair',
    title: 'Найди пару',
    description: 'Соедините три формы глагола с его переводом.',
    instruction:
      'Сначала выберите карточку с формами, затем найдите её перевод.',
  },
  {
    id: 'choice',
    title: 'Выбери правильный ответ',
    description: 'Выберите перевод для трёх форм глагола.',
  },
  {
    id: 'word',
    title: 'Составь слово',
    description: 'Расставьте перемешанные буквы в правильном порядке.',
  },
  {
    id: 'sort',
    title: 'Сортировка',
    description: 'Распределите формы по трём колонкам таблицы.',
    instruction:
      'Перетащите карточку в нужную ячейку или выберите её и нажмите на ячейку.',
  },
  {
    id: 'memory',
    title: 'Мемори',
    description: 'Найдите пары: инфинитив с картинкой и две остальные формы.',
    instruction:
      'Найдите пары: инфинитив с картинкой и формы Past Simple и Past Participle.',
  },
  {
    id: 'spot',
    title: 'Spot it',
    description:
      'Найдите одинаковую картинку на двух карточках за выбранное время.',
    instruction: 'Найдите одинаковую картинку на двух карточках.',
    minVerbs: 5,
  },
];

export const isIrregularExerciseId = (
  value: string | undefined,
): value is IrregularExerciseId =>
  value !== undefined &&
  irregularExercises.some((exercise) => exercise.id === value);

export const getIrregularExercise = (id: IrregularExerciseId) =>
  irregularExercises.find((exercise) => exercise.id === id);
