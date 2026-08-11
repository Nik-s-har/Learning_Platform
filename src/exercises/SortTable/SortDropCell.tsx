import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import styles from './SortTable.module.css';

export interface SortDropCellProps {
  id: string;
  label: string;
  /** Значение, которое уже стоит в ячейке. */
  value?: string;
  /** Ячейка-подсказка, заполненная изначально. */
  isFixed?: boolean;
  /** Подсветка после неверной попытки. */
  isRejected?: boolean;
  onClick: (cellId: string) => void;
}

/** Ячейка таблицы: цель для перетаскивания и для клика. */
function SortDropCell({
  id,
  label,
  value,
  isFixed,
  isRejected,
  onClick,
}: SortDropCellProps) {
  const isFilled = value !== undefined;
  const { setNodeRef, isOver } = useDroppable({ id, disabled: isFilled });

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        styles.cell,
        isOver && !isFilled && styles.over,
        isRejected && styles.rejected,
      )}
      onClick={() => !isFilled && onClick(id)}
      role={isFilled ? undefined : 'button'}
      aria-label={isFilled ? undefined : `Поставить сюда: ${label}`}
    >
      {isFilled && (
        <span className={clsx(styles.cellValue, isFixed && styles.fixed)}>
          {value}
        </span>
      )}
    </div>
  );
}

export default SortDropCell;
