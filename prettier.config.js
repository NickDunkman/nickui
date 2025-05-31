export default {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',

  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  // ** settings for @trivago/prettier-plugin-sort-imports **
  importOrder: [
    // third party packages at the top
    '<THIRD_PARTY_MODULES>',
    // TODO: Add custom import paths (components, etc)
  ],
  // add empty lines between the groups defined above
  importOrderSeparation: true,
  // sort individual pieces within each import, like:
  // import { A, B, C } from 'some-module'
  importOrderSortSpecifiers: true,

  // ** settings for prettier-plugin-tailwindcss **
  // automatically sort Tailwind classes passed to the className prop or the
  // clsx() function, according to Tailwind's preferred ordering

  tailwindAttributes: ['className'],
  tailwindFunctions: ['clsx'],

  overrides: [
    {
      files: ['*.js'],
      options: {
        trailingComma: 'es5',
      },
    },
  ],
};
