import type { CourseData } from '@app-types/lesson';
import Tort from '@assets/pictures/tort-48x64.png';

export const alphabetCourseData: CourseData = [
  {
    id: 1,
    title: 'Урок 1',
    image: Tort,
    content: 'A, B, C, D',
    steps: [
      {
        type: 'video',
        src: '/courses/alphabet/video/ABCD.mp4',
        aboutLesson: '...',
      },
      {
        type: 'exercise',
        src: 'https://wordwall.net/ru/embed/e1e2d86678774a9d9901f63a48cf0341?themeId=1&templateId=3&fontStackId=0&autoplay=1',
        aboutLesson: '...',
      },
      {
        type: 'exercise',
        src: 'https://wordwall.net/embed/c6468d02ab074b1495a61854f33efc23?themeId=1&templateId=82&fontStackId=0',
        aboutLesson: '...',
      },
      {
        type: 'exercise',
        src: 'https://wordwall.net/embed/849658d2d957425a983b5c6a69682481?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: '...',
      },
      {
        type: 'exercise',
        src: 'https://wordwall.net/embed/e5270e2e83974a6eb37dbae6f804ccf3?themeId=45&templateId=3&fontStackId=21',
        aboutLesson: '...',
      },
      {
        type: 'exercise',
        src: 'https://wordwall.net/embed/e5270e2e83974a6eb37dbae6f804ccf3?themeId=45&templateId=3&fontStackId=21',
        aboutLesson: '...',
      },
      {
        type: 'exercise',
        src: 'https://wordwall.net/embed/f7d304de7d15483f97ebac7f1c791c2e?themeId=62&templateId=70&fontStackId=21',
        aboutLesson: '...',
      },
      {
        type: 'exercise',
        src: 'https://wordwall.net/embed/9e3656d6420b4d9d81bee661b61c1bb6?themeId=1&templateId=38&fontStackId=0',
        aboutLesson: '...',
      },
    ],
  },
  {
    id: 2,
    title: 'Урок 2',
    image: Tort,
    content: 'Продолжаем изучать алфавит',
  },
  {
    id: 3,
    title: 'Урок 3',
    image: Tort,
    content: 'Веселые звуки',
  },
  {
    id: 4,
    title: 'Урок 4',
    image: Tort,
    content: 'Магия букв',
  },
  {
    id: 5,
    title: 'Урок 5',
    image: Tort,
    content: 'Путешествие продолжается',
  },
  {
    id: 6,
    title: 'Урок 6',
    image: Tort,
    content: 'Почти у цели',
  },
  {
    id: 7,
    title: 'Урок 7',
    image: Tort,
    content: 'Мы это сделали!',
  },
];

// export default alphabetCourseData;
