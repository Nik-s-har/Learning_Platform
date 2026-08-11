import { useMemo, useState } from 'react';
import {
  CompletionPanel,
  ExerciseShell,
  formatTime,
  shuffle,
  useRoundState,
  useRounds,
  useTimeouts,
  useTimer,
} from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import Button from '@ui/button';
import MemoryGameUI from './MemoryGameUI';
import type { MemoryCard } from './MemoryGameUI';
import type { MemoryGameProps } from './MemoryGameTypes';

const MISMATCH_MS = 700;
const ROUND_END_MS = 650;

interface RoundState {
  openKeys: string[];
  matchedPairIds: string[];
  wrongKeys: string[];
  feedback: FeedbackState;
  isDone: boolean;
}

const EMPTY_ROUND: RoundState = {
  openKeys: [],
  matchedPairIds: [],
  wrongKeys: [],
  feedback: 'idle',
  isDone: false,
};

/** «Мемори»: открываем карточки по две и ищем пары. Время идёт на всю игру. */
function MemoryGame({
  pairs,
  batchSize = 6,
  title,
  instruction,
  onFinish,
}: MemoryGameProps) {
  const { batch, batchIndex, hasMore, next, reset } = useRounds(
    pairs,
    batchSize,
  );
  const { schedule, clear } = useTimeouts();
  const timer = useTimer({ mode: 'up', autoStart: true });

  const [score, setScore] = useState(0);
  const [round, setRound] = useRoundState(batchIndex, EMPTY_ROUND);

  const cards = useMemo<MemoryCard[]>(() => {
    const deck = batch.flatMap((pair) => [
      { key: `${pair.id}:a`, pairId: pair.id, content: pair.a, number: 0 },
      { key: `${pair.id}:b`, pairId: pair.id, content: pair.b, number: 0 },
    ]);
    return shuffle(deck).map((card, position) => ({
      ...card,
      number: position + 1,
    }));
  }, [batch]);

  const total = pairs.length;

  const handleOpen = (key: string) => {
    const card = cards.find((candidate) => candidate.key === key);
    if (!card) return;
    if (round.openKeys.length >= 2) return;
    if (round.openKeys.includes(key)) return;
    if (round.matchedPairIds.includes(card.pairId)) return;

    const openKeys = [...round.openKeys, key];
    if (openKeys.length < 2) {
      setRound((current) => ({ ...current, openKeys }));
      return;
    }

    const [first, second] = openKeys.map((openKey) =>
      cards.find((candidate) => candidate.key === openKey),
    );

    if (first && second && first.pairId === second.pairId) {
      const matchedPairIds = [...round.matchedPairIds, first.pairId];
      const nextScore = score + 1;
      setScore(nextScore);
      setRound((current) => ({
        ...current,
        matchedPairIds,
        openKeys: [],
        feedback: 'good',
      }));

      if (matchedPairIds.length === batch.length) {
        // Секундомер останавливаем сразу, а не после паузы, —
        // иначе в итог попадёт лишнее время.
        if (!hasMore) timer.stop();
        schedule(() => {
          setRound((current) => ({ ...current, isDone: true }));
          if (!hasMore) {
            onFinish?.({
              score: nextScore,
              total,
              durationMs: timer.elapsedMs,
            });
          }
        }, ROUND_END_MS);
      }
      return;
    }

    setRound((current) => ({
      ...current,
      openKeys,
      wrongKeys: openKeys,
      feedback: 'bad',
    }));
    schedule(() => {
      setRound((current) => ({
        ...current,
        openKeys: [],
        wrongKeys: [],
        feedback: 'idle',
      }));
    }, MISMATCH_MS);
  };

  const restart = () => {
    clear();
    setScore(0);
    setRound(EMPTY_ROUND);
    reset();
    timer.reset();
    timer.start();
  };

  if (total === 0) return null;

  if (round.isDone) {
    return (
      <ExerciseShell title={title}>
        <CompletionPanel
          text={
            hasMore
              ? `Найдено пар: ${score} из ${total}.`
              : `Ваше время: ${formatTime(timer.elapsedMs)}`
          }
        >
          {hasMore ? (
            <Button variant="primary" colorScheme="blueWhite" onClick={next}>
              Далее
            </Button>
          ) : (
            <Button variant="primary" colorScheme="blueWhite" onClick={restart}>
              Играть ещё раз
            </Button>
          )}
        </CompletionPanel>
      </ExerciseShell>
    );
  }

  return (
    <MemoryGameUI
      cards={cards}
      title={title}
      instruction={instruction}
      score={score}
      total={total}
      elapsedMs={timer.elapsedMs}
      feedback={round.feedback}
      openKeys={round.openKeys}
      matchedPairIds={round.matchedPairIds}
      wrongKeys={round.wrongKeys}
      onOpen={handleOpen}
    />
  );
}

export default MemoryGame;
