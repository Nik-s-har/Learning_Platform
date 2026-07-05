import styles from './Welcome.module.css';
import foto from '@assets/pictures/kid.jpg';
import logo from '@assets/pictures/logosmartbig.svg';

function Welcome() {
  return (
    <section className={styles.container}>
      <article className={styles.infoArea}>
        <img src={logo} alt="Smart Tutor Kids" className={styles.logo} />
        <h2>
          Английский по школьной программе без репетитора и постоянной помощи
          родителей
        </h2>
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
