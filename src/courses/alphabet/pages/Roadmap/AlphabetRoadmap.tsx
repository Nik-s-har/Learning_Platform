import { useNavigate } from 'react-router';
import AlphabetStep from '@layout/CourseStep';
import { alphabetCourseData } from '@alphabet/data/alphabetLessons';
import styles from './AlphabetRoadmap.module.css';

export function AlphabetRoadmap() {
  const navigate = useNavigate();
  return (
    <main className={styles.conteiner}>
      <div className={styles.content}>
        <section className={styles.header}>
          <h2>Карта приключений</h2>
          <p>
            Пройди все 7 уроков, чтобы выучить английский алфавит и собрать
            коллекцию стикеров!
          </p>
        </section>
        <section className={styles.alphabetRoadmap}>
          {alphabetCourseData.map((lesson) => (
            <AlphabetStep
              key={lesson.id}
              lesson={lesson}
              status="unlock"
              onStart={() => navigate(`/alphabet/lesson/${lesson.id}`)}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
