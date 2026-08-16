import type { Meta, StoryObj } from '@storybook/react-vite';
import AlphabetCard from './LessonCard';
import ABC from '@assets/pictures/ABC.png';

const meta: Meta<typeof AlphabetCard> = {
  title: 'UI/AlphabetCard',
  component: AlphabetCard,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['lock', 'unlock', 'done'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof AlphabetCard>;

// Функция для обертки карточки с padding и overflow: visible
const withHoverWrapper = (args: any) => (
  <div
    style={{
      padding: '50px',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'visible', // важно, чтобы scale не обрезался
    }}
  >
    <AlphabetCard {...args} />
  </div>
);

export const Lock: Story = {
  render: withHoverWrapper,
  args: {
    title: 'Урок 1',
    image: ABC,
    content: 'Начинаем изучение алфавита.',
    variant: 'lock',
  },
};

export const Unlock: Story = {
  render: withHoverWrapper,
  args: {
    title: 'Урок 2',
    image: ABC,
    content: 'Продолжаем изучение алфавита.',
    variant: 'unlock',
  },
};

export const Done: Story = {
  render: withHoverWrapper,
  args: {
    title: 'Урок 3',
    image: ABC,
    content: 'Повторяем изученный материал.',
    variant: 'done',
  },
};
