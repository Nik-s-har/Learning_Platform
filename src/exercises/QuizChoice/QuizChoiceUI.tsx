import clsx from 'clsx';
import { ExerciseShell, FeedbackLine } from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import styles from './QuizChoice.module.css';
import type { QuizQuestion } from './QuizChoiceTypes';

export interface QuizChoiceUIProps {
  question: QuizQuestion;
  title?: string;
  instruction?: string;
  score: number;
  total: number;
  feedback: FeedbackState;
  answeredId: string | null;
  wrongIds: string[];
  isLocked: boolean;
  onAnswer: (optionId: string) => void;
}

function QuizChoiceUI(props: QuizChoiceUIProps) {
  const {
    question,
    title,
    instruction,
    score,
    total,
    feedback,
    answeredId,
    wrongIds,
    isLocked,
    onAnswer,
  } = props;

  return (
    <ExerciseShell
      title={title}
      instruction={instruction}
      status={`Выполнено: ${score} из ${total}`}
      feedback={<FeedbackLine state={feedback} />}
    >
      <div className={styles.question}>
        <div className={styles.prompt}>{question.prompt}</div>
        <div className={styles.options}>
          {question.options.map((option) => (
            <button
              key={option.id}
              type="button"
              className={clsx(
                styles.option,
                answeredId === option.id && styles.correct,
                wrongIds.includes(option.id) && styles.incorrect,
              )}
              onClick={() => onAnswer(option.id)}
              disabled={isLocked}
            >
              {option.content}
            </button>
          ))}
        </div>
      </div>
    </ExerciseShell>
  );
}

export default QuizChoiceUI;
