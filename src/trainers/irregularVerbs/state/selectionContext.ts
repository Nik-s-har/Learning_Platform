import { createContext, useContext } from 'react';
import type { Verb, VerbFilter } from '../types';

export interface SelectionContextValue {
  /** Инфинитивы выбранных глаголов. */
  selected: string[];
  /** Выбранные глаголы в порядке словаря. */
  selectedVerbs: Verb[];
  /** Активный фильтр списка: класс или «все». */
  filter: VerbFilter | null;
  setFilter: (filter: VerbFilter) => void;
  /** Глаголы, попадающие под текущий фильтр. */
  visibleVerbs: Verb[];
  isSelected: (infinitive: string) => boolean;
  toggle: (infinitive: string) => void;
  selectMany: (infinitives: string[]) => void;
  clearMany: (infinitives: string[]) => void;
}

export const SelectionContext = createContext<SelectionContextValue | null>(
  null,
);

export const SELECTION_STORAGE_KEY = 'irregular-verbs:selection';

/** Доступ к выбору глаголов из любого экрана тренажёра. */
export function useIrregularVerbsSelection(): SelectionContextValue {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error(
      'useIrregularVerbsSelection используется вне IrregularVerbsSelectionProvider',
    );
  }
  return context;
}
