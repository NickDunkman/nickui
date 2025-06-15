export default {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'always',

  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  // ** settings for @trivago/prettier-plugin-sort-imports **
  importOrder: ['^@\\/', '^\\.\\.\\/', '^\\.\\/'],
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
