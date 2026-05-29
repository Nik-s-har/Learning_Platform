import clsx from 'clsx';
import type { LessonData, LessonStatus } from '@app-types/index';
import StepBadge from '@ui/StepBadge';
import LessonCard from '@ui/LessonCard';
import styles from './CourseStep.module.css';

interface CourseStepProps {
  lesson: LessonData;
  status: LessonStatus;
  onStart: () => void;
}

function CourseStep({ lesson, status, onStart }: CourseStepProps) {
  return (
    <div
      className={clsx(styles.container, lesson.id % 2 === 0 && styles.reversed)}
    >
      <LessonCard
        title={lesson.title}
        image={lesson.image}
        content={lesson.content}
        variant={status}
        onStart={onStart}
      />
      <StepBadge step={lesson.id} status={status} />
      <div className={styles.emptyBlock} />
    </div>
  );
}

export default CourseStep;
