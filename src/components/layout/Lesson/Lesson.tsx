import { type ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { LessonStepData } from '@app-types/lesson';
import type { ExerciseResult } from '@exercises/shared';
import StepNav from '@ui/StepNav';
import VideoLesson from '@ui/VideoLesson';
import WordwallLesson from '@ui/WordwallLesson';
import ExerciseLesson from '@ui/ExerciseLesson';
import styles from './Lesson.module.css';

export interface LessonProps {
  /** Печатается в шапке как «Урок {lessonId}», если не задан title. */
  lessonId?: number;
  /** Заголовок шапки — для тем учебника, у которых нет номера урока. */
  title?: string;
  step: LessonStepData;
  /** Названия всех шагов урока — для навигации. */
  stepTitles: string[];
  activeStep: number;
  onComplete: () => void;
  /** Встроенное упражнение сообщило, что оно пройдено. */
  onPassed?: (result: ExerciseResult) => void;
  onSelectStep?: (stepIndex: number) => void;
  onBack?: () => void;
  courseMapHref?: string;
  nextLessonHref?: string;
  isLastStep?: boolean;
  submitLabel?: string;
}

function Lesson(props: LessonProps) {
  const navigate = useNavigate();
  const {
    lessonId,
    title,
    step,
    stepTitles,
    activeStep,
    onComplete,
    onPassed,
    onSelectStep,
    onBack,
    courseMapHref,
    nextLessonHref,
    isLastStep,
    submitLabel,
  } = props;

  const lessonActions = isLastStep ? (
    <div className={styles.lessonActions}>
      {courseMapHref ? (
        <Link to={courseMapHref} className={styles.actionButton}>
          К карте уроков
        </Link>
      ) : (
        <button
          type="button"
          className={styles.actionButton}
          onClick={onBack ?? (() => navigate(-1))}
        >
          К карте уроков
        </button>
      )}
      {nextLessonHref && (
        <Link to={nextLessonHref} className={styles.actionButton}>
          Следующий урок →
        </Link>
      )}
    </div>
  ) : undefined;

  // switch, а не Record: объект строил бы все варианты сразу, а у шага
  // с упражнением нет src, как и у видео нет данных движка.
  const renderStep = (): ReactElement => {
    switch (step.type) {
      case 'video':
        return (
          <VideoLesson
            videoSrc={step.src}
            aboutLesson={step.aboutLesson}
            onComplete={onComplete}
            submitLabel={submitLabel}
            actions={lessonActions}
          />
        );
      case 'wordwall':
        return (
          <WordwallLesson
            wordwallSrc={step.src}
            aboutLesson={step.aboutLesson}
            onComplete={onComplete}
            submitLabel={submitLabel}
            actions={lessonActions}
          />
        );
      case 'exercise':
        return (
          <ExerciseLesson
            step={step}
            onPassed={onPassed}
            onComplete={onComplete}
            submitLabel={submitLabel}
            actions={lessonActions}
          />
        );
    }
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <StepNav
          steps={stepTitles}
          activeStep={activeStep}
          onSelectStep={onSelectStep}
        />
        <h3>{title ?? `Урок ${lessonId}`}</h3>
      </header>
      {renderStep()}
    </main>
  );
}

export default Lesson;
