import Button from '@ui/button';
import styles from './Welcome.module.css';
import foto from '@assets/pictures/kid.jpg';

function Welcome() {
  return (
    <section className={styles.container}>
      <article className={styles.infoArea}>
        <h1>Smart Tutor Kids</h1>
        <h2>
          Английский по школьной программе без репетитора и постоянной помощи
          родителей
        </h2>
        <p className={styles.text}>
          Короткие видеоуроки, интерактивные упражнения и печатные материалы
          помогают детям самостоятельно разобраться в школьной программе по
          английскому языку, закрепить знания и чувствовать себя уверенно на
          уроках.
        </p>
        <div className={styles.buttonContainer}>
          <Button variant="primary" colorScheme="blueWhite">
            Начать учится бесплатно
          </Button>
        </div>
      </article>
      <div className={styles.imageArea}>
        <div className={styles.imageContainer}>
          <img src={foto} />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
