import clsx from 'clsx';
import styles from './StepProgressBar.module.css';

interface StepProgressBarProps {
  stepState: boolean[];
  activeStep?: number;
  onSelectStep?: (stepIndex: number) => void;
}

function StepProgressBar({ stepState, activeStep, onSelectStep }: StepProgressBarProps) {
  return (
    <div className={styles.container}>
      {stepState.map((item, index) => (
        <button
          key={index}
          type="button"
          className={clsx(
            styles.step,
            item ? styles.stepDone : styles.stepUndone,
            activeStep === index && styles.stepActive,
            onSelectStep && styles.clickable,
          )}
          onClick={() => onSelectStep?.(index)}
          aria-label={`Перейти к шагу ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default StepProgressBar;
