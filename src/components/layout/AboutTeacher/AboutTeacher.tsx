import styles from './AboutTeacher.module.css';
import foto from '@assets/pictures/My photo (3).png';

function AboutTeacher() {
  return (
    <section className={styles.container}>
      <div className={styles.imageArea}>
        <div className={styles.imageContainer}>
          <img src={foto} />
        </div>
      </div>
      <article className={styles.infoArea}>
        <h2>Методика, которой можно доверять</h2>
        <p className={styles.infoText}>
          Меня зовут Харитонова Ольга Владимировна. Я - автор сайта, учитель
          английского языка с более чем 20-летним опытом работы и квалификацией
          нейропедагога.
        </p>
        <p className={styles.infoText}>
          В основе моей программы — современные методики обучения, многолетняя
          педагогическая практика и понимание того, как дети лучше усваивают
          информацию. Благодаря этому ребёнок не просто заучивает правила, а
          действительно понимает материал, быстрее запоминает новые темы,
          уверенно осваивает школьную программу и применяет полученные знания на
          уроках и при выполнении домашних заданий.
        </p>
      </article>
    </section>
  );
}

export default AboutTeacher;
