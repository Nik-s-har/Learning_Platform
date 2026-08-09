import type { ReactNode } from 'react';
import type { BaseExerciseProps } from '@exercises/shared';

export interface QuizOption {
  id: string;
  content: ReactNode;
  correct: boolean;
}

export interface QuizQuestion {
  id: string;
  /** Условие: слово, три формы глагола, картинка, звук. */
  prompt: ReactNode;
  options: QuizOption[];
}

export interface QuizChoiceProps extends BaseExerciseProps {
  questions: QuizQuestion[];
}
