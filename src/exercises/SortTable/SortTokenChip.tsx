import { useDraggable } from '@dnd-kit/core';
import clsx from 'clsx';
import styles from './SortTable.module.css';
import type { SortToken } from './SortTableTypes';

export interface SortTokenChipProps {
  token: SortToken;
  isSelected: boolean;
  onSelect: (tokenId: string) => void;
}

/**
 * Карточка из пула. Одновременно draggable (мышь, палец, клавиатура)
 * и обычная кнопка — чтобы можно было «выбрать и ткнуть в ячейку».
 */
function SortTokenChip({ token, isSelected, onSelect }: SortTokenChipProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: token.id,
    data: token,
  });

  return (
    <button
      ref={setNodeRef}
      type="button"
      className={clsx(
        styles.token,
        isSelected && styles.selected,
        isDragging && styles.dragging,
      )}
      onClick={() => onSelect(token.id)}
      {...listeners}
      {...attributes}
    >
      {token.value}
    </button>
  );
}

export default SortTokenChip;
