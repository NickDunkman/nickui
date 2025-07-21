import { tv } from 'tailwind-variants';

// Note: classNames must be static strings for Tailwind to pick them up
const checkedBg = `peer-checked:bg-[url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%2010'%3E%3Cpolygon%20fill='%23fff'%20fill-opacity='1'%20points='3.5%205.45%201.5%203.45%200%204.95%203.5%208.45%2010%201.95%208.5%20.45'/%3E%3C/svg%3E%0A")]`;

/** tailwind-variants styles for the Checkbox component */
export const checkboxStyler = tv({
  slots: {
    root: '',
    labelWithOffset: '',
    input: 'peer opacity-0 absolute -z-1',
    indicator: `
      relative
      border-2 border-black rounded-[3px]
      bg-white peer-checked:bg-black 
      pointer-events-none select-none
      ${checkedBg} bg-no-repeat
    `,
  },
  variants: {
    sizer: {
      xs: {
        indicator: 'size-3.5 top-0.25 bg-size-[8px]',
      },
      sm: {
        indicator: 'size-4 top-0.5 bg-size-[10px]',
      },
      base: {
        indicator: 'size-5 top-[2.5px] bg-size-[12px]',
      },
      lg: {
        indicator: 'size-5.5 top-[3.5px] bg-size-[14px]',
      },
      xl: {
        indicator: 'size-6 top-0.75 bg-size-[16px]',
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
