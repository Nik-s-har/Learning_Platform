import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { verbs } from '../data/verbs';
import {
  SELECTION_STORAGE_KEY,
  SelectionContext,
  type SelectionContextValue,
} from './selectionContext';

function readStoredSelection(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.sessionStorage.getItem(SELECTION_STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((item) => typeof item === 'string')
      : [];
  } catch {
    return [];
  }
}

/**
 * Хранит выбор глаголов между экранами тренажёра.
 * Выбор переживает переход к упражнению и обновление страницы,
 * но не хранится дольше сессии.
 */
export function IrregularVerbsSelectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selected, setSelected] = useState<string[]>(readStoredSelection);
  const [filter, setFilter] = useState<SelectionContextValue['filter']>(null);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(
        SELECTION_STORAGE_KEY,
        JSON.stringify(selected),
      );
    } catch {
      // приватный режим браузера — просто не сохраняем
    }
  }, [selected]);

  const visibleVerbs = useMemo(() => {
    if (filter === null) return [];
    if (filter === 'all') {
      return [...verbs].sort((a, b) =>
        a.infinitive.localeCompare(b.infinitive),
      );
    }
    return verbs.filter((verb) => verb.grade === filter);
  }, [filter]);

  const selectedVerbs = useMemo(
    () => verbs.filter((verb) => selected.includes(verb.infinitive)),
    [selected],
  );

  const toggle = useCallback((infinitive: string) => {
    setSelected((current) =>
      current.includes(infinitive)
        ? current.filter((item) => item !== infinitive)
        : [...current, infinitive],
    );
  }, []);

  const selectMany = useCallback((infinitives: string[]) => {
    setSelected((current) => [...new Set([...current, ...infinitives])]);
  }, []);

  const clearMany = useCallback((infinitives: string[]) => {
    setSelected((current) =>
      current.filter((item) => !infinitives.includes(item)),
    );
  }, []);

  const value = useMemo<SelectionContextValue>(
    () => ({
      selected,
      selectedVerbs,
      filter,
      setFilter,
      visibleVerbs,
      isSelected: (infinitive) => selected.includes(infinitive),
      toggle,
      selectMany,
      clearMany,
    }),
    [
      selected,
      selectedVerbs,
      filter,
      visibleVerbs,
      toggle,
      selectMany,
      clearMany,
    ],
  );

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

export default IrregularVerbsSelectionProvider;
