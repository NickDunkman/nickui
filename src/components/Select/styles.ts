import { tv } from 'tailwind-variants';

import { Sizer } from '@/constants';

const arrowIcons = {
  sm: `after:bg-[url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox='0%200%207%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M3.85296%200.645978C3.75915%200.551937%203.63178%200.499084%203.49896%200.499084C3.36613%200.499084%203.23876%200.551937%203.14496%200.645978L0.144956%203.64598C0.00157937%203.78899%20-0.0413739%204.00437%200.0361719%204.19144C0.113718%204.37852%200.296447%204.50034%200.498956%204.49998H6.49896C6.70147%204.50034%206.88419%204.37852%206.96174%204.19144C7.03929%204.00437%206.99633%203.78899%206.85296%203.64598L3.85296%200.645978Z'%20fill='black'%20/%3E%3Cpath%20d='M6.49896%208.5H0.498956C0.296447%208.49964%200.113718%208.62146%200.0361719%208.80854C-0.0413739%208.99561%200.00157937%209.21099%200.144956%209.354L3.14496%2012.354C3.23876%2012.448%203.36613%2012.5009%203.49896%2012.5009C3.63178%2012.5009%203.75915%2012.448%203.85296%2012.354L6.85296%209.354C6.99633%209.21099%207.03929%208.99561%206.96174%208.80854C6.88419%208.62146%206.70147%208.49964%206.49896%208.5Z'%20fill='black'%20/%3E%3C/svg%3E")]`,
  md: `after:bg-[url("data:image/svg+xml;utf8,%3Csvg%20viewBox='0%200%2012%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M0.853554%205.14645C0.538571%205.46143%200.761654%206%201.20711%206H10.7929C11.2383%206%2011.4614%205.46143%2011.1464%205.14645L6.35355%200.353553C6.15829%200.158291%205.84171%200.158291%205.64645%200.353553L0.853554%205.14645Z'%20fill='black'%20/%3E%3Cpath%20d='M5.64645%2015.6464C5.84171%2015.8417%206.15829%2015.8417%206.35355%2015.6464L11.1464%2010.8536C11.4614%2010.5386%2011.2383%2010%2010.7929%2010H1.20711C0.761654%2010%200.538571%2010.5386%200.853553%2010.8536L5.64645%2015.6464Z'%20fill='black'%20/%3E%3C/svg%3E")]`,
  lg: `after:bg-[url("data:image/svg+xml;utf8,%3Csvg%20viewBox='0%200%2012%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M11.4%207.7C11.6472%208.02962%2011.412%208.5%2011%208.5H1C0.587977%208.5%200.352786%208.02962%200.6%207.7L5.6%201.03333C5.8%200.766667%206.2%200.766667%206.4%201.03333L11.4%207.7Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3Cpath%20d='M11.4%2015.3C11.6472%2014.9704%2011.412%2014.5%2011%2014.5H1C0.587977%2014.5%200.352786%2014.9704%200.6%2015.3L5.6%2021.9667C5.8%2022.2333%206.2%2022.2333%206.4%2021.9667L11.4%2015.3Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3C/svg%3E")]`,
};

/** tailwind-variants styles for the Select component */
export const styles = tv({
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
      [Sizer.small]: {
        select: 'text-sm py-1.5 pl-2 pr-8',
        root: `after:w-[7px] after:h-[13px] after:right-3 ${arrowIcons.sm}`,
      },
      [Sizer.base]: {
        select: 'text-base py-2.5 pl-3.5 pr-10',
        root: `after:w-[12px] after:h-[16px] after:right-3.75 ${arrowIcons.md}`,
      },
      [Sizer.large]: {
        select: 'text-lg py-3.5 pl-4.5 pr-12',
        root: `after:w-[12px] after:h-[23px] after:right-4.5 ${arrowIcons.lg}`,
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
    sizer: Sizer.base,
    hasError: false,
    isDisabled: false,
  },
});
