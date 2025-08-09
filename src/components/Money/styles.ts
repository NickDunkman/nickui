import { tv } from 'tailwind-variants';

/**
 * tailwind-variants styles for the Money component. Meant to be used in
 * conjuction with the Text component styler
 */
export const moneyStyler = tv({
  slots: {
    visibleInputsContainer: 'relative',
    placeholderInput: `
      select-none pointer-events-none
      text-gray-400 disabled:text-gray-400 !border-transparent
    `,
    workingInput: 'peer absolute top-0 right-0 left-0 !bg-transparent',
    hiddenInput: 'hidden',
    currencySymbol: `
      absolute top-0 bottom-0 left-0.5
      flex items-center  
      select-none pointer-events-none
      text-black
      peer-placeholder-shown:text-gray-400 
      peer-disabled:text-gray-400 
      font-medium
    `,
  },
  variants: {
    sizer: {
      xs: {
        currencySymbol: 'text-xs pl-2 pr-1',
      },
      sm: {
        currencySymbol: 'text-sm pl-2.25 pr-1.5',
      },
      base: {
        currencySymbol: 'text-base pl-3 pr-2',
      },
      lg: {
        currencySymbol: 'text-lg pl-4 pr-2',
      },
      xl: {
        currencySymbol: 'text-xl pl-4.5 pr-2.5',
      },
    },
    // Prevent text from appearing to jump to the right when the currency symbol
    // padding is applied
    hasSpacingApplied: {
      false: {
        placeholderInput: 'text-transparent disabled:text-transparent',
        workingInput: 'text-transparent disabled:text-transparent',
        currencySymbol: 'text-transparent',
      },
    },
  },
  defaultVariants: {
    sizer: 'base',
    hasSpacingApplied: true,
  },
});
