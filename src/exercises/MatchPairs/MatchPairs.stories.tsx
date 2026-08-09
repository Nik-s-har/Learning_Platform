import type { Meta, StoryObj } from '@storybook/react-vite';
import MatchPairs from './MatchPairs';

const meta: Meta<typeof MatchPairs> = {
  title: 'Exercises/MatchPairs',
  component: MatchPairs,
};

export default meta;

type Story = StoryObj<typeof MatchPairs>;

export const Default: Story = {
  args: {
    title: 'Найди пару',
    instruction: 'Сначала выберите карточку слева, затем её пару справа.',
    batchSize: 4,
    pairs: [
      { id: 'go', left: 'go — went — gone', right: 'идти, ехать' },
      { id: 'see', left: 'see — saw — seen', right: 'видеть' },
      { id: 'take', left: 'take — took — taken', right: 'брать' },
      { id: 'sing', left: 'sing — sang — sung', right: 'петь' },
    ],
  },
};
