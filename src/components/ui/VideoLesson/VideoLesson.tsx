import { Video } from 'lucide-react';
import type { ReactNode } from 'react';
import Button from '@ui/button';
import styles from './VideoLesson.module.css';

export interface VideoLessonProps {
  videoSrc: string;
  aboutLesson: string;
  onComplete?: () => void;
  submitLabel?: string;
  actions?: ReactNode;
}

function VideoLesson({
  videoSrc,
  aboutLesson,
  onComplete,
  submitLabel,
  actions,
}: VideoLessonProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        <Video className={styles.icon} />
        Смотрим видео
      </h3>

      <div className={styles.videoWrapper}>
        <video controls className={styles.iframe}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <p className={styles.description}>{aboutLesson}</p>

      {actions ?? (
        <Button variant="primary" colorScheme="blueWhite" onClick={onComplete}>
          {submitLabel ?? 'Я посмотрел! Идем дальше →'}
        </Button>
      )}
    </div>
  );
}

export default VideoLesson;
