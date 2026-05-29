import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CourseStep from './CourseStep';
import Tort from '@assets/pictures/tort-48x64.png';

const meta: Meta<typeof CourseStep> = {
  title: 'Layout/CourseStep',
  component: CourseStep,
};

export default meta;

type Story = StoryObj<typeof CourseStep>;

const withWrapper = (args: React.ComponentProps<typeof CourseStep>) => (
  <div style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}>
    <CourseStep {...args} />
  </div>
);

export const Default: Story = {
  render: withWrapper,
  args: {
    lesson: {
      id: 1,
      title: 'Урок 1',
      image: Tort,
      content: 'Первые шаги в алфавите',
    },
    status: 'unlock',
    onStart: () => {},
  },
};
