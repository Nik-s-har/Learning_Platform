import type { Meta, StoryObj } from '@storybook/react-vite';
import ExerciseLesson from './ExerciseLesson';
import type { ExerciseLessonProps, ExerciseStep } from './ExerciseLesson';
import '../../../styles/global.css';
import '../../../styles/fonts.css';
import '../../../styles/color.css';

const meta: Meta<ExerciseLessonProps> = {
  title: 'Layout/ExerciseLesson',
  component: ExerciseLesson,
  decorators: [
    (Story) => (
      <div
        style={{ backgroundColor: '#dce9f5', padding: 40, minHeight: '100vh' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    step: { control: false },
    onComplete: { action: 'completed' },
    onPassed: { action: 'passed' },
  },
};

export default meta;
type Story = StoryObj<ExerciseLessonProps>;

/** Одна обёртка на семь движков — меняется только step. */
const step = (value: ExerciseStep): ExerciseStep => value;

export const Flashcards: Story = {
  args: {
    step: step({
      title: 'Карточки',
      type: 'exercise',
      engine: 'flashcards',
      aboutLesson: 'Нажми на карточку, чтобы увидеть перевод',
      cards: [
        { id: 'kind', front: 'kind', back: 'добрый', speech: ['kind'] },
        { id: 'clever', front: 'clever', back: 'умный', speech: ['clever'] },
      ],
    }),
  },
};

export const QuizChoice: Story = {
  args: {
    step: step({
      title: 'Выбери перевод',
      type: 'exercise',
      engine: 'quizChoice',
      aboutLesson: 'Нажми на правильный вариант',
      questions: [
        {
          id: 'kind',
          prompt: 'kind',
          options: [
            { id: 'a', content: 'добрый', correct: true },
            { id: 'b', content: 'смелый', correct: false },
          ],
        },
      ],
    }),
  },
};

export const MatchPairs: Story = {
  args: {
    step: step({
      title: 'Найди пару',
      type: 'exercise',
      engine: 'matchPairs',
      aboutLesson: 'Выбери слово слева, затем его перевод справа',
      batchSize: 3,
      pairs: [
        { id: 'kind', left: 'kind', right: 'добрый' },
        { id: 'clever', left: 'clever', right: 'умный' },
        { id: 'brave', left: 'brave', right: 'смелый' },
      ],
    }),
  },
};

export const MemoryGame: Story = {
  args: {
    step: step({
      title: 'Мемори',
      type: 'exercise',
      engine: 'memoryGame',
      aboutLesson: 'Запомни, где какая карточка, и открой пару',
      batchSize: 3,
      pairs: [
        { id: 'kind', a: '😊 kind', b: 'добрый' },
        { id: 'clever', a: '🤓 clever', b: 'умный' },
        { id: 'brave', a: '🦁 brave', b: 'смелый' },
      ],
    }),
  },
};

export const WordBuilder: Story = {
  args: {
    step: step({
      title: 'Составь слово',
      type: 'exercise',
      engine: 'wordBuilder',
      aboutLesson: 'Собери английское слово из букв',
      items: [
        {
          id: 'kind',
          answer: 'kind',
          slots: [
            { label: 'Перевод', value: 'добрый' },
            { label: 'English', target: true },
          ],
        },
      ],
    }),
  },
};

export const SortTable: Story = {
  args: {
    step: step({
      title: 'Разложи по колонкам',
      type: 'exercise',
      engine: 'sortTable',
      aboutLesson: 'Поставь перевод и антоним рядом со словом',
      batchSize: 3,
      columns: [
        { id: 'english', label: 'English' },
        { id: 'russian', label: 'Перевод' },
        { id: 'opposite', label: 'Antonym' },
      ],
      rows: [
        {
          id: 'kind',
          cells: [
            { columnId: 'english', value: 'kind', fixed: true },
            { columnId: 'russian', value: 'добрый' },
            { columnId: 'opposite', value: 'unkind' },
          ],
        },
      ],
    }),
  },
};

/** Нужно минимум MIN_ITEMS = 5 картинок, иначе вместо игры будет сообщение. */
export const SpotIt: Story = {
  args: {
    step: step({
      title: 'Найди одинаковое',
      type: 'exercise',
      engine: 'spotIt',
      aboutLesson: 'Найди картинку, которая есть на обеих карточках',
      items: [
        { id: 'kind', picture: '😊', label: 'kind' },
        { id: 'clever', picture: '🤓', label: 'clever' },
        { id: 'brave', picture: '🦁', label: 'brave' },
        { id: 'shy', picture: '🙈', label: 'shy' },
        { id: 'funny', picture: '🤡', label: 'funny' },
        { id: 'polite', picture: '🙇', label: 'polite' },
      ],
    }),
  },
};
