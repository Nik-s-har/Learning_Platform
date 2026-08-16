import type { Preview } from '@storybook/react-vite';

import '../src/styles/color.css';
import '../src/styles/fonts.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: {
        choiceCard: {
          name: 'ChoiceCard 766×430',
          styles: { width: '766px', height: '430px' },
        },
      },
    },
  },
};

export default preview;
