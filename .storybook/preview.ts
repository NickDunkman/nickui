import type { Preview } from '@storybook/react-vite';

import '../src/style.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // Report all accessibility issues as errors when running Vitest
    a11y: {
      test: 'error',
    },
  },
};

export default preview;
