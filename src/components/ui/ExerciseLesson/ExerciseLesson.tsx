import { createElement, type ReactNode } from 'react';
import type { LessonStepData } from '@app-types/lesson';
import type { ExerciseResult } from '@exercises/shared';
import { getExerciseEngine } from '@exercises/registry';
import Button from '@ui/button';
import styles from './ExerciseLesson.module.css';

/** Шаг урока со встроенным упражнением — сужение LessonStepData. */
export type ExerciseStep = Extract<LessonStepData, { type: 'exercise' }>;

export interface ExerciseLessonProps {
  step: ExerciseStep;
  /** Движок сообщил, что упражнение пройдено. */
  onPassed?: (result: ExerciseResult) => void;
  /** Нажата кнопка «Я выполнил!» — перейти к следующему шагу. */
  onComplete?: () => void;
  submitLabel?: string;
  actions?: ReactNode;
}

/**
 * Одна обёртка на все движки из реестра.
 * Заголовок и инструкцию рисует ExerciseShell внутри самого движка,
 * поэтому здесь они прокидываются внутрь, а не печатаются ещё раз.
 */
function ExerciseLesson(props: ExerciseLessonProps) {
  const { step, onPassed, onComplete, submitLabel, actions } = props;
  // type и engine — дискриминаторы шага, самому движку они не нужны.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { type, engine, title, aboutLesson, ...payload } = step;

  return (
    <div className={styles.container}>
      {/* createElement, а не <Engine />: движок выбирается по строке,
          и JSX с переменной-компонентом читается линтером как компонент,
          создаваемый при рендере. Ссылка при этом стабильна — она из реестра. */}
      {createElement(getExerciseEngine(engine), {
        ...payload,
        title,
        instruction: aboutLesson,
        onFinish: onPassed,
      })}

      {actions ?? (
        <Button variant="primary" colorScheme="blueWhite" onClick={onComplete}>
          {submitLabel ?? 'Я выполнил! Идем дальше →'}
        </Button>
      )}
    </div>
  );
}

export default ExerciseLesson;
