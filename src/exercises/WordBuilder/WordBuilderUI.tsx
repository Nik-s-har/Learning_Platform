import clsx from 'clsx';
import { ExerciseShell, FeedbackLine } from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import styles from './WordBuilder.module.css';
import type { WordBuilderItem } from './WordBuilderTypes';

export interface LetterTile {
  key: string;
  char: string;
}

export interface WordBuilderUIProps {
  item: WordBuilderItem;
  title?: string;
  instruction?: string;
  score: number;
  total: number;
  feedback: FeedbackState;
  pool: LetterTile[];
  placed: LetterTile[];
  onTake: (key: string) => void;
  onReturn: (key: string) => void;
}

function WordBuilderUI(props: WordBuilderUIProps) {
  const {
    item,
    title,
    instruction,
    score,
    total,
    feedback,
    pool,
    placed,
    onTake,
    onReturn,
  } = props;

  const assembled = placed.map((tile) => tile.char).join('');

  return (
    <ExerciseShell
      title={title}
      instruction={instruction}
      status={`Выполнено: ${score} из ${total}`}
      feedback={<FeedbackLine state={feedback} />}
    >
      {item.slots && item.slots.length > 0 && (
        <div className={styles.slots}>
          {item.slots.map((slot) => (
            <div
              key={slot.label}
              className={clsx(styles.slot, slot.target && styles.target)}
            >
              <span className={styles.slotLabel}>{slot.label}</span>
              <b className={styles.slotValue}>
                {slot.target ? assembled || '?' : slot.value}
              </b>
            </div>
          ))}
        </div>
      )}

      {placed.length > 0 && (
        <div className={styles.zone} aria-label="Собранное слово">
          {placed.map((tile) => (
            <button
              key={tile.key}
              type="button"
              className={clsx(styles.tile, styles.placed)}
              onClick={() => onReturn(tile.key)}
              aria-label={`Убрать букву ${tile.char}`}
            >
              {tile.char}
            </button>
          ))}
        </div>
      )}

      <div className={styles.zone} aria-label="Перемешанные буквы">
        {pool.map((tile) => (
          <button
            key={tile.key}
            type="button"
            className={styles.tile}
            onClick={() => onTake(tile.key)}
            aria-label={`Добавить букву ${tile.char}`}
          >
            {tile.char}
          </button>
        ))}
      </div>

      <p className={styles.hint}>
        Нажмите на букву в собранном слове, чтобы вернуть её обратно.
      </p>
    </ExerciseShell>
  );
}

export default WordBuilderUI;
