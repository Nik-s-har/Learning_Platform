import { useNavigate, useParams, Navigate } from 'react-router-dom';
import AlphabetStep from '@layout/CourseStep';
import { alphabetTextbooks, isTextbookSlug } from '@alphabet/data';
import styles from './AlphabetRoadmap.module.css';

export function AlphabetRoadmap() {
  const navigate = useNavigate();
  const { textbook } = useParams<{ textbook: string }>();

  if (!isTextbookSlug(textbook)) return <Navigate to="/" replace />;

  const { data } = alphabetTextbooks[textbook];

  return (
    <main className={styles.conteiner}>
      <div className={styles.content}>
        <section className={styles.header}>
          <h2>Карта уроков</h2>
          <p>
            Скачай рабочую тетрадь и начинай заниматься
          </p>
        </section>
        <section className={styles.alphabetRoadmap}>
          {data.map((lesson) => (
            <AlphabetStep
              key={lesson.id}
              lesson={lesson}
              status="unlock"
              onStart={() =>
                navigate(`/alphabet/${textbook}/lesson/${lesson.id}`)
              }
            />
          ))}
        </section>
      </div>
    </main>
  );
}
