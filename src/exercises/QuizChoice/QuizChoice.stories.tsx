import type { Meta, StoryObj } from '@storybook/react-vite';
import QuizChoice from './QuizChoice';

const meta: Meta<typeof QuizChoice> = {
  title: 'Exercises/QuizChoice',
  component: QuizChoice,
};

export default meta;

type Story = StoryObj<typeof QuizChoice>;

export const Default: Story = {
  args: {
    title: 'Выбери правильный ответ',
    questions: [
      {
        id: 'go',
        prompt: 'go — went — gone',
        options: [
          { id: 'a', content: 'идти, ехать', correct: true },
          { id: 'b', content: 'видеть', correct: false },
          { id: 'c', content: 'брать', correct: false },
        ],
      },
      {
        id: 'see',
        prompt: 'see — saw — seen',
        options: [
          { id: 'a', content: 'петь', correct: false },
          { id: 'b', content: 'видеть', correct: true },
          { id: 'c', content: 'спать', correct: false },
        ],
      },
    ],
  },
};
