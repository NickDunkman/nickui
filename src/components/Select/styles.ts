import { tv } from 'tailwind-variants';

const arrowIcons = `after:bg-[url("data:image/svg+xml;utf8,%3Csvg%20viewBox='0%200%2012%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M11.4%207.7C11.6472%208.02962%2011.412%208.5%2011%208.5H1C0.587977%208.5%200.352786%208.02962%200.6%207.7L5.6%201.03333C5.8%200.766667%206.2%200.766667%206.4%201.03333L11.4%207.7Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3Cpath%20d='M11.4%2015.3C11.6472%2014.9704%2011.412%2014.5%2011%2014.5H1C0.587977%2014.5%200.352786%2014.9704%200.6%2015.3L5.6%2021.9667C5.8%2022.2333%206.2%2022.2333%206.4%2021.9667L11.4%2015.3Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3C/svg%3E")]`;

/** tailwind-variants styles for the Select component */
export const selectStyler = tv({
  slots: {
    select: `
      appearance-none
      w-full
      border-2 rounded-sm
      bg-white
      focus:border-blue-800 focus:shadow-[0_0_11px] focus:shadow-blue-300 focus:outline-0 
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-100
    `,
    // Can't add an :after to the <select> for the iconography, so we need
    // additional elements for that
    root: `
      relative after:block
      after:absolute after:top-[50%] after:-translate-y-1/2
      after:bg-cover after:bg-no-repeat
      after:pointer-events-none after:select-none
    `,
  },
  variants: {
    sizer: {
      xs: {
        select: 'text-xs py-1.25 pl-2 pr-6',
        root: `after:w-[6px] after:h-[12px] after:right-2.5 ${arrowIcons}`,
      },
      sm: {
        select: 'text-sm py-1.5 pl-2 pr-7',
        root: `after:w-[6.5px] after:h-[13px] after:right-3 ${arrowIcons}`,
      },
      base: {
        select: 'text-base py-2.5 pl-3.5 pr-9',
        root: `after:w-[9px] after:h-[18px] after:right-3.75 ${arrowIcons}`,
      },
      lg: {
        select: 'text-lg py-3.5 pl-4.5 pr-11',
        root: `after:w-[11.5px] after:h-[23px] after:right-4.5 ${arrowIcons}`,
      },
      xl: {
        select: 'text-xl py-5.5 pl-5.5 pr-12.5',
        root: `after:w-[14px] after:h-[28px] after:right-5 ${arrowIcons}`,
      },
    },
    hasError: {
      true: {
        select: 'border-rose-800 focus:border-rose-800 focus:shadow-rose-300',
      },
    },
    // Unfortunately, can't set style on the :after element using a sibling
    // selector when the <select> is disabled, so we need an extra variant for
    // this.
    isDisabled: {
      true: {
        root: 'after:opacity-40',
      },
    },
  },
  defaultVariants: {
    sizer: 'base',
    hasError: false,
    isDisabled: false,
  },
});
