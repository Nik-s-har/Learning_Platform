import { useState } from 'react';
import {
  CompletionPanel,
  ExerciseShell,
  useRoundState,
  useTimeouts,
} from '@exercises/shared';
import type { FeedbackState } from '@exercises/shared';
import Button from '@ui/button';
import QuizChoiceUI from './QuizChoiceUI';
import type { QuizChoiceProps } from './QuizChoiceTypes';

const CORRECT_DELAY_MS = 700;
const WRONG_HIGHLIGHT_MS = 450;

interface QuestionState {
  answeredId: string | null;
  wrongIds: string[];
  feedback: FeedbackState;
}

const EMPTY_QUESTION: QuestionState = {
  answeredId: null,
  wrongIds: [],
  feedback: 'idle',
};

/**
 * «Выбери правильный ответ»: условие и несколько вариантов, один из них верный.
 * Ошибка не листает вопрос — можно пробовать дальше, как в оригинале.
 */
function QuizChoice({
  questions,
  title,
  instruction,
  onFinish,
}: QuizChoiceProps) {
  const { schedule, clear } = useTimeouts();

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [state, setState] = useRoundState(index, EMPTY_QUESTION);

  const total = questions.length;
  const question = questions[index];

  const handleAnswer = (optionId: string) => {
    if (state.answeredId) return;
    const option = question.options.find((item) => item.id === optionId);
    if (!option) return;

    if (!option.correct) {
      setState((current) => ({
        ...current,
        feedback: 'bad',
        wrongIds: [...current.wrongIds, optionId],
      }));
      schedule(() => {
        setState((current) => ({
          ...current,
          wrongIds: current.wrongIds.filter((id) => id !== optionId),
        }));
      }, WRONG_HIGHLIGHT_MS);
      return;
    }

    const nextScore = score + 1;
    setScore(nextScore);
    setState({ answeredId: optionId, wrongIds: [], feedback: 'good' });

    schedule(() => {
      if (index === total - 1) {
        setIsDone(true);
        onFinish?.({ score: nextScore, total });
      } else {
        setIndex((current) => current + 1);
      }
    }, CORRECT_DELAY_MS);
  };

  const restart = () => {
    clear();
    setIndex(0);
    setScore(0);
    setIsDone(false);
    setState(EMPTY_QUESTION);
  };

  if (total === 0) return null;

  if (isDone) {
    return (
      <ExerciseShell title={title}>
        <CompletionPanel text={`Правильных ответов: ${score} из ${total}.`}>
          <Button variant="primary" colorScheme="blueWhite" onClick={restart}>
            Играть ещё раз
          </Button>
        </CompletionPanel>
      </ExerciseShell>
    );
  }

  return (
    <QuizChoiceUI
      question={question}
      title={title}
      instruction={instruction}
      score={score}
      total={total}
      feedback={state.feedback}
      answeredId={state.answeredId}
      wrongIds={state.wrongIds}
      isLocked={state.answeredId !== null}
      onAnswer={handleAnswer}
    />
  );
}

export default QuizChoice;
