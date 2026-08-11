import clsx from 'clsx';
import { ExerciseShell, FeedbackLine, formatTime } from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import styles from './SpotIt.module.css';
import type { SpotItItem } from './SpotItTypes';

export interface SpotItUIProps {
  cards: SpotItItem[][];
  title?: string;
  instruction?: string;
  score: number;
  remainingMs: number;
  feedback: FeedbackState;
  correctId: string | null;
  wrongKey: string | null;
  onPick: (side: number, itemId: string) => void;
}

function SpotItUI(props: SpotItUIProps) {
  const {
    cards,
    title,
    instruction,
    score,
    remainingMs,
    feedback,
    correctId,
    wrongKey,
    onPick,
  } = props;

  const count = cards[0]?.length ?? 0;

  return (
    <ExerciseShell
      title={title}
      instruction={instruction}
      status={`Your score: ${score}`}
      feedback={<FeedbackLine state={feedback} />}
    >
      <p className={styles.timer}>Time: {formatTime(remainingMs)}</p>
      <div className={styles.board}>
        {cards.map((card, side) => (
          <div
            key={side}
            className={clsx(
              styles.card,
              count === 3 && styles.count3,
              count === 5 && styles.count5,
            )}
          >
            {card.map((item) => (
              <button
                key={`${side}:${item.id}`}
                type="button"
                className={clsx(
                  styles.picture,
                  correctId === item.id && styles.correct,
                  wrongKey === `${side}:${item.id}` && styles.wrong,
                )}
                onClick={() => onPick(side, item.id)}
                aria-label={item.label ?? item.id}
              >
                {item.picture}
              </button>
            ))}
          </div>
        ))}
      </div>
    </ExerciseShell>
  );
}

export default SpotItUI;
