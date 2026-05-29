import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rocket } from 'lucide-react';
import CardPresentation from './CardPresentation';

const meta: Meta<typeof CardPresentation> = {
  title: 'UI/CardPresentation',
  component: CardPresentation,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'var(--color-sky-500)', // голубой фон
          padding: '40px',
          minHeight: '100vh', // чтобы фон занимал весь экран
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardPresentation>;

export const Default: Story = {
  args: {
    Icon: Rocket,
    head: 'Fast Rocket',
    text: 'This is a demo of a card with a semi-transparent background.',
  },
};
