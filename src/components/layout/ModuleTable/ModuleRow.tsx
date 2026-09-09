import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import type { ModuleData, TopicData } from '@textbooks/types/textbook';
import {
  TOPIC_CATEGORIES,
  TOPIC_CATEGORY_LABELS,
} from '@textbooks/types/textbook';
import styles from './ModuleTable.module.css';

interface ModuleRowProps {
  module: ModuleData;
  /** Раскрыт ли модуль на мобильном при первом рендере. */
  defaultOpen?: boolean;
  /** Мобильная раскладка: заголовок становится кнопкой-аккордеоном. */
  isMobile: boolean;
  /** Вернуть undefined — тема ещё не наполнена, рендерится текстом. */
  topicHref?: (moduleId: number, topic: TopicData) => string | undefined;
}

/**
 * Строка таблицы на десктопе / карточка-аккордеон на мобильном.
 * Содержимое всегда смонтировано: на десктопе оно видно независимо от open.
 */
export function ModuleRow({
  module,
  defaultOpen = false,
  isMobile,
  topicHref,
}: ModuleRowProps) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();
  const titleId = useId();

  const title = (
    <>
      <span className={styles.badge}>{module.badge ?? module.id}</span>
      <span className={styles.moduleTitle}>{module.title}</span>
    </>
  );

  return (
    <section
      className={clsx(styles.row, styles[module.accent])}
      aria-labelledby={titleId}
    >
      <h3 className={styles.moduleCell} id={titleId}>
        {isMobile ? (
          <button
            type="button"
            className={styles.moduleToggle}
            aria-expanded={open}
            aria-controls={bodyId}
            onClick={() => setOpen((value) => !value)}
          >
            {title}
            <ChevronDown
              className={clsx(styles.chevron, open && styles.chevronOpen)}
              aria-hidden="true"
            />
          </button>
        ) : (
          title
        )}
      </h3>

      <div className={styles.body} id={bodyId} hidden={isMobile && !open}>
        {TOPIC_CATEGORIES.map((category) => (
          <section className={styles.cell} key={category}>
            <h4 className={styles.cellLabel}>
              {TOPIC_CATEGORY_LABELS[category]}
            </h4>
            <ul className={styles.topics}>
              {module.topics[category].map((topic) => {
                const href = topicHref?.(module.id, topic);
                return (
                  <li className={styles.topic} key={topic.slug}>
                    {href ? (
                      <Link to={href} className={styles.topicLink}>
                        {topic.title}
                      </Link>
                    ) : (
                      topic.title
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

export default ModuleRow;
