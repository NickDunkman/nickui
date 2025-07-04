import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the CheckedField component */
export const styles = tv({
  slots: {
    root: 'flex relative cursor-pointer',
    control: 'absolute top-0',
    labelese: 'flex flex-col',
    label: '',
    explainer: 'text-gray-500',
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        root: 'gap-2 text-xs',
      },
      [FieldSizer.medium]: {
        root: 'gap-2.5 text-sm',
        label: 'text-sm',
        explainer: 'text-xs',
      },
      [FieldSizer.large]: {
        root: 'gap-3 text-base',
        label: 'text-base',
        explainer: 'text-sm',
      },
    },
    isDisabled: {
      true: {
        root: 'cursor-not-allowed',
        label: 'text-gray-400',
        explainer: 'text-gray-300',
      },
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
    isDisabled: false,
  },
});
