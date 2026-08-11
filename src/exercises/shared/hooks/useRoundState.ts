import { useCallback, useState } from 'react';

/**
 * Состояние, живущее ровно один раунд.
 *
 * Вместо сброса через useEffect состояние помнит, какому раунду оно
 * принадлежит: как только ключ раунда меняется, наружу отдаётся начальное
 * значение. Нет ни лишнего рендера, ни каскада эффектов.
 *
 * `initial` должен быть стабильным — храните его в константе модуля.
 */
export function useRoundState<T>(roundKey: string | number, initial: T) {
  const [stored, setStored] = useState({ key: roundKey, value: initial });

  const value = stored.key === roundKey ? stored.value : initial;

  const setValue = useCallback(
    (update: T | ((previous: T) => T)) => {
      setStored((current) => {
        const previous = current.key === roundKey ? current.value : initial;
        const next =
          typeof update === 'function'
            ? (update as (previous: T) => T)(previous)
            : update;
        return { key: roundKey, value: next };
      });
    },
    [roundKey, initial],
  );

  return [value, setValue] as const;
}
