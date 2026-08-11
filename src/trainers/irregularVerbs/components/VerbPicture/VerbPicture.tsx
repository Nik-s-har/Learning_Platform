import clsx from 'clsx';
import styles from './VerbPicture.module.css';
import { getVerbMedia } from '../../data/media';

export interface VerbPictureProps {
  infinitive: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/** Иллюстрация глагола: фотография, если она есть, иначе эмодзи. */
function VerbPicture({ infinitive, size = 'md', className }: VerbPictureProps) {
  const media = getVerbMedia(infinitive);

  return (
    <span
      className={clsx(styles.picture, styles[size], className)}
      aria-hidden="true"
    >
      {media.kind === 'image' ? (
        <img src={media.src} alt="" loading="lazy" />
      ) : (
        media.char
      )}
    </span>
  );
}

export default VerbPicture;
