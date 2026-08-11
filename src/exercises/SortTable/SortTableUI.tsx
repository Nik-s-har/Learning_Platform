import type { CSSProperties } from 'react';
import { ExerciseShell, FeedbackLine } from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import styles from './SortTable.module.css';
import SortTokenChip from './SortTokenChip';
import SortDropCell from './SortDropCell';
import { cellKey } from './SortTableTypes';
import type { SortColumn, SortRow, SortToken } from './SortTableTypes';

export interface SortTableUIProps {
  columns: SortColumn[];
  rows: SortRow[];
  pool: SortToken[];
  /** Ключ ячейки → значение, которое в ней стоит. */
  placements: Record<string, string>;
  rejectedCellId: string | null;
  selectedTokenId: string | null;
  title?: string;
  instruction?: string;
  score: number;
  total: number;
  feedback: FeedbackState;
  onSelectToken: (tokenId: string) => void;
  onCellClick: (cellId: string) => void;
}

function SortTableUI(props: SortTableUIProps) {
  const {
    columns,
    rows,
    pool,
    placements,
    rejectedCellId,
    selectedTokenId,
    title,
    instruction,
    score,
    total,
    feedback,
    onSelectToken,
    onCellClick,
  } = props;

  return (
    <ExerciseShell
      title={title}
      instruction={instruction}
      status={`Распределено: ${score} из ${total}`}
      feedback={<FeedbackLine state={feedback} />}
    >
      <div className={styles.pool}>
        {pool.map((token) => (
          <SortTokenChip
            key={token.id}
            token={token}
            isSelected={selectedTokenId === token.id}
            onSelect={onSelectToken}
          />
        ))}
      </div>

      <div
        className={styles.table}
        style={{ '--sort-columns': columns.length } as CSSProperties}
      >
        {columns.map((column) => (
          <div key={column.id} className={styles.head}>
            {column.label}
          </div>
        ))}

        {rows.map((row) =>
          columns.map((column) => {
            const id = cellKey(row.id, column.id);
            const cell = row.cells.find(
              (candidate) => candidate.columnId === column.id,
            );
            return (
              <SortDropCell
                key={id}
                id={id}
                label={column.label}
                value={cell?.fixed ? cell.value : placements[id]}
                isFixed={cell?.fixed}
                isRejected={rejectedCellId === id}
                onClick={onCellClick}
              />
            );
          }),
        )}
      </div>

      <p className={styles.hint}>
        Перетащите карточку в нужную ячейку или выберите её и нажмите на ячейку.
      </p>
    </ExerciseShell>
  );
}

export default SortTableUI;
