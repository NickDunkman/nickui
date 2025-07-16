import { tv } from 'tailwind-variants';

import { Sizer } from '@/constants';

// Note: classNames must be static strings for Tailwind to pick them up
const checkedBg = `peer-checked:bg-[url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%209'%3E%3Cpolygon%20fill='%23fff'%20fill-opacity='1'%20points='3.5%205.45%201.5%203.45%200%204.95%203.5%208.45%2010%201.95%208.5%20.45'/%3E%3C/svg%3E%0A")]`;

/** tailwind-variants styles for the Checkbox component */
export const styles = tv({
  slots: {
    root: '',
    labelWithOffset: '',
    input: 'peer opacity-0 absolute -z-1',
    indicator: `
      relative
      border-2 border-black rounded-[3px]
      bg-no-repeat bg-center
      pointer-events-none select-none
      peer-checked:bg-black ${checkedBg}
    `,
  },
  variants: {
    sizer: {
      [Sizer.small]: {
        indicator: 'size-3.5 top-0.25 bg-size-[8px_8px] bg-white',
      },
      [Sizer.medium]: {
        indicator: 'size-4 top-0.75 bg-size-[10px_10px] bg-white',
      },
      [Sizer.large]: {
        indicator: 'size-5 top-0.75 bg-size-[13px_13px] bg-white',
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
