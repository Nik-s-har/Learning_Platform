import { Video, Sparkles, FileCheck } from 'lucide-react';
import Button from '@ui/button';
import CardPresentation from '@ui/CardPresentation';
import styles from './Alphabet.module.css';

const cards = [
  {
    Icon: Video,
    head: 'Видео-уроки',
    text: 'Короткие и понятные ролики про каждую букву.',
  },
  {
    Icon: Sparkles,
    head: 'Игры',
    text: 'Интерактивные упражнения для закрепления знаний.',
  },
  {
    Icon: FileCheck,
    head: 'Тесты',
    text: 'Проверь себя и открой путь к следующему уровню.',
  },
];

function Alphabet() {
  return (
    <section className={styles.layout}>
      <h2>Курс "Азбука приключений"</h2>
      <p>
        Самый первый и самый важный шаг — изучение букв и звуков. Мы пройдем
        этот путь за 7 увлекательных уроков.
      </p>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <CardPresentation key={index} {...card} />
        ))}
      </div>
      <Button variant="primary" colorScheme="yellowBlack">
        Начать изучение сейчас
      </Button>
    </section>
  );
}

export default Alphabet;
