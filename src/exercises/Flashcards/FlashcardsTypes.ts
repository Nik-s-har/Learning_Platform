import type { ReactNode } from 'react';
import type { BaseExerciseProps } from '@exercises/shared';

export interface FlashcardItem {
  id: string;
  /** Лицевая сторона — то, что видно до переворота. */
  front: ReactNode;
  /** Обратная сторона — ответ. */
  back: ReactNode;
  /** Фразы для озвучки. Если не передать, кнопка звука не появится. */
  speech?: string[];
}

export interface FlashcardsProps extends BaseExerciseProps {
  cards: FlashcardItem[];
  /** Подпись на кнопке звука для скринридера. */
  speechLabel?: string;
}
