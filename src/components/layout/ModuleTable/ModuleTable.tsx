import clsx from 'clsx';
import type { ModuleData, TopicData } from '@textbooks/types/textbook';
import {
  TOPIC_CATEGORIES,
  TOPIC_CATEGORY_LABELS,
} from '@textbooks/types/textbook';
import ModuleRow from './ModuleRow';
import { useIsMobile } from './useIsMobile';
import styles from './ModuleTable.module.css';

interface ModuleTableProps {
  modules: ModuleData[];
  /**
   * Ссылка на тему. Вернуть undefined — тема рендерится обычным текстом.
   * Компонент ничего не знает о роутинге: адрес строит вызывающая страница.
   */
  topicHref?: (moduleId: number, topic: TopicData) => string | undefined;
  className?: string;
}

/**
 * Модули класса: строка на модуль, колонка на категорию тем.
 * Колонки задаются один раз на .table, строки наследуют их через subgrid —
 * так строка остаётся элементом с собственной заливкой под цвет модуля.
 */
export function ModuleTable({
  modules,
  topicHref,
  className,
}: ModuleTableProps) {
  const isMobile = useIsMobile();

  return (
    <div className={clsx(styles.table, className)}>
      {/* Подписи колонок дублируются внутри каждой ячейки (.cellLabel),
          поэтому шапка скрыта от скринридера. */}
      <div className={styles.headRow} aria-hidden="true">
        <div className={styles.headCell} />
        {TOPIC_CATEGORIES.map((category) => (
          <div className={styles.headCell} key={category}>
            {TOPIC_CATEGORY_LABELS[category]}
          </div>
        ))}
      </div>

      {modules.map((module, index) => (
        <ModuleRow
          key={module.id}
          module={module}
          isMobile={isMobile}
          topicHref={topicHref}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
}

export default ModuleTable;
