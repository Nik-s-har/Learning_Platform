import Alphabet from './Alphabet';

export default {
  title: 'Layout/Alphabet',
  component: Alphabet,
  parameters: {
    layout: 'fullscreen', // чтобы секция выглядела как на странице
  },
};

export const Default = {
  render: () => <Alphabet />,
};
