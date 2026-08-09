import { useMemo, useState } from 'react';
import {
  CompletionPanel,
  ExerciseShell,
  shuffle,
  useRoundState,
  useTimeouts,
} from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import Button from '@ui/button';
import WordBuilderUI from './WordBuilderUI';
import type { LetterTile } from './WordBuilderUI';
import type { WordBuilderProps } from './WordBuilderTypes';

const CORRECT_DELAY_MS = 700;
const WRONG_DELAY_MS = 650;
const CHECK_DELAY_MS = 120;

interface ItemState {
  /** Ключи букв, уже выложенных в слово, по порядку. */
  placedKeys: string[];
  feedback: FeedbackState;
}

const EMPTY_ITEM: ItemState = { placedKeys: [], feedback: 'idle' };

/**
 * Раскладывает слово на перемешанные плитки-буквы.
 * Номер попытки попадает в ключи, поэтому после неудачи плитки считаются
 * новыми и ранее выложенные буквы к ним не «прилипают».
 */
function scramble(word: string, attempt: number): LetterTile[] {
  const letters = word.replace(/[^\p{L}]/gu, '').split('');
  let mixed = shuffle(letters);
  // Не даём выдать сразу собранное слово.
  if (mixed.join('') === letters.join('') && letters.length > 1) {
    mixed = [...mixed.slice(1), mixed[0]];
  }
  return mixed.map((char, position) => ({
    key: `${attempt}-${position}-${char}`,
    char,
  }));
}

/** «Составь слово»: буквы перемешаны, нужно выложить их по порядку. */
function WordBuilder({
  items,
  title,
  instruction,
  onFinish,
}: WordBuilderProps) {
  const { schedule, clear } = useTimeouts();

  const [index, setIndex] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const total = items.length;
  const item = items[index];

  // Ключ попытки: новая раскладка букв нужна и на новом слове,
  // и после неудачной попытки.
  const attemptKey = `${index}:${attempt}`;
  const [state, setState] = useRoundState(attemptKey, EMPTY_ITEM);

  const tiles = useMemo(
    () => (item ? scramble(item.answer, attempt) : []),
    [item, attempt],
  );

  const placed = state.placedKeys
    .map((key) => tiles.find((tile) => tile.key === key))
    .filter((tile): tile is LetterTile => tile !== undefined);
  const pool = tiles.filter((tile) => !state.placedKeys.includes(tile.key));

  const check = (placedKeys: string[]) => {
    const assembled = placedKeys
      .map((key) => tiles.find((tile) => tile.key === key)?.char ?? '')
      .join('');

    if (assembled.toLowerCase() === item.answer.toLowerCase()) {
      const nextScore = score + 1;
      setScore(nextScore);
      setState((current) => ({ ...current, feedback: 'good' }));
      schedule(() => {
        if (index === total - 1) {
          setIsDone(true);
          onFinish?.({ score: nextScore, total });
        } else {
          setIndex((current) => current + 1);
        }
      }, CORRECT_DELAY_MS);
      return;
    }

    setState((current) => ({ ...current, feedback: 'bad' }));
    schedule(() => setAttempt((current) => current + 1), WRONG_DELAY_MS);
  };

  const handleTake = (key: string) => {
    if (state.feedback !== 'idle') return;
    const placedKeys = [...state.placedKeys, key];
    setState((current) => ({ ...current, placedKeys }));

    if (placedKeys.length === tiles.length) {
      schedule(() => check(placedKeys), CHECK_DELAY_MS);
    }
  };

  const handleReturn = (key: string) => {
    if (state.feedback !== 'idle') return;
    setState((current) => ({
      ...current,
      placedKeys: current.placedKeys.filter((placedKey) => placedKey !== key),
    }));
  };

  const restart = () => {
    clear();
    setIndex(0);
    setAttempt((current) => current + 1);
    setScore(0);
    setIsDone(false);
  };

  if (total === 0 || !item) return null;

  if (isDone) {
    return (
      <ExerciseShell title={title}>
        <CompletionPanel text={`Составлено слов: ${score} из ${total}.`}>
          <Button variant="primary" colorScheme="blueWhite" onClick={restart}>
            Играть ещё раз
          </Button>
        </CompletionPanel>
      </ExerciseShell>
    );
  }

  return (
    <WordBuilderUI
      item={item}
      title={title}
      instruction={instruction}
      score={score}
      total={total}
      feedback={state.feedback}
      pool={pool}
      placed={placed}
      onTake={handleTake}
      onReturn={handleReturn}
    />
  );
}

export default WordBuilder;
