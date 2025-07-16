import { tv } from 'tailwind-variants';

import { Sizer } from '@/constants';

/** tailwind-variants styles for the Radio component */
export const styles = tv({
  slots: {
    root: '',
    labelWithOffset: '',
    input: 'peer opacity-0 absolute -z-1',
    indicator: `
      flex justify-center items-center
      bg-white relative
      border-2 border-black rounded-full
      pointer-events-none select-none
      peer-checked:bg-black
      peer-checked:after:bg-white peer-checked:after:block peer-checked:after:rounded-full
    `,
  },
  variants: {
    sizer: {
      [Sizer.small]: {
        indicator: 'size-3.5 top-0.25 peer-checked:after:size-1.5',
      },
      [Sizer.medium]: {
        indicator: 'size-4 top-0.75 peer-checked:after:size-1.5',
      },
      [Sizer.large]: {
        indicator: 'size-5 top-0.75 peer-checked:after:size-2',
      },
    },
    isDisabled: {
      true: {
        indicator: `
          bg-gray-100 border-gray-300
          peer-checked:bg-gray-400 peer-checked:border-gray-400
        `,
      },
    },
    isKeyboardFocused: {
      true: {
        indicator: `
          border-indigo-800 shadow-[0_0_11px] shadow-indigo-300 outline-0 
          peer-checked:bg-indigo-800
        `,
      },
    },
  },
  defaultVariants: {
    sizer: Sizer.small,
    isDisabled: false,
    isKeyboardFocused: false,
  },
});
