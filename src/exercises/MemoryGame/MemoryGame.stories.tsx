import type { Meta, StoryObj } from '@storybook/react-vite';
import MemoryGame from './MemoryGame';

const meta: Meta<typeof MemoryGame> = {
  title: 'Exercises/MemoryGame',
  component: MemoryGame,
};

export default meta;

type Story = StoryObj<typeof MemoryGame>;

export const Default: Story = {
  args: {
    title: 'Мемори',
    batchSize: 3,
    pairs: [
      { id: 'go', a: '🚶 go', b: 'went · gone' },
      { id: 'see', a: '👀 see', b: 'saw · seen' },
      { id: 'take', a: '✋ take', b: 'took · taken' },
    ],
  },
};
