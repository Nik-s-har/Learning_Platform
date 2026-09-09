import type { Meta, StoryObj } from '@storybook/react-vite';
import WordwallLesson from './WordwallLesson';
import type { WordwallLessonProps } from './WordwallLesson';
import '../../../styles/global.css';
import '../../../styles/fonts.css';
import '../../../styles/color.css';

const meta: Meta<WordwallLessonProps> = {
  title: 'Layout/WordwallLesson',
  component: WordwallLesson,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#dce9f5',
          padding: '40px',
          minHeight: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    wordwallSrc: { control: 'text' },
    onComplete: { action: 'completed' },
  },
};

export default meta;
type Story = StoryObj<WordwallLessonProps>;

export const Default: Story = {
  args: {
    wordwallSrc:
      'https://wordwall.net/ru/embed/e1e2d86678774a9d9901f63a48cf0341?themeId=1&templateId=3&fontStackId=0',
  },
};
