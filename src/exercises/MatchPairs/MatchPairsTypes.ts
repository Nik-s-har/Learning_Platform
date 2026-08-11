import type { ReactNode } from 'react';
import type { BaseExerciseProps } from '@exercises/shared';

export interface MatchPair {
  id: string;
  /** Содержимое карточки левой колонки. */
  left: ReactNode;
  /** Содержимое парной карточки правой колонки. */
  right: ReactNode;
}

export interface MatchPairsProps extends BaseExerciseProps {
  pairs: MatchPair[];
  /** Сколько пар показывать за один раунд. */
  batchSize?: number;
}
