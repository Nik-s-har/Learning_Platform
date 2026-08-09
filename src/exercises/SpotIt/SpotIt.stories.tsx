import type { Meta, StoryObj } from '@storybook/react-vite';
import SpotIt from './SpotIt';

const meta: Meta<typeof SpotIt> = {
  title: 'Exercises/SpotIt',
  component: SpotIt,
};

export default meta;

type Story = StoryObj<typeof SpotIt>;

export const Default: Story = {
  args: {
    title: 'Spot it',
    instruction: 'Найдите одинаковую картинку на двух карточках.',
    items: ['🚶', '👀', '✋', '🎤', '😴', '🏃', '🍽️', '✍️'].map(
      (picture, index) => ({ id: String(index), picture }),
    ),
  },
};
