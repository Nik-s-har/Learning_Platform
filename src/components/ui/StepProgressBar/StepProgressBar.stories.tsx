import type { Meta, StoryObj } from '@storybook/react-vite';
import StepProgressBar from './StepProgressBar';

const meta: Meta<typeof StepProgressBar> = {
  title: 'UI/StepProgressBar',
  component: StepProgressBar,
  argTypes: {
    stepState: {
      control: { type: 'object' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StepProgressBar>;

export const AllUndone: Story = {
  args: {
    stepState: [false, false, false, false, false],
  },
};

export const PartiallyDone: Story = {
  args: {
    stepState: [true, true, true, false, false],
  },
};

export const AllDone: Story = {
  args: {
    stepState: [true, true, true, true, true],
  },
};
