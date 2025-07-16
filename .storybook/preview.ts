import type { Preview } from '@storybook/react-vite';

import '../src/style.css';

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        transform: async (source: string) => {
          let transformed = source;

          // Remove some event handler props from auto-generated source code
          // show in <Canvas> blocks. They're unhelpful b/c they don't show
          // the code within the function, and they use minified names in
          // the static build
          transformed = transformed.replace(
            /\s+(onChange|onClick)={[^}]*}}/g,
            '',
          );

          // Finally, if any elements are spread across multiple lines but only
          // have 1 or 0 props after the removals above, squish them into
          // a single line.
          transformed = transformed.replace(
            /(<[A-Z][A-Za-z]*)\n(\s*( [^\n]+)\n)?\s*(( \/)?>)/g,
            '$1$3$4',
          );

          return transformed;
        },
      },
    },
    controls: {
      exclude: ['onChange', 'onClick'],
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
