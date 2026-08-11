import type { BaseExerciseProps } from '@exercises/shared';

export interface SortColumn {
  id: string;
  label: string;
}

export interface SortCell {
  columnId: string;
  value: string;
  /** Заранее заполненная ячейка — подсказка, её не двигают. */
  fixed?: boolean;
}

export interface SortRow {
  id: string;
  cells: SortCell[];
}

export interface SortTableProps extends BaseExerciseProps {
  columns: SortColumn[];
  rows: SortRow[];
  /** Сколько строк показывать за раунд. */
  batchSize?: number;
}

/** Карточка в пуле: значение, которое нужно поставить в свою ячейку. */
export interface SortToken {
  /** Совпадает с ключом «своей» ячейки — по нему и проверяем ответ. */
  id: string;
  rowId: string;
  columnId: string;
  value: string;
}

/** Ключ ячейки таблицы. */
export const cellKey = (rowId: string, columnId: string) =>
  `${rowId}|${columnId}`;
