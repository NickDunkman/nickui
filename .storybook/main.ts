import type { StorybookConfig } from '@storybook/react-vite';
import deeperSortSetup from 'storybook-deeper-sort';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => ({
    ...config,
    plugins: [...(config.plugins || []), tsconfigPaths()],
  }),
  staticDirs: ['./assets'],
};
export default config;

deeperSortSetup([
  'About this project',
  'Notices',
  'Form controls',
  [
    '*',
    // the mdx doc named "Docs" should always precede other mdx docs
    [
      // "Docs" should always precede other mdx files
      'Docs',
      // Then the "field layouts" when they exist
      'Field Layout',
      'Fieldset Layout',
      'Checked Field layout',
      // Then the "control states" when they exist
      'Empty',
      'Unchecked',
      'Controlled',
      'Uncontrolled',
      'Enabled',
      'Disabled',
      'Disabled Checked',
      'Disabled Unchecked',
      // Then the "flavors" when they exist
      'Neutral',
      'Positive',
      'Caution',
      'Negative',
      'Secondary Neutral',
      'Secondary Positive',
      'Secondary Caution',
      'Secondary Negative',
      // Then the "sizers" when they exist
      'Xs',
      'Sm',
      'Base',
      'Lg',
      'Xl',
      'Responsive',
      // Then anything else, in alphabetical order
      '*',
    ],
  ],
  'Field layouts',
  '*',
]);
