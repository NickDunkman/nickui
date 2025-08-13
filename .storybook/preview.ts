import type { Preview } from '@storybook/react-vite';

import '../src/style.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) => globalThis.deeperSort(a, b),
    },
    docs: {
      source: {
        transform: async (source: string) => {
          let transformed = source;

          // Storybook uses the eventual component names for these in <Source>
          // blocks -- convert them back
          transformed = transformed.replace(
            /<(\/)?Aside(Heading|Paragraph)>/g,
            '<$1Aside.$2>',
          );

          // sizer arrays should always be short enough to collapse to a single
          // line
          const matches = transformed.match(
            /([\s\S]*\ssizer={\[)(\n\s*)([^\]]*)(\n\s*)(\]}[\s\S]*)/,
          );
          if (matches) {
            transformed = `${matches[1]}${matches[3].replace(/\s+/g, ' ')}${matches[5]}`;
          }

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
