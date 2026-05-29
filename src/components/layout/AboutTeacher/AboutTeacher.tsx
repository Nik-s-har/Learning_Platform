import styles from './AboutTeacher.module.css';
import { Smile, GraduationCap, Trophy } from 'lucide-react';
import foto from '@assets/pictures/image.png';

function AboutTeacher() {
  return (
    <section className={styles.container}>
      <div className={styles.imageArea}>
        <div className={styles.imageContainer}>
          <img src={foto} />
        </div>
      </div>
      <article className={styles.infoArea}>
        <h2>
          Почему учиться со мной — это{' '}
          <span className={styles.accentText}>здорово?</span>
        </h2>
        <p className={styles.infoText}>
          Я создала этот проект, чтобы показать: изучение иностранного языка не
          должно быть скучным уроком за партой. Моя методика основана на
          любознательности детей и игровом подходе.
        </p>
        <ul>
          <li className={styles.liItem}>
            <div className={styles.marker}>
              <Smile />
            </div>
            <span>Индивидуальный подход к каждому ребенку</span>
          </li>
          <li className={styles.liItem}>
            <div className={styles.marker}>
              <GraduationCap />
            </div>
            <span>Методика одобренная ведущими лингвистами</span>
          </li>
          <li className={styles.liItem}>
            <div className={styles.marker}>
              <Trophy />
            </div>
            <span>Система мотивации: собирай стикеры и получай призы</span>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default AboutTeacher;
