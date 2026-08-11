import clsx from 'clsx';
import styles from './VerbForms.module.css';
import VerbPicture from '../VerbPicture';
import type { Verb } from '../../types';

export interface VerbFormsProps {
  verb: Verb;
  /** В столбик — для узких карточек. */
  stacked?: boolean;
  className?: string;
}

/** Три формы глагола: go — went — gone. */
export function VerbForms({ verb, stacked, className }: VerbFormsProps) {
  return (
    <span className={clsx(styles.forms, stacked && styles.stacked, className)}>
      <span>{verb.infinitive}</span>
      <span className={styles.separator}>—</span>
      <span>{verb.past}</span>
      <span className={styles.separator}>—</span>
      <span>{verb.participle}</span>
    </span>
  );
}

export interface VerbTranslationProps {
  verb: Verb;
}

/** Перевод с иллюстрацией — вариант ответа в упражнениях. */
export function VerbTranslation({ verb }: VerbTranslationProps) {
  return (
    <span className={styles.translationCard}>
      <VerbPicture infinitive={verb.infinitive} />
      <span>{verb.translation}</span>
    </span>
  );
}

export default VerbForms;
