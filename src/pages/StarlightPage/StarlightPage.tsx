import { useState } from 'react';
import star from '@assets/pictures/Star.webp';
import ModuleTable from '@layout/ModuleTable';
import { findGrade, hasContent, textbooks, topicPath } from '@textbooks/index';
import Button from '@ui/button';
import styles from './StarlightPage.module.css';

/** Классы, для которых учебник вообще существует; без данных — кнопка неактивна. */
const GRADES = [2, 3, 4, 5, 6, 7, 8, 9];

export function StarlightPage() {
  const textbook = textbooks.starlight;
  const [selectedGrade, setSelectedGrade] = useState(textbook.defaultGrade);
  const grade = findGrade(textbook, selectedGrade);

  return (
    <main className={styles.layout}>
      <header className={styles.header}>
        <p>Курсы по учебнику</p>
        <div className={styles.headerInner}>
          <span className={styles.icon} aria-hidden="true">
            <img src={star} alt="" className={styles.iconImg} />
          </span>
          <div>
            <h1>Starlight</h1>
            <p className={styles.subtitle}>Звездный английский</p>
          </div>
        </div>
      </header>

      <nav className={styles.buttonContainer} aria-label="Выбор класса">
        {GRADES.map((value) => {
          const isSelected = value === selectedGrade;
          return (
            <Button
              key={value}
              variant="secondary"
              colorScheme={isSelected ? 'greenWhite' : 'whiteBlack'}
              aria-pressed={isSelected}
              disabled={findGrade(textbook, value) === undefined}
              onClick={() => setSelectedGrade(value)}
            >
              {value} класс
            </Button>
          );
        })}
      </nav>

      <div className={styles.content}>
        {grade ? (
          <ModuleTable
            modules={grade.modules}
            topicHref={(moduleId, topic) =>
              hasContent(topic)
                ? topicPath(textbook.slug, grade.grade, moduleId, topic.slug)
                : undefined
            }
          />
        ) : (
          <p className={styles.empty}>
            Для этого класса материалы ещё готовятся.
          </p>
        )}
      </div>
    </main>
  );
}
