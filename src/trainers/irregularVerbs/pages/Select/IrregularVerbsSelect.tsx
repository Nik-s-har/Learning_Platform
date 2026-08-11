import { useNavigate } from 'react-router-dom';
import Button from '@ui/button';
import styles from '../TrainerPage.module.css';
import VerbSelector from '../../components/VerbSelector';
import { useIrregularVerbsSelection } from '../../state';
import { IRREGULAR_VERBS_PATH, irregularVerbsTrainer } from '../../data';

/** Экран 1: выбор глаголов по классам. */
function IrregularVerbsSelect() {
  const navigate = useNavigate();
  const {
    filter,
    setFilter,
    visibleVerbs,
    selected,
    toggle,
    selectMany,
    clearMany,
  } = useIrregularVerbsSelection();

  const visibleInfinitives = visibleVerbs.map((verb) => verb.infinitive);

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Выбрать глаголы</h1>
        <p className={styles.subtitle}>{irregularVerbsTrainer.description}</p>

        <VerbSelector
          filter={filter}
          onFilterChange={setFilter}
          visibleVerbs={visibleVerbs}
          selected={selected}
          onToggle={toggle}
          onSelectAll={() => selectMany(visibleInfinitives)}
          onClearAll={() => clearMany(visibleInfinitives)}
        />

        <div className={styles.bottomBar}>
          <Button
            variant="primary"
            colorScheme="blueWhite"
            disabled={selected.length === 0}
            onClick={() => navigate(`${IRREGULAR_VERBS_PATH}/exercises`)}
          >
            Далее
          </Button>
        </div>
      </div>
    </main>
  );
}

export default IrregularVerbsSelect;
