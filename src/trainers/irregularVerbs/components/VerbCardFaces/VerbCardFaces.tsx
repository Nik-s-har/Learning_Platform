import styles from './VerbCardFaces.module.css';
import VerbPicture from '../VerbPicture';
import { VerbForms } from '../VerbForms';
import type { Verb } from '../../types';

interface FaceProps {
  verb: Verb;
}

/** Лицо карточки «Карточки»: три формы крупно. */
export function FormsFace({ verb }: FaceProps) {
  return (
    <span className={styles.formsFace}>
      <VerbForms verb={verb} />
    </span>
  );
}

/** Оборот карточки «Карточки»: картинка и перевод. */
export function TranslationFace({ verb }: FaceProps) {
  return (
    <span className={styles.translationFace}>
      <VerbPicture infinitive={verb.infinitive} size="lg" />
      <span className={styles.translationText}>{verb.translation}</span>
    </span>
  );
}

/** Лицо карточки «Вспомни форму»: картинка и инфинитив. */
export function RecallFrontFace({ verb }: FaceProps) {
  return (
    <span className={styles.translationFace}>
      <VerbPicture infinitive={verb.infinitive} size="lg" />
      <span className={styles.infinitiveFace}>{verb.infinitive}</span>
    </span>
  );
}

/** Оборот карточки «Вспомни форму»: вторая и третья формы. */
export function RecallBackFace({ verb }: FaceProps) {
  return (
    <span className={styles.recallForms}>
      <span className={styles.recallForm}>
        <small className={styles.recallLabel}>Past Simple</small>
        <strong className={styles.recallValue}>{verb.past}</strong>
      </span>
      <span className={styles.recallForm}>
        <small className={styles.recallLabel}>Past Participle</small>
        <strong className={styles.recallValue}>{verb.participle}</strong>
      </span>
    </span>
  );
}

/** Карточка «Мемори» с картинкой и инфинитивом. */
export function MemoryPictureFace({ verb }: FaceProps) {
  return (
    <span className={styles.memoryPicture}>
      <VerbPicture infinitive={verb.infinitive} />
      <strong>{verb.infinitive}</strong>
    </span>
  );
}

/** Парная карточка «Мемори» со второй и третьей формой. */
export function MemoryFormsFace({ verb }: FaceProps) {
  return (
    <strong className={styles.memoryForms}>
      {verb.past}
      <br />
      {verb.participle}
    </strong>
  );
}
