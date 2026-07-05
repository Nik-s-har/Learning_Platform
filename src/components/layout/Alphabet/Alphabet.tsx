import { Video, Sparkles, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@ui/button';
import CardPresentation from '@ui/CardPresentation';
import styles from './Alphabet.module.css';

const cards = [
  {
    Icon: Video,
    head: 'Короткие видео ролики',
    text: '',
  },
  {
    Icon: Sparkles,
    head: 'Интерактивные упражнения для закрепления знаний',
    text: '',
  },
  {
    Icon: FileCheck,
    head: 'Письменные задания в рабочей тетради',
    text: '',
  },
];

function Alphabet() {
  const handleCourseClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.layout}>
      <h2>Выбери курс и начни обучение прямо сейчас</h2>
      <p>
        Самый первый и самый важный шаг — изучение букв и звуков. Мы пройдем
        этот путь за 15 увлекательных уроков.
      </p>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <CardPresentation key={index} {...card} />
        ))}
      </div>
      <div className={styles.buttonGroup}>
        <Link to="/alphabet/starlight" style={{ textDecoration: 'none' }} onClick={handleCourseClick}>
          <Button variant="primary" colorScheme="yellowBlack">
            Вводный курс к Starlight
          </Button>
        </Link>
        <Link to="/alphabet/spotlight" style={{ textDecoration: 'none' }} onClick={handleCourseClick}>
          <Button variant="primary" colorScheme="yellowBlack">
            Вводный курс к Spotlight
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Alphabet;
