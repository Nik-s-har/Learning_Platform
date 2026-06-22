export type LessonStepData = {
  title: string;
  type: 'video' | 'exercise';
  src: string;
  aboutLesson: string;
};

export interface LessonData {
  id: number;
  title: string;
  content: string;
  image: string;
  steps?: LessonStepData[];
}

export type CourseData = LessonData[];

export type LessonStatus = 'lock' | 'unlock' | 'done';
