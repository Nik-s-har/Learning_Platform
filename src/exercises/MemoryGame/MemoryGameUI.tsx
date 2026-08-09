import type { ReactNode } from 'react';
import clsx from 'clsx';
import { ExerciseShell, FeedbackLine, formatTime } from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import styles from './MemoryGame.module.css';

export interface MemoryCard {
  /** Уникальный ключ карточки. */
  key: string;
  /** Идентификатор пары, к которой относится карточка. */
  pairId: string;
  content: ReactNode;
  /** Номер на рубашке. */
  number: number;
}

export interface MemoryGameUIProps {
  cards: MemoryCard[];
  title?: string;
  instruction?: string;
  score: number;
  total: number;
  elapsedMs: number;
  feedback: FeedbackState;
  openKeys: string[];
  matchedPairIds: string[];
  wrongKeys: string[];
  onOpen: (key: string) => void;
}

function MemoryGameUI(props: MemoryGameUIProps) {
  const {
    cards,
    title,
    instruction,
    score,
    total,
    elapsedMs,
    feedback,
    openKeys,
    matchedPairIds,
    wrongKeys,
    onOpen,
  } = props;

  return (
    <ExerciseShell
      title={title}
      instruction={instruction}
      status={`Найдено пар: ${score} из ${total}`}
      feedback={<FeedbackLine state={feedback} />}
    >
      <p className={styles.timer}>Time: {formatTime(elapsedMs)}</p>
      <div className={styles.board}>
        {cards.map((card) => {
          const isMatched = matchedPairIds.includes(card.pairId);
          const isOpen = openKeys.includes(card.key);
          return (
            <button
              key={card.key}
              type="button"
              className={clsx(
                styles.card,
                isOpen && styles.opened,
                isMatched && styles.matched,
                wrongKeys.includes(card.key) && styles.wrong,
              )}
              onClick={() => onOpen(card.key)}
              disabled={isMatched}
              aria-label={
                isOpen || isMatched ? undefined : `Карточка ${card.number}`
              }
            >
              <span className={styles.inner}>
                <span className={clsx(styles.face, styles.back)}>
                  {card.number}
                </span>
                <span className={clsx(styles.face, styles.front)}>
                  {card.content}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </ExerciseShell>
  );
}

export default MemoryGameUI;
