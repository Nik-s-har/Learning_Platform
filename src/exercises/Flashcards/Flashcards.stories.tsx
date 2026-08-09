import type { Meta, StoryObj } from '@storybook/react-vite';
import Flashcards from './Flashcards';

const meta: Meta<typeof Flashcards> = {
  title: 'Exercises/Flashcards',
  component: Flashcards,
};

export default meta;

type Story = StoryObj<typeof Flashcards>;

export const Default: Story = {
  args: {
    title: 'Карточки',
    instruction: 'Чтобы узнать перевод, нажми на карточку',
    cards: [
      {
        id: 'go',
        front: <strong style={{ fontSize: 34 }}>go — went — gone</strong>,
        back: <strong style={{ fontSize: 34 }}>идти, ехать</strong>,
        speech: ['go', 'went', 'gone'],
      },
      {
        id: 'see',
        front: <strong style={{ fontSize: 34 }}>see — saw — seen</strong>,
        back: <strong style={{ fontSize: 34 }}>видеть</strong>,
        speech: ['see', 'saw', 'seen'],
      },
    ],
  },
};

export const WithoutSound: Story = {
  args: {
    title: 'Вспомни форму глагола',
    cards: [
      {
        id: 'take',
        front: <strong style={{ fontSize: 40 }}>take</strong>,
        back: <strong style={{ fontSize: 28 }}>took · taken</strong>,
      },
    ],
  },
};
