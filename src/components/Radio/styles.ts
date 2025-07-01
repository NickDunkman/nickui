import { tv } from 'tailwind-variants';

import { FieldSizer } from '@/constants';

/** tailwind-variants styles for the Radio component */
export const styles = tv({
  slots: {
    input: 'peer opacity-0 absolute -z-1',
    indicator: `
      flex justify-center items-center
      bg-white relative
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
        indicator: 'size-3.5 top-0.25 peer-checked:after:size-1.5',
      },
      [FieldSizer.medium]: {
        indicator: 'size-4 top-0.75 peer-checked:after:size-1.5',
      },
      [FieldSizer.large]: {
        indicator: 'size-5 top-0.75 peer-checked:after:size-2',
      },
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
  },
});
