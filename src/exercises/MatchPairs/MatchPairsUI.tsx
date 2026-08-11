import clsx from 'clsx';
import { ExerciseShell, FeedbackLine } from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import styles from './MatchPairs.module.css';
import type { MatchPair } from './MatchPairsTypes';

export interface MatchPairsUIProps {
  leftCards: MatchPair[];
  rightCards: MatchPair[];
  title?: string;
  instruction?: string;
  score: number;
  total: number;
  feedback: FeedbackState;
  activeId: string | null;
  matchedIds: string[];
  wrongIds: string[];
  onSelectLeft: (id: string) => void;
  onSelectRight: (id: string) => void;
}

function MatchPairsUI(props: MatchPairsUIProps) {
  const {
    leftCards,
    rightCards,
    title,
    instruction,
    score,
    total,
    feedback,
    activeId,
    matchedIds,
    wrongIds,
    onSelectLeft,
    onSelectRight,
  } = props;

  const cardClass = (id: string, side: 'left' | 'right') =>
    clsx(
      styles.card,
      matchedIds.includes(id) && styles.matched,
      wrongIds.includes(`${side}:${id}`) && styles.wrong,
      side === 'left' && activeId === id && styles.active,
    );

  return (
    <ExerciseShell
      title={title}
      instruction={instruction}
      status={`Найдено пар: ${score} из ${total}`}
      feedback={<FeedbackLine state={feedback} />}
    >
      <div className={styles.board}>
        <div className={styles.column}>
          {leftCards.map((pair) => (
            <button
              key={pair.id}
              type="button"
              className={cardClass(pair.id, 'left')}
              onClick={() => onSelectLeft(pair.id)}
              disabled={matchedIds.includes(pair.id)}
            >
              {pair.left}
            </button>
          ))}
        </div>
        <div className={styles.column}>
          {rightCards.map((pair) => (
            <button
              key={pair.id}
              type="button"
              className={cardClass(pair.id, 'right')}
              onClick={() => onSelectRight(pair.id)}
              disabled={matchedIds.includes(pair.id)}
            >
              {pair.right}
            </button>
          ))}
        </div>
      </div>
    </ExerciseShell>
  );
}

export default MatchPairsUI;
