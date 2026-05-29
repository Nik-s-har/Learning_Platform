import { type ReactElement } from 'react';
import StepProgressBar from '@ui/StepProgressBar';
import VideoLesson from '@ui/VideoLesson';
import ExerciseLesson from '@ui/ExerciseLesson';
import styles from './Lesson.module.css';

export interface LessonProps {
  lessonId: number;
  title: string;
  stepState: boolean[];
  type: 'video' | 'exercise';
  src: string;
  aboutLesson: string;
  onComplete: () => void;
}

function Lesson(props: LessonProps) {
  const { lessonId, title, stepState, type, src, aboutLesson, onComplete } =
    props;

  const lessonContent: Record<LessonProps['type'], ReactElement> = {
    video: (
      <VideoLesson
        videoSrc={src}
        aboutLesson={aboutLesson}
        onComplete={onComplete}
      />
    ),
    exercise: <ExerciseLesson exerciseSrc={src} onComplete={onComplete} />,
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav>Назад к карте</nav>
        <StepProgressBar stepState={stepState} />
        <div className={styles.lessonTitle}>
          <span>Урок {lessonId}</span>
          <h3>{title}</h3>
        </div>
      </header>
      {lessonContent[type]}
    </main>
  );
}

export default Lesson;
