import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './ExerciseShell.module.css';

export interface ExerciseShellProps {
  title?: string;
  instruction?: string;
  /** Счёт, таймер или другой индикатор в правом верхнем углу. */
  status?: ReactNode;
  /** Игровое поле. */
  children: ReactNode;
  /** Строка обратной связи под полем. */
  feedback?: ReactNode;
  /** Кнопки под полем. */
  controls?: ReactNode;
  className?: string;
}

/** Общая рамка для всех упражнений: заголовок, счёт, поле, обратная связь. */
function ExerciseShell({
  title,
  instruction,
  status,
  children,
  feedback,
  controls,
  className,
}: ExerciseShellProps) {
  return (
    <section className={clsx(styles.shell, className)}>
      {(title || status) && (
        <div className={styles.header}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {status && <span className={styles.status}>{status}</span>}
        </div>
      )}
      {instruction && <p className={styles.instruction}>{instruction}</p>}
      <div className={styles.body}>{children}</div>
      {feedback}
      {controls && <div className={styles.controls}>{controls}</div>}
    </section>
  );
}

export default ExerciseShell;
