import clsx from 'clsx';
import styles from './FeedbackLine.module.css';
import type { FeedbackState } from '../../types';

export interface FeedbackLineProps {
  state: FeedbackState;
  goodText?: string;
  badText?: string;
}

/**
 * Строка «Correct / Try again» под игровым полем.
 * Высота зарезервирована всегда, чтобы поле не прыгало.
 */
function FeedbackLine({
  state,
  goodText = 'Correct',
  badText = 'Try again',
}: FeedbackLineProps) {
  return (
    <p
      className={clsx(
        styles.line,
        state === 'good' && styles.good,
        state === 'bad' && styles.bad,
      )}
      aria-live="polite"
    >
      {state === 'good' ? goodText : state === 'bad' ? badText : ''}
    </p>
  );
}

export default FeedbackLine;
