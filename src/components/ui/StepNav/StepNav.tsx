import clsx from 'clsx';
import styles from './StepNav.module.css';

export interface StepNavProps {
  /** Названия шагов текущего урока — «Видео 1», «Карточки», «Мемори». */
  steps: string[];
  activeStep: number;
  onSelectStep?: (stepIndex: number) => void;
}

/**
 * Навигация по шагам текущего урока.
 * Пройденные шаги не отмечаются: истории прохождения нет, пока нет личного
 * кабинета, а раскрашивать шаги по состоянию одной сессии — обещать больше,
 * чем есть. Выделен только открытый сейчас шаг.
 */
function StepNav({ steps, activeStep, onSelectStep }: StepNavProps) {
  return (
    <nav className={styles.container} aria-label="Шаги урока">
      {steps.map((title, index) => {
        const isActive = index === activeStep;
        return (
          <button
            key={index}
            type="button"
            className={clsx(styles.step, isActive && styles.stepActive)}
            aria-current={isActive ? 'step' : undefined}
            // Номер на кружке ничего не говорит сам по себе — название шага
            // остаётся в подсказке и для скринридера.
            aria-label={`Шаг ${index + 1}: ${title}`}
            title={title}
            onClick={() => onSelectStep?.(index)}
            disabled={!onSelectStep}
          >
            {index + 1}
          </button>
        );
      })}
    </nav>
  );
}

export default StepNav;
