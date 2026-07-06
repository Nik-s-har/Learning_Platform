import { useNavigate, useParams, Navigate } from 'react-router-dom';
import AlphabetStep from '@layout/CourseStep';
import { alphabetTextbooks, isTextbookSlug } from '@alphabet/data';
import styles from './AlphabetRoadmap.module.css';

export function AlphabetRoadmap() {
  const navigate = useNavigate();
  const { textbook } = useParams<{ textbook: string }>();

  if (!isTextbookSlug(textbook)) return <Navigate to="/" replace />;

  const { data, mapImage, menuLabel, workbookUrl, workbookDownloadName } =
    alphabetTextbooks[textbook];

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <section className={styles.header}>
          <img
            className={styles.mapImage}
            src={mapImage}
            alt={menuLabel}
          />
          <h2 className={styles.courseTitle}>
            Вводный курс к{' '}
            <span
              className={
                textbook === 'starlight'
                  ? styles.starlightTitle
                  : styles.spotlightTitle
              }
            >
              {textbook === 'starlight' ? 'Starlight' : 'Spotlight'}
            </span>
          </h2>
          {workbookUrl && (
            <a
              className={styles.workbookButton}
              href={workbookUrl}
              download={workbookDownloadName}
              target="_blank"
              rel="noreferrer"
            >
              Скачать рабочую тетрадь
            </a>
          )}
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
