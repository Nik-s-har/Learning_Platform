import { useCallback, useEffect, useRef, useState } from 'react';
import {
  CompletionPanel,
  ExerciseShell,
  shuffle,
  useTimeouts,
  useTimer,
} from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import Button from '@ui/button';
import SpotItUI from './SpotItUI';
import styles from './SpotIt.module.css';
import { MIN_ITEMS } from './SpotItTypes';
import type { SpotItItem, SpotItProps } from './SpotItTypes';

const CORRECT_MS = 380;
const WRONG_MS = 300;

/** Сколько картинок на карточке — зависит от размера набора. */
function picturesPerCard(poolSize: number): number {
  if (poolSize < 10) return 3;
  if (poolSize < 18) return 4;
  return 5;
}

interface Round {
  commonId: string;
  cards: SpotItItem[][];
}

/**
 * «Spot it»: на двух карточках есть ровно одна общая картинка,
 * её нужно найти как можно больше раз за отведённое время.
 */
function SpotIt({
  items,
  durationOptions = [30, 60, 90, 120],
  title,
  instruction,
  onFinish,
}: SpotItProps) {
  const { schedule, clear } = useTimeouts();

  const [phase, setPhase] = useState<'setup' | 'playing' | 'done'>('setup');
  const [durationSec, setDurationSec] = useState(durationOptions[0]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState<Round | null>(null);
  const [feedback, setFeedback] = useState<FeedbackState>('idle');
  const [correctId, setCorrectId] = useState<string | null>(null);
  const [wrongKey, setWrongKey] = useState<string | null>(null);

  // Счёт нужен в колбэке таймера, который вызывается уже после последнего ответа.
  const scoreRef = useRef(0);

  const timer = useTimer({
    mode: 'down',
    durationMs: durationSec * 1000,
    // useTimer сам держит колбэк в актуальном состоянии — мемоизация не нужна.
    onExpire: () => {
      clear();
      setPhase('done');
      onFinish?.({ score: scoreRef.current, total: scoreRef.current });
    },
  });
  const { reset: resetTimer, start: startTimer } = timer;

  const dealRound = useCallback(() => {
    const pool = shuffle(items);
    const count = picturesPerCard(pool.length);
    const common = pool[0];
    const left = shuffle([common, ...pool.slice(1, count)]);
    const right = shuffle([common, ...pool.slice(count, count * 2 - 1)]);
    setRound({ commonId: common.id, cards: [left, right] });
  }, [items]);

  const begin = (seconds: number) => {
    clear();
    setDurationSec(seconds);
    setScore(0);
    scoreRef.current = 0;
    setFeedback('idle');
    setCorrectId(null);
    setWrongKey(null);
    dealRound();
    resetTimer();
    setPhase('playing');
  };

  // Таймер запускаем после того, как в него уехала новая длительность.
  useEffect(() => {
    if (phase === 'playing') startTimer();
  }, [phase, durationSec, startTimer]);

  const handlePick = (side: number, itemId: string) => {
    if (!round || correctId) return;

    if (itemId === round.commonId) {
      const nextScore = score + 1;
      setScore(nextScore);
      scoreRef.current = nextScore;
      setCorrectId(itemId);
      setFeedback('good');
      schedule(() => {
        setCorrectId(null);
        setFeedback('idle');
        dealRound();
      }, CORRECT_MS);
      return;
    }

    setFeedback('bad');
    setWrongKey(`${side}:${itemId}`);
    schedule(() => setWrongKey(null), WRONG_MS);
  };

  if (items.length < MIN_ITEMS) {
    return (
      <ExerciseShell title={title}>
        <div className={styles.setup}>
          <p>Для игры Spot it выберите не менее {MIN_ITEMS} глаголов.</p>
        </div>
      </ExerciseShell>
    );
  }

  if (phase === 'setup') {
    return (
      <ExerciseShell title={title} instruction={instruction}>
        <div className={styles.setup}>
          <p>Сколько времени будет длиться игра?</p>
          <div className={styles.timeOptions}>
            {durationOptions.map((seconds) => (
              <Button
                key={seconds}
                variant="primary"
                colorScheme="blueWhite"
                onClick={() => begin(seconds)}
              >
                {seconds < 60
                  ? `${seconds} секунд`
                  : `${seconds / 60} ${seconds === 60 ? 'минута' : 'минуты'}`}
              </Button>
            ))}
          </div>
        </div>
      </ExerciseShell>
    );
  }

  if (phase === 'done') {
    return (
      <ExerciseShell title={title}>
        <CompletionPanel text={`Your score: ${score}`}>
          <Button
            variant="primary"
            colorScheme="blueWhite"
            onClick={() => setPhase('setup')}
          >
            Играть ещё раз
          </Button>
        </CompletionPanel>
      </ExerciseShell>
    );
  }

  if (!round) return null;

  return (
    <SpotItUI
      cards={round.cards}
      title={title}
      instruction={instruction}
      score={score}
      remainingMs={timer.remainingMs}
      feedback={feedback}
      correctId={correctId}
      wrongKey={wrongKey}
      onPick={handlePick}
    />
  );
}

export default SpotIt;
