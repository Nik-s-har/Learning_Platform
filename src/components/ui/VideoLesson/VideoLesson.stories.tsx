import type { Meta, StoryObj } from '@storybook/react-vite';
import VideoLesson from './VideoLesson';
import type { VideoLessonProps } from './VideoLesson';
import '../../../styles/global.css';
import '../../../styles/fonts.css';
import '../../../styles/color.css';
import videoFile from '/courses/alphabet/video/ABCD.mp4';

const meta: Meta<VideoLessonProps> = {
  title: 'Layout/VideoLesson',
  component: VideoLesson,
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
    videoSrc: { control: false },
    aboutLesson: { control: 'text' },
    onComplete: { action: 'completed' },
  },
};

export default meta;
type Story = StoryObj<VideoLessonProps>;

export const Default: Story = {
  args: {
    videoSrc: videoFile,
    aboutLesson:
      'Посмотри видео до конца, чтобы узнать, как правильно произносить буквы и какие слова с них начинаются!',
  },
};
