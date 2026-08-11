import clsx from 'clsx';
import Button from '@ui/button';
import styles from './VerbSelector.module.css';
import { verbGrades } from '../../data/verbs';
import type { Verb, VerbFilter } from '../../types';

export interface VerbSelectorProps {
  filter: VerbFilter | null;
  onFilterChange: (filter: VerbFilter) => void;
  visibleVerbs: Verb[];
  selected: string[];
  onToggle: (infinitive: string) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

const filterLabel = (filter: VerbFilter) =>
  filter === 'all' ? 'Все глаголы' : `${filter} класс`;

/** Меню классов и сетка глаголов с отметками выбора. */
function VerbSelector(props: VerbSelectorProps) {
  const {
    filter,
    onFilterChange,
    visibleVerbs,
    selected,
    onToggle,
    onSelectAll,
    onClearAll,
  } = props;

  const filters: VerbFilter[] = [...verbGrades, 'all'];

  return (
    <div className={styles.layout}>
      <nav aria-label="Выбор класса">
        <ul className={styles.gradeMenu}>
          {filters.map((item) => (
            <li key={item}>
              <button
                type="button"
                className={clsx(
                  styles.gradeBtn,
                  filter === item && styles.gradeActive,
                )}
                onClick={() => onFilterChange(item)}
                aria-pressed={filter === item}
              >
                {filterLabel(item)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className={styles.panel}>
        {filter === null ? (
          <p className={styles.empty}>
            Нажмите на класс,
            <br />
            чтобы открыть список глаголов
          </p>
        ) : (
          <>
            <div className={styles.panelHead}>
              <h2 className={styles.panelTitle}>{filterLabel(filter)}</h2>
              <div className={styles.panelActions}>
                <Button
                  variant="secondary"
                  colorScheme="whiteBlack"
                  onClick={onSelectAll}
                >
                  Выбрать все
                </Button>
                <Button
                  variant="secondary"
                  colorScheme="whiteBlack"
                  onClick={onClearAll}
                >
                  Снять выбор
                </Button>
                <span className={styles.countBadge}>
                  Выбрано: {selected.length}
                </span>
              </div>
            </div>

            <div
              className={clsx(
                styles.grid,
                (filter === 'all' || filter === 5) && styles.gridDense,
              )}
            >
              {visibleVerbs.map((verb) => (
                <button
                  key={verb.infinitive}
                  type="button"
                  className={clsx(
                    styles.chip,
                    selected.includes(verb.infinitive) && styles.chipSelected,
                  )}
                  onClick={() => onToggle(verb.infinitive)}
                  aria-pressed={selected.includes(verb.infinitive)}
                >
                  <b className={styles.chipTitle}>{verb.infinitive}</b>
                  <span className={styles.chipForms}>
                    {verb.past} — {verb.participle}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default VerbSelector;
