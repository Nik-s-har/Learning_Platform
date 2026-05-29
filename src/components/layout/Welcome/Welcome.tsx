import Button from '@ui/button';
import styles from './Welcome.module.css';
import foto from '@assets/pictures/foto.jpg';

function Welcome() {
  return (
    <section className={styles.container}>
      <article className={styles.infoArea}>
        <Button variant="secondary" colorScheme="greyBlue">
          Английский - это весело
        </Button>
        <h1 className={styles.titleText}>
          Открой мир английского{' '}
          <span className={styles.accentText}>с улыбкой!</span>
        </h1>
        <p className={styles.text}>
          Уникальный игровой курс изучения алфавита для детей 7-9 лет.
          Интерактивные задания, яркие видео и система наград, которая
          мотивирует учиться каждый день.
        </p>
        <div className={styles.buttonContainer}>
          <Button
            variant="primary"
            colorScheme="blueWhite"
            // style={{ maxWidth: '2px', width: '100%' }}
          >
            Начать учится бесплатно
          </Button>
          <Button variant="primary" colorScheme="whiteBlack">
            Читать блог
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
