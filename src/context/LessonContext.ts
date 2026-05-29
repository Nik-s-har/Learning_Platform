import { createContext } from 'react';
import type { CourseData } from '@app-types/lesson';

const LessonContext = createContext<CourseData | null>(null);

export default LessonContext;
