import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Flashcards from '@exercises/Flashcards';
import MatchPairs from '@exercises/MatchPairs';
import QuizChoice from '@exercises/QuizChoice';
import WordBuilder from '@exercises/WordBuilder';
import SortTable from '@exercises/SortTable';
import MemoryGame from '@exercises/MemoryGame';
import SpotIt from '@exercises/SpotIt';
import styles from '../TrainerPage.module.css';
import { useIrregularVerbsSelection } from '../../state';
import {
  IRREGULAR_VERBS_PATH,
  getIrregularExercise,
  isIrregularExerciseId,
} from '../../data';
import {
  sortColumns,
  toFlashcards,
  toMatchPairs,
  toMemoryGame,
  toQuizChoice,
  toRecallCards,
  toSortRows,
  toSpotIt,
  toWordBuilder,
} from '../../adapters';

const ROUND_SIZE = 6;

/**
 * Экран 3: сам тренажёр.
 * Здесь и только здесь глаголы превращаются в данные для универсальных
 * движков — сами движки о неправильных глаголах ничего не знают.
 */
function IrregularVerbsExercise() {
  const navigate = useNavigate();
  const { exerciseId } = useParams<{ exerciseId: string }>();
  const { selectedVerbs, selected } = useIrregularVerbsSelection();

  const exercise = isIrregularExerciseId(exerciseId)
    ? getIrregularExercise(exerciseId)
    : undefined;

  useEffect(() => {
    if (selected.length === 0)
      navigate(IRREGULAR_VERBS_PATH, { replace: true });
  }, [selected.length, navigate]);

  // Готовим данные один раз на набор глаголов, иначе всё будет
  // перемешиваться заново на каждом рендере.
  const data = useMemo(() => {
    if (!exercise) return null;
    switch (exercise.id) {
      case 'cards':
        return { kind: 'cards' as const, cards: toFlashcards(selectedVerbs) };
      case 'recall':
        return { kind: 'recall' as const, cards: toRecallCards(selectedVerbs) };
      case 'pair':
        return { kind: 'pair' as const, pairs: toMatchPairs(selectedVerbs) };
      case 'choice':
        return {
          kind: 'choice' as const,
          questions: toQuizChoice(selectedVerbs),
        };
      case 'word':
        return { kind: 'word' as const, items: toWordBuilder(selectedVerbs) };
      case 'sort':
        return { kind: 'sort' as const, rows: toSortRows(selectedVerbs) };
      case 'memory':
        return { kind: 'memory' as const, pairs: toMemoryGame(selectedVerbs) };
      case 'spot':
        return { kind: 'spot' as const, items: toSpotIt(selectedVerbs) };
      default:
        return null;
    }
  }, [exercise, selectedVerbs]);

  const header = (
    <div className={styles.topNav}>
      <button
        type="button"
        className={styles.backBtn}
        onClick={() => navigate(`${IRREGULAR_VERBS_PATH}/exercises`)}
      >
        ← Выбрать упражнение
      </button>
      <span className={styles.score}>Глаголов: {selected.length}</span>
    </div>
  );

  if (!exercise || !data) {
    return (
      <main className={styles.page}>
        <div className={styles.inner}>
          {header}
          <p className={styles.notice}>Такого упражнения нет.</p>
        </div>
      </main>
    );
  }

  const shared = {
    title: exercise.title,
    instruction: exercise.instruction,
  };

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        {header}

        {data.kind === 'cards' && <Flashcards {...shared} cards={data.cards} />}

        {data.kind === 'recall' && (
          <Flashcards {...shared} cards={data.cards} />
        )}

        {data.kind === 'pair' && (
          <MatchPairs {...shared} pairs={data.pairs} batchSize={ROUND_SIZE} />
        )}

        {data.kind === 'choice' && (
          <QuizChoice {...shared} questions={data.questions} />
        )}

        {data.kind === 'word' && <WordBuilder {...shared} items={data.items} />}

        {data.kind === 'sort' && (
          <SortTable
            {...shared}
            columns={sortColumns}
            rows={data.rows}
            batchSize={ROUND_SIZE}
          />
        )}

        {data.kind === 'memory' && (
          <MemoryGame {...shared} pairs={data.pairs} batchSize={ROUND_SIZE} />
        )}

        {data.kind === 'spot' && <SpotIt {...shared} items={data.items} />}
      </div>
    </main>
  );
}

export default IrregularVerbsExercise;
