import type { Meta, StoryObj } from '@storybook/react-vite';
import { starlightGrade4 } from '@textbooks/data/starlight/grade4';
import ModuleTable from './ModuleTable';

const meta: Meta<typeof ModuleTable> = {
  title: 'Layout/ModuleTable',
  component: ModuleTable,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '32px 16px', background: '#f8fafc' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ModuleTable>;

export const Default: Story = {
  args: { modules: starlightGrade4.modules },
};

/** Одна строка: должна скруглиться и сверху, и снизу. */
export const SingleModule: Story = {
  args: { modules: starlightGrade4.modules.slice(0, 1) },
};
