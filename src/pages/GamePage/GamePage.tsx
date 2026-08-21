import { useNavigate } from 'react-router-dom';
import ContentCard from '@ui/ContentCard/ContentCard';
import { trainers } from '@trainers/index';
import styles from './GamePage.module.css';

export function GamePage() {
  const navigate = useNavigate();

  return (
    <main className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.icon} aria-hidden="true">
            🎮
          </span>
          <div>
            <h1>Игры и тренажёры</h1>
            <p className={styles.subtitle}>Учи английский играючи</p>
          </div>
        </div>
      </header>
      <div className={styles.container}>
        {trainers.map((t) => (
          <ContentCard
            key={t.slug}
            imgSrc={t.cardImage}
            title={t.title}
            description={t.description}
            onClick={() => navigate(t.path)}
          />
        ))}
      </div>
    </main>
  );
}
