import Welcome from './Welcome';

export default {
  title: 'Layout/Welcome',
  component: Welcome,
  parameters: {
    layout: 'fullscreen', // чтобы секция выглядела как на странице
  },
};

export const Default = {
  render: () => <Welcome />,
};
