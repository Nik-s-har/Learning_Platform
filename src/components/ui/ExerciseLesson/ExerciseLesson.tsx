import Button from '@ui/button';
import styles from './ExerciseLesson.module.css';

export interface ExerciseLessonProps {
  exerciseSrc?: string;
  aboutLesson?: string;
  onComplete?: () => void;
  submitLabel?: string;
}

function ExerciseLesson(props: ExerciseLessonProps) {
  const { exerciseSrc, aboutLesson, onComplete, submitLabel } = props;
  return (
    <div className={styles.container}>
      <h3 className={styles.title}></h3>

      <iframe className={styles.iframe} src={exerciseSrc} />

      <p className={styles.description}>{aboutLesson}</p>

      <Button variant="primary" colorScheme="blueWhite" onClick={onComplete}>
        {submitLabel ?? 'Я выполнил! Идем дальше →'}
      </Button>
    </div>
  );
}

export default ExerciseLesson;
