import AboutTeacher from './AboutTeacher';

export default {
  title: 'Layout/AboutTeacher',
  component: AboutTeacher,
  parameters: {
    layout: 'fullscreen', // чтобы секция выглядела как на странице
  },
};

export const Default = {
  render: () => <AboutTeacher />,
};
