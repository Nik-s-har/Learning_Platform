import type { Meta, StoryObj } from '@storybook/react-vite';
import ChoiceCardUI from './ChoiceCardUI';
import type { ChoiceCardUIProps } from './ChoiceCardUI';
import '@styles/global.css';
import '@styles/fonts.css';
import '@styles/color.css';

const meta: Meta<ChoiceCardUIProps> = {
  title: 'Exercises/ChoiceCardUI',
  component: ChoiceCardUI,
  parameters: {
    layout: 'centered',
  },
  globals: {
    viewport: 'choiceCard',
  },
  argTypes: {
    onChoice: { action: 'choice made' },
  },
};

export default meta;
type Story = StoryObj<ChoiceCardUIProps>;

export const Default: Story = {
  args: {
    currentStep: 5,
    totalSteps: 10,
    data: {
      soundURL: '',
      cards: [
        { content: 'A', isTrue: true },
        { content: 'B', isTrue: false },
        { content: 'C', isTrue: false },
        { content: 'D', isTrue: false },
      ],
    },
  },
};
