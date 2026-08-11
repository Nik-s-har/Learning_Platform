import { shuffle } from '@exercises/shared';
import type { SortColumn, SortRow } from '@exercises/SortTable';
import type { Verb } from '../types';

export const sortColumns: SortColumn[] = [
  { id: 'infinitive', label: 'Infinitive' },
  { id: 'past', label: 'Past Simple' },
  { id: 'participle', label: 'Past Participle' },
];

const COLUMN_ORDER = ['infinitive', 'past', 'participle'] as const;

/**
 * Сортировка: в каждой строке одна форма дана как подсказка,
 * две другие нужно поставить самому. Подсказка сдвигается по колонкам,
 * чтобы ученик не привыкал к одному столбцу.
 */
export function toSortRows(verbs: Verb[]): SortRow[] {
  return shuffle(verbs).map((verb, rowIndex) => {
    const fixedColumn = COLUMN_ORDER[rowIndex % COLUMN_ORDER.length];

    return {
      id: verb.infinitive,
      cells: COLUMN_ORDER.map((columnId) => ({
        columnId,
        value: verb[columnId],
        fixed: columnId === fixedColumn,
      })),
    };
  });
}
