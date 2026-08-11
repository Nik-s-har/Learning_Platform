import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseTimerOptions {
  /** 'up' — секундомер, 'down' — обратный отсчёт. */
  mode?: 'up' | 'down';
  /** Длительность обратного отсчёта, мс. Нужна только для mode: 'down'. */
  durationMs?: number;
  /** Запускать сразу после монтирования. */
  autoStart?: boolean;
  /** Вызывается один раз, когда обратный отсчёт дошёл до нуля. */
  onExpire?: () => void;
  /** Как часто обновлять показания, мс. */
  tickMs?: number;
}

export interface UseTimerResult {
  elapsedMs: number;
  remainingMs: number;
  isRunning: boolean;
  isExpired: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

/**
 * Таймер, который сам за собой убирает: интервал гарантированно
 * останавливается при размонтировании компонента.
 */
export function useTimer(options: UseTimerOptions = {}): UseTimerResult {
  const {
    mode = 'up',
    durationMs = 0,
    autoStart = false,
    onExpire,
    tickMs = 200,
  } = options;

  const [isRunning, setIsRunning] = useState(autoStart);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isExpired, setIsExpired] = useState(false);
  // Меняется на каждый reset. Нужен, чтобы связка reset() + start()
  // в одном обработчике перезапускала отсчёт, а не оставляла его стоять.
  const [runId, setRunId] = useState(0);

  // Момент запуска берём в эффекте, а не при рендере: рендер должен
  // оставаться чистым, а Date.now() чистой функцией не является.
  const startedAtRef = useRef<number | null>(null);
  const baseRef = useRef(0);
  const expiredRef = useRef(false);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onExpireRef.current = onExpire;
  });

  const start = useCallback(() => setIsRunning(true), []);

  const stop = useCallback(() => setIsRunning(false), []);

  const reset = useCallback(() => {
    // Обнуляем до остановки, тогда финальный подсчёт в cleanup ничего не добавит.
    baseRef.current = 0;
    startedAtRef.current = null;
    expiredRef.current = false;
    setIsExpired(false);
    setElapsedMs(0);
    setIsRunning(false);
    setRunId((current) => current + 1);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    startedAtRef.current = Date.now();

    const tick = () => {
      const startedAt = startedAtRef.current;
      const value = baseRef.current + (startedAt ? Date.now() - startedAt : 0);
      setElapsedMs(value);

      if (mode === 'down' && !expiredRef.current && value >= durationMs) {
        expiredRef.current = true;
        setIsExpired(true);
        setIsRunning(false);
        onExpireRef.current?.();
      }
    };

    tick();
    const id = window.setInterval(tick, tickMs);

    return () => {
      window.clearInterval(id);
      if (startedAtRef.current !== null) {
        baseRef.current += Date.now() - startedAtRef.current;
        startedAtRef.current = null;
      }
    };
  }, [isRunning, runId, mode, durationMs, tickMs]);

  return {
    elapsedMs,
    remainingMs: mode === 'down' ? Math.max(0, durationMs - elapsedMs) : 0,
    isRunning,
    isExpired,
    start,
    stop,
    reset,
  };
}
