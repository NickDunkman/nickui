import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the CheckedField component */
export const styles = tv({
  slots: {
    root: 'cursor-pointer',
    contentRoot: 'flex relative',
    control: 'absolute top-0',
    labelese: 'flex flex-col',
    label: '',
    hint: 'text-gray-500',
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        contentRoot: 'gap-2 text-xs',
      },
      [FieldSizer.medium]: {
        contentRoot: 'gap-2.5 text-sm',
        label: 'text-sm',
        hint: 'text-xs',
      },
      [FieldSizer.large]: {
        contentRoot: 'gap-3 text-base',
        label: 'text-base',
        hint: 'text-sm',
      },
    },
    isDisabled: {
      true: {
        root: 'cursor-not-allowed',
        label: 'text-gray-400',
        hint: 'text-gray-300',
      },
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
    isDisabled: false,
  },
});
