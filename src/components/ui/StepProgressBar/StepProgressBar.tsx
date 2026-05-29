import clsx from 'clsx';
import styles from './StepProgressBar.module.css';

interface StepProgressBarProps {
  stepState: boolean[];
}

function StepProgressBar({ stepState }: StepProgressBarProps) {
  return (
    <div className={styles.container}>
      {stepState.map((item, index) => (
        <span
          key={index}
          className={clsx(
            styles.step,
            item ? styles.stepDone : styles.stepUndone,
          )}
        />
      ))}
    </div>
  );
}

export default StepProgressBar;
