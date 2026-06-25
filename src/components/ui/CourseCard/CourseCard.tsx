import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './CourseCard.module.css';
import Button from '../button';
import type { ButtonProps } from '../button';

export type CourseStatus = 'available' | 'in-progress' | 'completed';

const statusConfig: Record<
  CourseStatus,
  { label: string; colorScheme: ButtonProps['colorScheme'] }
> = {
  available: { label: 'Начать', colorScheme: 'slateSlate' },
  'in-progress': { label: 'Продолжить', colorScheme: 'blueWhite' },
  completed: { label: 'Повторить', colorScheme: 'greenWhite' },
};

function lessonsLabel(count: number): string {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} урок`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20))
    return `${count} урока`;
  return `${count} уроков`;
}

export interface CourseCardProps {
  icon: ReactNode;
  title: string;
  lessonsCount: number;
  status: CourseStatus;
  onClick?: () => void;
}

function CourseCard({
  icon,
  title,
  lessonsCount,
  status,
  onClick,
}: CourseCardProps) {
  const { label, colorScheme } = statusConfig[status];

  return (
    <article className={clsx(styles.container, styles[status])}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{lessonsLabel(lessonsCount)}</p>
      </div>
      <Button variant="secondary" colorScheme={colorScheme} onClick={onClick}>
        {label}
      </Button>
    </article>
  );
}

export default CourseCard;
