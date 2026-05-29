import type { ComponentType } from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  decorators: [
    (Story: ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#c9c7c7' }],
    },
  },
};

export const Default = {
  render: () => <Header />,
};
