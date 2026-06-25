import type { Meta, StoryObj } from '@storybook/react-vite';
import CourseCard from './CourseCard';
import type { CourseCardProps } from './CourseCard';

const meta: Meta<typeof CourseCard> = {
  title: 'UI/CourseCard',
  component: CourseCard,
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['available', 'in-progress', 'completed'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof CourseCard>;

const wrap = (args: CourseCardProps) => (
  <div style={{ width: 560, padding: 24 }}>
    <CourseCard {...args} />
  </div>
);

export const InProgress: Story = {
  render: wrap,
  args: {
    icon: <span>🔤</span>,
    title: 'Английский Алфавит',
    lessonsCount: 7,
    status: 'in-progress',
  },
};

export const Available: Story = {
  render: wrap,
  args: {
    icon: <span>🔤</span>,
    title: 'Английский Алфавит',
    lessonsCount: 7,
    status: 'available',
  },
};

export const Completed: Story = {
  render: wrap,
  args: {
    icon: <span>🔤</span>,
    title: 'Английский Алфавит',
    lessonsCount: 7,
    status: 'completed',
  },
};
