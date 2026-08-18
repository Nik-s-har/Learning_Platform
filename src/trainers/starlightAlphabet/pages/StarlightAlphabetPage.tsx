import styles from './StarlightAlphabetPage.module.css';

const trainerUrl = `${import.meta.env.BASE_URL}trainers/starlight-alphabet/index.html`;

export function StarlightAlphabetPage() {
  return (
    <main className={styles.page}>
      <iframe
        className={styles.trainer}
        src={trainerUrl}
        title="Тренажёр Starlight Alphabet"
        allow="autoplay"
      />
    </main>
  );
}
