import { useCallback, useMemo, useState } from 'react';
import { chunk } from '../lib/shuffle';

export interface UseRoundsResult<T> {
  /** Элементы текущего раунда. */
  batch: T[];
  /** Номер текущего раунда, начиная с нуля. */
  batchIndex: number;
  /** Сколько раундов всего. */
  batchCount: number;
  /** Есть ли ещё раунды после текущего. */
  hasMore: boolean;
  /** Перейти к следующему раунду. */
  next: () => void;
  /** Начать сначала. */
  reset: () => void;
}

/**
 * Разбивает набор заданий на раунды по `batchSize` штук.
 * Используется там, где показывать все задания сразу неудобно:
 * «Найди пару», «Сортировка», «Мемори».
 */
export function useRounds<T>(
  items: readonly T[],
  batchSize: number,
): UseRoundsResult<T> {
  const [batchIndex, setBatchIndex] = useState(0);

  const batches = useMemo(() => chunk(items, batchSize), [items, batchSize]);

  const next = useCallback(() => {
    setBatchIndex((index) => Math.min(index + 1, batches.length - 1));
  }, [batches.length]);

  const reset = useCallback(() => setBatchIndex(0), []);

  return {
    batch: batches[batchIndex] ?? [],
    batchIndex,
    batchCount: batches.length,
    hasMore: batchIndex < batches.length - 1,
    next,
    reset,
  };
}
