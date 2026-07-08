import { type ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StepProgressBar from '@ui/StepProgressBar';
import VideoLesson from '@ui/VideoLesson';
import ExerciseLesson from '@ui/ExerciseLesson';
import styles from './Lesson.module.css';

export interface LessonProps {
  lessonId: number;
  stepState: boolean[];
  activeStep?: number;
  type: 'video' | 'exercise';
  src: string;
  aboutLesson: string;
  onComplete: () => void;
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
    stepState,
    activeStep,
    type,
    src,
    aboutLesson,
    onComplete,
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

  const lessonContent: Record<LessonProps['type'], ReactElement> = {
    video: (
      <VideoLesson
        videoSrc={src}
        aboutLesson={aboutLesson}
        onComplete={onComplete}
        submitLabel={submitLabel}
        actions={lessonActions}
      />
    ),
    exercise: (
      <ExerciseLesson
        exerciseSrc={src}
        aboutLesson={aboutLesson}
        onComplete={onComplete}
        submitLabel={submitLabel}
        actions={lessonActions}
      />
    ),
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <StepProgressBar
          stepState={stepState}
          activeStep={activeStep}
          onSelectStep={onSelectStep}
        />
        <h3>Урок {lessonId}</h3>
      </header>
      {lessonContent[type]}
    </main>
  );
}

export default Lesson;
