import type { Meta, StoryObj } from '@storybook/react-vite';
import SortTable from './SortTable';

const meta: Meta<typeof SortTable> = {
  title: 'Exercises/SortTable',
  component: SortTable,
};

export default meta;

type Story = StoryObj<typeof SortTable>;

export const Default: Story = {
  args: {
    title: 'Сортировка',
    instruction: 'Распределите формы по трём колонкам таблицы.',
    batchSize: 3,
    columns: [
      { id: 'infinitive', label: 'Infinitive' },
      { id: 'past', label: 'Past Simple' },
      { id: 'participle', label: 'Past Participle' },
    ],
    rows: [
      {
        id: 'go',
        cells: [
          { columnId: 'infinitive', value: 'go', fixed: true },
          { columnId: 'past', value: 'went' },
          { columnId: 'participle', value: 'gone' },
        ],
      },
      {
        id: 'see',
        cells: [
          { columnId: 'infinitive', value: 'see' },
          { columnId: 'past', value: 'saw', fixed: true },
          { columnId: 'participle', value: 'seen' },
        ],
      },
      {
        id: 'take',
        cells: [
          { columnId: 'infinitive', value: 'take' },
          { columnId: 'past', value: 'took' },
          { columnId: 'participle', value: 'taken', fixed: true },
        ],
      },
    ],
  },
};
