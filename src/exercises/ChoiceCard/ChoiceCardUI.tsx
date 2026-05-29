import { Volume2 } from 'lucide-react';
import styles from './ChoiceCard.module.css';
import type { ChoiceCardStep } from './ChoiceCardTypes';
import Button from '@ui/button';

export interface ChoiceCardUIProps {
  data: ChoiceCardStep;
  currentStep: number;
  totalSteps: number;
  onChoice: () => void;
}

function ChoiceCardUI(props: ChoiceCardUIProps) {
  const { data, currentStep, totalSteps, onChoice } = props;
  return (
    <div className={styles.container}>
      <h3>Проверь свои знания</h3>
      <span className={styles.progressInfo}>
        Выполнено {currentStep} заданий из {totalSteps}
      </span>
      <progress
        value={currentStep}
        max={totalSteps}
        className={styles.progressBar}
      />
      <p>Послушай слово и выбери букву с которой оно начинается</p>
      <Button
        variant="round"
        colorScheme="blueWhite"
        className={styles.soundBtn}
      >
        <Volume2 />
      </Button>
      <span className={styles.clue}>Пpослушать</span>
      <section className={styles.cardsSection}>
        {data.cards.map((card, index) => (
          <button key={index} className={styles.cardBtn} onClick={onChoice}>
            {card.content}
          </button>
        ))}
      </section>
    </div>
  );
}

export default ChoiceCardUI;
