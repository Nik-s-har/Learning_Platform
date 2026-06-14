import { type ReactElement } from 'react';
import StepProgressBar from '@ui/StepProgressBar';
import VideoLesson from '@ui/VideoLesson';
import ExerciseLesson from '@ui/ExerciseLesson';
import styles from './Lesson.module.css';

export interface LessonProps {
  lessonId: number;
  stepState: boolean[];
  type: 'video' | 'exercise';
  src: string;
  aboutLesson: string;
  onComplete: () => void;
}

function Lesson(props: LessonProps) {
  const { lessonId, stepState, type, src, aboutLesson, onComplete } = props;

  const lessonContent: Record<LessonProps['type'], ReactElement> = {
    video: (
      <VideoLesson
        videoSrc={src}
        aboutLesson={aboutLesson}
        onComplete={onComplete}
      />
    ),
    exercise: (
      <ExerciseLesson
        exerciseSrc={src}
        aboutLesson={aboutLesson}
        onComplete={onComplete}
      />
    ),
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav>Назад к карте</nav>
        <StepProgressBar stepState={stepState} />
        <h3>Урок {lessonId}</h3>
      </header>
      {lessonContent[type]}
    </main>
  );
}

export default Lesson;
