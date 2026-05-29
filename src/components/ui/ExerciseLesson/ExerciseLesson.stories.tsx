import type { Meta, StoryObj } from '@storybook/react-vite';
import ExerciseLesson from './ExerciseLesson';
import type { ExerciseLessonProps } from './ExerciseLesson';
import '../../../styles/global.css';
import '../../../styles/fonts.css';
import '../../../styles/color.css';

const meta: Meta<ExerciseLessonProps> = {
  title: 'Layout/ExerciseLesson',
  component: ExerciseLesson,
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
    exerciseSrc: { control: 'text' },
    onComplete: { action: 'completed' },
  },
};

export default meta;
type Story = StoryObj<ExerciseLessonProps>;

export const Default: Story = {
  args: {
    exerciseSrc:
      'https://wordwall.net/ru/embed/e1e2d86678774a9d9901f63a48cf0341?themeId=1&templateId=3&fontStackId=0',
  },
};
