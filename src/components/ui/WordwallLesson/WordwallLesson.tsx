import type { ReactNode } from 'react';
import Button from '@ui/button';
import styles from './WordwallLesson.module.css';

export interface WordwallLessonProps {
  wordwallSrc?: string;
  aboutLesson?: string;
  onComplete?: () => void;
  submitLabel?: string;
  actions?: ReactNode;
}

function WordwallLesson(props: WordwallLessonProps) {
  const { wordwallSrc, aboutLesson, onComplete, submitLabel, actions } = props;
  return (
    <div className={styles.container}>
      <h3 className={styles.title}></h3>

      <iframe className={styles.iframe} src={wordwallSrc} />

      <p className={styles.description}>{aboutLesson}</p>

      {actions ?? (
        <Button variant="primary" colorScheme="blueWhite" onClick={onComplete}>
          {submitLabel ?? 'Я выполнил! Идем дальше →'}
        </Button>
      )}
    </div>
  );
}

export default WordwallLesson;
