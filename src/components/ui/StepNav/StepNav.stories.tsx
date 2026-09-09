import type { Meta, StoryObj } from '@storybook/react-vite';
import StepNav from './StepNav';

const meta: Meta<typeof StepNav> = {
  title: 'UI/StepNav',
  component: StepNav,
  argTypes: {
    activeStep: { control: { type: 'number', min: 0 } },
    onSelectStep: { action: 'selected' },
  },
};

export default meta;
type Story = StoryObj<typeof StepNav>;

const steps = [
  'Видео 1',
  'Упражнение 1',
  'Карточки',
  'Выбери перевод',
  'Найди пару',
];

export const Default: Story = {
  args: { steps, activeStep: 0 },
};

export const MiddleStep: Story = {
  args: { steps, activeStep: 2 },
};

/** Без onSelectStep кнопки неактивны — навигация выключена. */
export const ReadOnly: Story = {
  args: { steps, activeStep: 2, onSelectStep: undefined },
};
