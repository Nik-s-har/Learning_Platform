import { Volume2 } from 'lucide-react';
import clsx from 'clsx';
import Button from '@ui/button';
import { ExerciseShell } from '@exercises/shared';
import styles from './Flashcards.module.css';
import type { FlashcardItem } from './FlashcardsTypes';

export interface FlashcardsUIProps {
  card: FlashcardItem;
  index: number;
  total: number;
  isFlipped: boolean;
  title?: string;
  instruction?: string;
  speechLabel: string;
  canSpeak: boolean;
  isFirst: boolean;
  isLast: boolean;
  onFlip: () => void;
  onSpeak: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function FlashcardsUI(props: FlashcardsUIProps) {
  const {
    card,
    index,
    total,
    isFlipped,
    title,
    instruction,
    speechLabel,
    canSpeak,
    isFirst,
    isLast,
    onFlip,
    onSpeak,
    onPrev,
    onNext,
  } = props;

  return (
    <ExerciseShell
      title={title}
      instruction={instruction}
      status={`Карточка ${index + 1} из ${total}`}
    >
      <div className={styles.stage}>
        <div className={styles.cardWrap}>
          <button
            type="button"
            className={clsx(styles.card, isFlipped && styles.flipped)}
            onClick={onFlip}
            aria-label="Перевернуть карточку"
            aria-pressed={isFlipped}
          >
            <span className={styles.face}>{card.front}</span>
            <span className={clsx(styles.face, styles.back)}>{card.back}</span>
          </button>
        </div>

        {canSpeak && (
          <Button
            variant="round"
            colorScheme="whiteBlack"
            className={styles.soundBtn}
            onClick={onSpeak}
            aria-label={speechLabel}
            title={speechLabel}
          >
            <Volume2 />
          </Button>
        )}

        <div className={styles.progress}>
          {index + 1} из {total}
        </div>

        <div className={styles.nav}>
          <Button
            variant="primary"
            colorScheme="whiteBlack"
            onClick={onPrev}
            disabled={isFirst}
          >
            Назад
          </Button>
          <Button variant="primary" colorScheme="blueWhite" onClick={onNext}>
            {isLast ? 'Сначала' : 'Далее'}
          </Button>
        </div>
      </div>
    </ExerciseShell>
  );
}

export default FlashcardsUI;
