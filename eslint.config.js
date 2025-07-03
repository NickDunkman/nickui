import { fixupPluginRules } from '@eslint/compat';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  files: ['./src/**/*.{ts,tsx}'],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: '2020',
    },
  },
  plugins: {
    '@typescript-eslint': fixupPluginRules(typescriptPlugin),
    react: fixupPluginRules(reactPlugin),
    'react-hooks': fixupPluginRules(reactHooksPlugin),
    import: fixupPluginRules(importPlugin),
    'jsx-a11y': fixupPluginRules(jsxA11yPlugin),
    prettier: prettierPlugin,
    storybook: storybookPlugin,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    ...typescriptPlugin.configs.recommended.rules,
    ...reactPlugin.configs.recommended.rules,
    ...reactHooksPlugin.configs.recommended.rules,
    ...importPlugin.configs.recommended.rules,
    ...jsxA11yPlugin.configs.recommended.rules,
    ...prettierConfig.rules,
    ...storybookPlugin.configs.recommended.rules,
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
});
