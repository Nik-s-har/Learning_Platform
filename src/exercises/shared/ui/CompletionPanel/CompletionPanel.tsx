import type { ReactNode } from 'react';
import styles from './CompletionPanel.module.css';

export interface CompletionPanelProps {
  title?: string;
  /** Итог: счёт, время, число найденных пар. */
  text?: ReactNode;
  emoji?: string;
  /** Кнопки «Играть ещё раз», «Далее», «Другое упражнение». */
  children?: ReactNode;
}

/** Экран завершения раунда или всего упражнения. */
function CompletionPanel({
  title = 'Good job!',
  text,
  emoji = '⭐',
  children,
}: CompletionPanelProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.star} aria-hidden="true">
        {emoji}
      </div>
      <h2 className={styles.title}>{title}</h2>
      {text && <p className={styles.text}>{text}</p>}
      {children && <div className={styles.actions}>{children}</div>}
    </div>
  );
}

export default CompletionPanel;
