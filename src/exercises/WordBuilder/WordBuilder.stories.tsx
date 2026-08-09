import type { Meta, StoryObj } from '@storybook/react-vite';
import WordBuilder from './WordBuilder';

const meta: Meta<typeof WordBuilder> = {
  title: 'Exercises/WordBuilder',
  component: WordBuilder,
};

export default meta;

type Story = StoryObj<typeof WordBuilder>;

export const Default: Story = {
  args: {
    title: 'Составь слово',
    items: [
      {
        id: 'go',
        answer: 'went',
        slots: [
          { label: 'Infinitive', value: 'go' },
          { label: 'Past Simple', target: true },
          { label: 'Past Participle', value: 'gone' },
        ],
      },
      {
        id: 'take',
        answer: 'taken',
        slots: [
          { label: 'Infinitive', value: 'take' },
          { label: 'Past Simple', value: 'took' },
          { label: 'Past Participle', target: true },
        ],
      },
    ],
  },
};
