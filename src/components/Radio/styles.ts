import { tv } from 'tailwind-variants';

/** tailwind-variants styles for the Radio component */
export const radioStyler = tv({
  slots: {
    root: '',
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
      xs: {
        indicator: 'size-3.5 top-0.25 peer-checked:after:size-1.25',
      },
      sm: {
        indicator: 'size-4 top-[2.5px] peer-checked:after:size-1.5',
      },
      base: {
        indicator: 'size-4.75 top-0.75 peer-checked:after:size-1.75',
      },
      lg: {
        indicator: 'size-5.5 top-[3.5px] peer-checked:after:size-2',
      },
      xl: {
        indicator: 'size-6 top-0.75 peer-checked:after:size-2.25',
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
          border-blue-800 shadow-[0_0_11px] shadow-blue-300 outline-0 
          peer-checked:bg-blue-800
        `,
      },
    },
  },
  defaultVariants: {
    sizer: 'base',
    isDisabled: false,
    isKeyboardFocused: false,
  },
});
