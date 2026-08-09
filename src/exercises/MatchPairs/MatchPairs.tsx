import { useMemo, useState } from 'react';
import {
  CompletionPanel,
  ExerciseShell,
  shuffle,
  useRoundState,
  useRounds,
  useTimeouts,
} from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import Button from '@ui/button';
import MatchPairsUI from './MatchPairsUI';
import type { MatchPairsProps } from './MatchPairsTypes';

const WRONG_HIGHLIGHT_MS = 400;
const ROUND_END_MS = 450;

interface RoundState {
  matchedIds: string[];
  activeId: string | null;
  wrongIds: string[];
  feedback: FeedbackState;
  isDone: boolean;
}

const EMPTY_ROUND: RoundState = {
  matchedIds: [],
  activeId: null,
  wrongIds: [],
  feedback: 'idle',
  isDone: false,
};

/**
 * «Найди пару»: сначала карточка слева, затем парная справа.
 * Пары показываются раундами, чтобы поле помещалось на экране.
 */
function MatchPairs({
  pairs,
  batchSize = 6,
  title,
  instruction,
  onFinish,
}: MatchPairsProps) {
  const { batch, batchIndex, hasMore, next, reset } = useRounds(
    pairs,
    batchSize,
  );
  const { schedule, clear } = useTimeouts();

  const [score, setScore] = useState(0);
  const [round, setRound] = useRoundState(batchIndex, EMPTY_ROUND);

  const leftCards = useMemo(() => shuffle(batch), [batch]);
  const rightCards = useMemo(() => shuffle(batch), [batch]);

  const total = pairs.length;

  const flashWrong = (keys: string[]) => {
    setRound((current) => ({ ...current, feedback: 'bad', wrongIds: keys }));
    schedule(
      () => setRound((current) => ({ ...current, wrongIds: [] })),
      WRONG_HIGHLIGHT_MS,
    );
  };

  const handleSelectLeft = (id: string) => {
    if (round.matchedIds.includes(id)) return;
    setRound((current) => ({ ...current, activeId: id, feedback: 'idle' }));
  };

  const handleSelectRight = (id: string) => {
    if (round.matchedIds.includes(id)) return;

    if (!round.activeId) {
      flashWrong([`right:${id}`]);
      return;
    }

    if (round.activeId !== id) {
      flashWrong([`right:${id}`, `left:${round.activeId}`]);
      return;
    }

    const matchedIds = [...round.matchedIds, id];
    const nextScore = score + 1;
    setScore(nextScore);
    setRound((current) => ({
      ...current,
      matchedIds,
      activeId: null,
      feedback: 'good',
    }));

    if (matchedIds.length === batch.length) {
      schedule(() => {
        setRound((current) => ({ ...current, isDone: true }));
        if (!hasMore) onFinish?.({ score: nextScore, total });
      }, ROUND_END_MS);
    }
  };

  const restart = () => {
    clear();
    setScore(0);
    setRound(EMPTY_ROUND);
    reset();
  };

  if (total === 0) return null;

  if (round.isDone) {
    return (
      <ExerciseShell title={title}>
        <CompletionPanel text={`Найдено пар: ${score} из ${total}.`}>
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
    <MatchPairsUI
      leftCards={leftCards}
      rightCards={rightCards}
      title={title}
      instruction={instruction}
      score={score}
      total={total}
      feedback={round.feedback}
      activeId={round.activeId}
      matchedIds={round.matchedIds}
      wrongIds={round.wrongIds}
      onSelectLeft={handleSelectLeft}
      onSelectRight={handleSelectRight}
    />
  );
}

export default MatchPairs;
