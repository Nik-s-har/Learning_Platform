import { useMemo, useState } from 'react';
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
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
import SortTableUI from './SortTableUI';
import styles from './SortTable.module.css';
import { cellKey } from './SortTableTypes';
import type { SortTableProps, SortToken } from './SortTableTypes';

const REJECT_MS = 350;
const ROUND_END_MS = 450;

interface RoundState {
  /** Ключ ячейки → значение, которое в неё поставили. */
  placements: Record<string, string>;
  usedTokenIds: string[];
  selectedTokenId: string | null;
  rejectedCellId: string | null;
  feedback: FeedbackState;
  isDone: boolean;
}

const EMPTY_ROUND: RoundState = {
  placements: {},
  usedTokenIds: [],
  selectedTokenId: null,
  rejectedCellId: null,
  feedback: 'idle',
  isDone: false,
};

/**
 * «Сортировка»: карточки из пула нужно расставить по колонкам таблицы.
 * Работает и перетаскиванием (@dnd-kit: мышь, палец, клавиатура),
 * и в два клика — «выбрал карточку, ткнул в ячейку».
 */
function SortTable({
  columns,
  rows,
  batchSize = 6,
  title,
  instruction,
  onFinish,
}: SortTableProps) {
  const { batch, batchIndex, hasMore, next, reset } = useRounds(
    rows,
    batchSize,
  );
  const { schedule, clear } = useTimeouts();

  const [score, setScore] = useState(0);
  const [activeTokenId, setActiveTokenId] = useState<string | null>(null);
  const [round, setRound] = useRoundState(batchIndex, EMPTY_ROUND);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor),
  );

  /** Все подвижные карточки текущего раунда. */
  const tokens = useMemo<SortToken[]>(
    () =>
      shuffle(
        batch.flatMap((row) =>
          row.cells
            .filter((cell) => !cell.fixed)
            .map((cell) => ({
              id: cellKey(row.id, cell.columnId),
              rowId: row.id,
              columnId: cell.columnId,
              value: cell.value,
            })),
        ),
      ),
    [batch],
  );

  const total = useMemo(
    () =>
      rows.reduce(
        (sum, row) => sum + row.cells.filter((cell) => !cell.fixed).length,
        0,
      ),
    [rows],
  );

  const pool = tokens.filter((token) => !round.usedTokenIds.includes(token.id));
  const activeToken = tokens.find((token) => token.id === activeTokenId);

  const place = (token: SortToken, targetCellId: string) => {
    if (targetCellId in round.placements) return;

    const targetCell = batch
      .find((row) => row.id === token.rowId)
      ?.cells.find(
        (cell) => cellKey(token.rowId, cell.columnId) === targetCellId,
      );

    if (!targetCell || token.value !== targetCell.value) {
      setRound((current) => ({
        ...current,
        feedback: 'bad',
        rejectedCellId: targetCellId,
      }));
      schedule(
        () => setRound((current) => ({ ...current, rejectedCellId: null })),
        REJECT_MS,
      );
      return;
    }

    const placements = { ...round.placements, [targetCellId]: token.value };
    const nextScore = score + 1;
    setScore(nextScore);
    setRound((current) => ({
      ...current,
      placements,
      usedTokenIds: [...current.usedTokenIds, token.id],
      selectedTokenId: null,
      feedback: 'good',
    }));

    if (Object.keys(placements).length === tokens.length) {
      schedule(() => {
        setRound((current) => ({ ...current, isDone: true }));
        if (!hasMore) onFinish?.({ score: nextScore, total });
      }, ROUND_END_MS);
    }
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveTokenId(String(event.active.id));
    setRound((current) => ({ ...current, selectedTokenId: null }));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTokenId(null);
    const { active, over } = event;
    if (!over) return;
    const token = tokens.find(
      (candidate) => candidate.id === String(active.id),
    );
    if (token) place(token, String(over.id));
  };

  const handleSelectToken = (tokenId: string) => {
    setRound((current) => ({
      ...current,
      selectedTokenId: current.selectedTokenId === tokenId ? null : tokenId,
      feedback: 'idle',
    }));
  };

  const handleCellClick = (targetCellId: string) => {
    if (!round.selectedTokenId) return;
    const token = tokens.find(
      (candidate) => candidate.id === round.selectedTokenId,
    );
    if (token) place(token, targetCellId);
  };

  const restart = () => {
    clear();
    setScore(0);
    setActiveTokenId(null);
    setRound(EMPTY_ROUND);
    reset();
  };

  if (rows.length === 0) return null;

  if (round.isDone) {
    return (
      <ExerciseShell title={title}>
        <CompletionPanel text={`Распределено форм: ${score} из ${total}.`}>
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
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveTokenId(null)}
    >
      <SortTableUI
        columns={columns}
        rows={batch}
        pool={pool}
        placements={round.placements}
        rejectedCellId={round.rejectedCellId}
        selectedTokenId={round.selectedTokenId}
        title={title}
        instruction={instruction}
        score={score}
        total={total}
        feedback={round.feedback}
        onSelectToken={handleSelectToken}
        onCellClick={handleCellClick}
      />
      <DragOverlay>
        {activeToken && (
          <div className={`${styles.token} ${styles.overlayToken}`}>
            {activeToken.value}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}

export default SortTable;
