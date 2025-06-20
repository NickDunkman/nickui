import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

// Note: classNames must be static strings for Tailwind to pick them up
const checkedBg = `peer-checked:bg-[url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%209'%3E%3Cpolygon%20fill='%23fff'%20fill-opacity='1'%20points='3.5%205.45%201.5%203.45%200%204.95%203.5%208.45%2010%201.95%208.5%20.45'/%3E%3C/svg%3E%0A")]`;

/** tailwind-variants styles for the Checkbox component */
export const styles = tv({
  slots: {
    root: 'flex relative',
    input: 'peer opacity-0 absolute -z-1',
    label: ' peer-disabled:text-gray-400',
    indicator: `
      inline-block absolute left-0
      bg-white
      border-2 border-black rounded-[3px]
      bg-no-repeat bg-center
      pointer-events-none select-none
      peer-focus:border-indigo-800 peer-focus:shadow-[0_0_11px] peer-focus:shadow-indigo-300 peer-focus:outline-0 
      peer-checked:bg-black ${checkedBg}
      peer-focus:peer-checked:bg-indigo-800
      peer-disabled:bg-gray-100 peer-disabled:border-gray-300
      peer-disabled:peer-checked:bg-gray-400 peer-disabled:peer-checked:border-gray-400
    `,
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        root: 'gap-2 pl-3.5 text-xs',
        indicator: 'size-3.5 top-0.25 bg-size-[8px_8px]',
      },
      [FieldSizer.medium]: {
        root: 'gap-2.5 pl-4 text-sm',
        indicator: 'size-4 top-0.75 bg-size-[10px_10px]',
      },
      [FieldSizer.large]: {
        root: 'gap-3 pl-5 text-md',
        indicator: 'size-5 top-0.75 bg-size-[13px_13px]',
      },
    },
    isDisabled: {
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
