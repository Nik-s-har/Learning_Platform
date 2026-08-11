import type { ReactNode } from 'react';
import type { BaseExerciseProps } from '@exercises/shared';

export interface SpotItItem {
  id: string;
  /** Картинка или эмодзи. */
  picture: ReactNode;
  /** Подпись для скринридера. */
  label?: string;
}

export interface SpotItProps extends BaseExerciseProps {
  items: SpotItItem[];
  /** Варианты длительности партии в секундах. */
  durationOptions?: number[];
}

/** Минимум картинок, из которых можно собрать две карточки. */
export const MIN_ITEMS = 5;
