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
  //  This isn’t necessary since deeperSortSetup() will by default always keep
  // "Docs" at the top of a component's stories, but leaving this as a
  // reference ...
  //[
  //  '*',
  //  // the mdx doc named "Docs" should always precede other mdx docs
  //  ['Docs', 'Some other thing', '*'],
  //],
  'Field layouts',
  '*',
]);
