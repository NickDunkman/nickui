import * as React from 'react';

import { Money } from '@/components/Money';
import { FieldableFormControlProps } from '@/types';

export interface NumericProps
  extends FieldableFormControlProps<
    string | number,
    Omit<React.ComponentProps<'input'>, 'type' | 'placeholder'>
  > {
  /**
   * The character separating the whole part from the decimal part, typically
   * "."
   */
  decimalPoint?: string;
  /**
   * The character to use to separate every three digits in the whole part,
   * typically ","
   */
  thousandsSeparator?: string;
  /**
   * Controls how many decimal places the user is allowed to add, and how many
   * will always be included on the value emitted via the onChange handler.
   * Defaults to 0.
   */
  decimalPlaces?:
    | number
    | {
        min: number;
        max: number;
      };
  /** Set to `true` to allow the user to enter negative values */
  allowNegatives?: boolean;
}

/**
 * A form control that allows users to enter a numeric value
 * @param props {@link NumericProps}
 */
export function Numeric({
  decimalPlaces = { min: 0, max: Infinity },
  ...otherProps
}: NumericProps) {
  // Number is just Money w/ no currencySymbol ;)
  return (
    <Money
      {...otherProps}
      decimalPlaces={decimalPlaces}
      currencySymbol=""
      data-nickui-component="Numeric"
    />
  );
}
