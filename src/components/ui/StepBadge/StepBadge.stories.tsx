import type { Meta, StoryObj } from '@storybook/react-vite';
import StepBadge from './StepBadge';

const meta: Meta<typeof StepBadge> = {
  title: 'UI/StepBadge',
  component: StepBadge,
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['lock', 'unlock', 'done'],
    },
    step: {
      control: { type: 'number', min: 1, max: 20 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StepBadge>;

export const Lock: Story = {
  args: {
    step: 1,
    status: 'lock',
  },
};

export const Unlock: Story = {
  args: {
    step: 2,
    status: 'unlock',
  },
};

export const Done: Story = {
  args: {
    step: 3,
    status: 'done',
  },
};

export const CustomNumber: Story = {
  args: {
    step: 10,
    status: 'unlock',
  },
};
