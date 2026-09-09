import { useState } from 'react';
import type { LessonStepData } from '@app-types/lesson';
import Lesson from './Lesson';

export interface LessonPlayerProps {
  steps: LessonStepData[];
  /** Заголовок шапки; без него печатается «Урок {lessonId}». */
  title?: string;
  lessonId?: number;
  /** Куда ведёт кнопка «К карте уроков» на последнем шаге. */
  courseMapHref?: string;
  nextLessonHref?: string;
}

/**
 * Проигрывание последовательности шагов: какой шаг открыт, какие пройдены.
 * Состояние сбрасывается сменой key на стороне вызывающего компонента.
 */
export function LessonPlayer({
  steps,
  title,
  lessonId,
  courseMapHref,
  nextLessonHref,
}: LessonPlayerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepState, setStepState] = useState<boolean[]>(() =>
    Array(steps.length).fill(false),
  );

  if (steps.length === 0) return null;

  const activeStep = Math.min(currentStep, steps.length - 1);
  const { type, src, aboutLesson } = steps[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const handleComplete = () => {
    setStepState((prev) => {
      const updated = [...prev];
      updated[activeStep] = true;
      return updated;
    });
    if (!isLastStep) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleSelectStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
    }
  };

  return (
    <Lesson
      lessonId={lessonId}
      title={title}
      stepState={stepState}
      activeStep={activeStep}
      type={type}
      src={src}
      aboutLesson={aboutLesson}
      onComplete={handleComplete}
      onSelectStep={handleSelectStep}
      courseMapHref={courseMapHref}
      nextLessonHref={nextLessonHref}
      isLastStep={isLastStep}
      submitLabel={isLastStep ? 'Я выполнил!' : undefined}
    />
  );
}

export default LessonPlayer;
