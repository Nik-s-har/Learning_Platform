import type { BaseExerciseProps } from '@exercises/shared';

export interface WordBuilderSlot {
  /** Подпись над ячейкой: Infinitive, Past Simple и т.п. */
  label: string;
  /** Готовое значение. У собираемой ячейки не используется. */
  value?: string;
  /** Эту ячейку и собирает ученик. Ровно одна на задание. */
  target?: boolean;
}

export interface WordBuilderItem {
  id: string;
  /** Слово, которое нужно собрать. */
  answer: string;
  /** Контекст вокруг собираемого слова. Может отсутствовать. */
  slots?: WordBuilderSlot[];
}

export interface WordBuilderProps extends BaseExerciseProps {
  items: WordBuilderItem[];
}
