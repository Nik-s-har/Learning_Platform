import type { ReactNode } from 'react';
import type { BaseExerciseProps } from '@exercises/shared';

export interface MemoryPair {
  id: string;
  /** Содержимое первой карточки пары. */
  a: ReactNode;
  /** Содержимое второй карточки пары. */
  b: ReactNode;
}

export interface MemoryGameProps extends BaseExerciseProps {
  pairs: MemoryPair[];
  /** Сколько пар в одном раунде. */
  batchSize?: number;
}
