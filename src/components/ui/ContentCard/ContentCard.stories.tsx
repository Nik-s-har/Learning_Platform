import type { Meta, StoryObj } from '@storybook/react-vite';
import ABC from '@assets/pictures/ABC.png';
import MapSpotlight from '@assets/pictures/MapSpotlight.jpg';
import ContentCard from './ContentCard';

const meta: Meta<typeof ContentCard> = {
  title: 'UI/ContentCard',
  component: ContentCard,
  argTypes: {
    onClick: { action: 'clicked' },
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

type Story = StoryObj<typeof ContentCard>;

export const Default: Story = {
  args: {
    imgSrc: ABC,
    title: 'Английский алфавит',
    description: 'Учим буквы и звуки в весёлых упражнениях',
    onClick: () => {},
  },
};

export const LongText: Story = {
  args: {
    imgSrc: MapSpotlight,
    title: 'Путешествие по карте Spotlight с длинным названием курса',
    description:
      'Очень подробное описание курса, которое проверяет, как карточка фиксированной высоты 353px ведёт себя при переполнении текстом. Здесь много слов специально.',
    onClick: () => {},
  },
};

export const Grid: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <ContentCard {...args} imgSrc={ABC} title="Английский алфавит" />
      <ContentCard
        {...args}
        imgSrc={MapSpotlight}
        title="Карта Spotlight"
        description="Проходим уроки по карте"
      />
    </div>
  ),
  args: {
    imgSrc: ABC,
    title: 'Неправильные глаголы',
    description:
      'Карточки с тремя формами глагола. Переворачивай, запоминай и проверяй себя в режиме теста.',
    onClick: () => {},
  },
};
