import { useSyncExternalStore } from 'react';

/** Совпадает с брейкпоинтом в ModuleTable.module.css. */
const MOBILE_QUERY = '(max-width: 767px)';

const query = window.matchMedia(MOBILE_QUERY);

const subscribe = (onChange: () => void): (() => void) => {
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

/**
 * На десктопе строка модуля раскрыта всегда, на мобильном — аккордеон.
 * Различать нужно в разметке, а не только в CSS: на десктопе кнопка с
 * aria-expanded="false" сообщала бы скринридеру, что содержимое скрыто,
 * хотя оно видно.
 */
export const useIsMobile = (): boolean =>
  useSyncExternalStore(
    subscribe,
    () => query.matches,
    () => false,
  );
