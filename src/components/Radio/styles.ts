import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the Radio component */
export const styles = tv({
  slots: {
    root: 'flex relative',
    input: 'peer opacity-0 absolute -z-1',
    label: ' peer-disabled:text-gray-400',
    indicator: `
      inline-flex justify-center items-center absolute left-0
      bg-white
      border-2 border-black rounded-full
      pointer-events-none select-none
      peer-focus:border-indigo-800 peer-focus:shadow-[0_0_11px] peer-focus:shadow-indigo-300 peer-focus:outline-0 
      peer-checked:bg-black
      peer-checked:after:bg-white peer-checked:after:block peer-checked:after:rounded-full
      peer-focus:peer-checked:bg-indigo-800
      peer-disabled:bg-gray-100 peer-disabled:border-gray-300
      peer-disabled:peer-checked:bg-gray-400 peer-disabled:peer-checked:border-gray-400
    `,
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        root: 'gap-2 pl-3.5 text-xs',
        indicator: 'size-3.5 top-0.5 peer-checked:after:size-1.5',
      },
      [FieldSizer.medium]: {
        root: 'gap-2.5 pl-4 text-sm',
        indicator: 'size-4 top-0.75 peer-checked:after:size-1.5',
      },
      [FieldSizer.large]: {
        root: 'gap-3 pl-5 text-md',
        indicator: 'size-5 top-0.75 peer-checked:after:size-2',
      },
    },
    isDisabled: {
      false: '',
      true: {
        root: 'cursor-not-allowed',
      },
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
    isDisabled: false,
  },
});
