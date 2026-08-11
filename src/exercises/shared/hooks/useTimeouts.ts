import { useCallback, useEffect, useRef } from 'react';

export interface UseTimeoutsResult {
  /** Отложить действие. Таймер будет снят автоматически при размонтировании. */
  schedule: (callback: () => void, delayMs: number) => void;
  /** Отменить все запланированные действия. */
  clear: () => void;
}

/**
 * Отложенные действия упражнения: подсветка ответа, пауза перед
 * следующим заданием. Все таймеры снимаются при уходе с экрана,
 * чтобы состояние не менялось у размонтированного компонента.
 */
export function useTimeouts(): UseTimeoutsResult {
  const ids = useRef<number[]>([]);

  const clear = useCallback(() => {
    ids.current.forEach(window.clearTimeout);
    ids.current = [];
  }, []);

  const schedule = useCallback((callback: () => void, delayMs: number) => {
    ids.current.push(window.setTimeout(callback, delayMs));
  }, []);

  useEffect(() => clear, [clear]);

  return { schedule, clear };
}
