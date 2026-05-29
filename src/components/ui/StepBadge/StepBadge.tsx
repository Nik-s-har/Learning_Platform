import clsx from 'clsx';
import type { LessonStatus } from '@app-types/index';
import styles from './StepBadge.module.css';

interface StepBadgeProps {
  step: number;
  status: LessonStatus;
  className?: string;
}

function StepBadge({ step, status, className }: StepBadgeProps) {
  return (
    <div
      className={clsx(
        styles.badge,
        status === 'lock' && styles.bgSlate,
        status === 'lock' && styles.slateNumber,
        status === 'unlock' && styles.bgSky,
        status === 'unlock' && styles.whiteNumber,
        status === 'unlock' && styles.pulse,
        status === 'done' && styles.bgGreen,
        status === 'done' && styles.whiteNumber,
        className,
      )}
    >
      {step}
    </div>
  );
}

export default StepBadge;
