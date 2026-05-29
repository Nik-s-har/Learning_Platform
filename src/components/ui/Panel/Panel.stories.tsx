import type { Meta, StoryObj } from '@storybook/react-vite';
import Panel from './Panel';

const meta: Meta<typeof Panel> = {
  title: 'UI/Panel',
  component: Panel,
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    as: {
      control: { type: 'select' },
      options: ['div', 'article', 'section', 'aside'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '32px', background: 'var(--bg-color)' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: {
    padding: 'md',
    children: 'Содержимое панели',
  },
};

export const PaddingSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Panel padding="sm">padding sm — 16px</Panel>
      <Panel padding="md">padding md — 24px</Panel>
      <Panel padding="lg">padding lg — 32px</Panel>
    </div>
  ),
};

export const WithContent: Story = {
  args: {
    padding: 'md',
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '8px' }}>Заголовок панели</h3>
        <p style={{ margin: 0, color: 'var(--color-slate-400)' }}>
          Здесь может быть любое содержимое: текст, кнопки, графики.
        </p>
      </div>
    ),
  },
};
