import type { Meta, StoryObj } from '@storybook/react-vite';
import Lesson from './Lesson';
import type { LessonProps } from './Lesson';
import { alphabetCourseData } from '@alphabet/data/alphabetLessons';
const videoFile = '/courses/alphabet/video/ABCD.mp4';
import '../../../styles/global.css';
import '../../../styles/fonts.css';
import '../../../styles/color.css';

const lesson = alphabetCourseData[0];
const steps = lesson.steps ?? [];
const videoStep = steps[0];
const exerciseStep = steps[1];
const stepState = steps.map(() => false);

const meta: Meta<LessonProps> = {
  title: 'Layout/Lesson',
  component: Lesson,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#dce9f5',
          minHeight: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: { control: 'radio', options: ['video', 'exercise'] },
    src: { control: false },
    onComplete: { action: 'completed' },
  },
};

export default meta;
type Story = StoryObj<LessonProps>;

export const VideoStep: Story = {
  args: {
    lessonId: lesson.id,
    title: lesson.content,
    stepState,
    type: videoStep.type,
    src: videoFile,
    aboutLesson: videoStep.aboutLesson,
  },
};

export const ExerciseStep: Story = {
  args: {
    lessonId: lesson.id,
    title: lesson.content,
    stepState,
    type: exerciseStep.type,
    src: exerciseStep.src,
    aboutLesson: exerciseStep.aboutLesson,
  },
};
