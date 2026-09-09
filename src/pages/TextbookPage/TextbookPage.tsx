import { useState } from 'react';
import ModuleTable from '@layout/ModuleTable';
import type { TextbookSlug } from '@textbooks/index';
import { findGrade, hasContent, textbooks, topicPath } from '@textbooks/index';
import type { TextbookTheme } from '@textbooks/types/textbook';
import type { ButtonProps } from '@ui/button/Button';
import Button from '@ui/button';
import styles from './TextbookPage.module.css';

/** Классы, для которых учебник вообще существует; без данных — кнопка неактивна. */
const GRADES = [2, 3, 4, 5, 6, 7, 8, 9];

/** Цвет активной кнопки класса. Остальные цвета темы — в [data-theme] CSS. */
const SELECTED_SCHEME: Record<TextbookTheme, ButtonProps['colorScheme']> = {
  starlight: 'greenWhite',
  spotlight: 'orangeWhite',
};

export interface TextbookPageProps {
  slug: TextbookSlug;
}

/** Страница одна на все учебники: контент и цвета приходят из реестра textbooks. */
export function TextbookPage({ slug }: TextbookPageProps) {
  const textbook = textbooks[slug];
  const [selectedGrade, setSelectedGrade] = useState(textbook.defaultGrade);
  const grade = findGrade(textbook, selectedGrade);

  return (
    <main className={styles.layout} data-theme={textbook.theme}>
      <header className={styles.header}>
        <p>Курсы по учебнику</p>
        <div className={styles.headerInner}>
          <span className={styles.icon} aria-hidden="true">
            <img src={textbook.icon} alt="" className={styles.iconImg} />
          </span>
          <div>
            <h1>{textbook.title}</h1>
            <p className={styles.subtitle}>{textbook.subtitle}</p>
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
              colorScheme={
                isSelected ? SELECTED_SCHEME[textbook.theme] : 'whiteBlack'
              }
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
