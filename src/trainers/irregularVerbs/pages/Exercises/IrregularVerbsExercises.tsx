import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../TrainerPage.module.css';
import { useIrregularVerbsSelection } from '../../state';
import { IRREGULAR_VERBS_PATH, irregularExercises } from '../../data';

/** Экран 2: выбор упражнения. */
function IrregularVerbsExercises() {
  const navigate = useNavigate();
  const { selected } = useIrregularVerbsSelection();

  // Без выбранных глаголов упражнения бессмысленны — возвращаем к списку.
  useEffect(() => {
    if (selected.length === 0)
      navigate(IRREGULAR_VERBS_PATH, { replace: true });
  }, [selected.length, navigate]);

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.topNav}>
          <button
            type="button"
            className={styles.backBtn}
            onClick={() => navigate(IRREGULAR_VERBS_PATH)}
          >
            ← Выбрать другие глаголы
          </button>
          <span className={styles.score}>Выбрано: {selected.length}</span>
        </div>

        <h1 className={styles.title}>Выбрать упражнение</h1>

        <div className={styles.exerciseGrid}>
          {irregularExercises.map((exercise, index) => {
            const isLocked =
              exercise.minVerbs !== undefined &&
              selected.length < exercise.minVerbs;

            return (
              <button
                key={exercise.id}
                type="button"
                className={styles.exerciseCard}
                disabled={isLocked}
                onClick={() =>
                  navigate(`${IRREGULAR_VERBS_PATH}/${exercise.id}`)
                }
              >
                <span className={styles.num}>{index + 1}</span>
                <h2 className={styles.exerciseTitle}>{exercise.title}</h2>
                <p className={styles.exerciseText}>
                  {isLocked
                    ? `Нужно выбрать не менее ${exercise.minVerbs} глаголов.`
                    : exercise.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default IrregularVerbsExercises;
