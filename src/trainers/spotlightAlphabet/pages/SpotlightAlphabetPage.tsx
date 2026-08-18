import styles from './SpotlightAlphabetPage.module.css';

const trainerUrl = `${import.meta.env.BASE_URL}trainers/spotlight-alphabet/index.html`;

export function SpotlightAlphabetPage() {
  return (
    <main className={styles.page}>
      <iframe
        className={styles.trainer}
        src={trainerUrl}
        title="Тренажёр Spotlight Alphabet"
        allow="autoplay"
      />
    </main>
  );
}
