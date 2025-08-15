import * as React from 'react';

import { FieldableFormControlProps } from '@/types';

export interface MoneyProps
  extends FieldableFormControlProps<
    string | number,
    Omit<React.ComponentProps<'input'>, 'type' | 'placeholder'>
  > {
  /** The currency symbol shown at the front of the input, typically "$" */
  currencySymbol?: React.ReactNode;
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
   * Typically 2.
   */
  decimalPlaces?:
    | number
    | {
        min: number;
        max: number;
      };
  /** Set to `true` to allow the user to enter negative values */
  allowNegatives?: boolean;

  /** docs-specific options. Not meant to be used in prod! */
  docsMeta?: {
    /** Set to `true` to show all 3 inputs */
    spread?: boolean;
  };
}

/**
 * The formatting configuration used internally in the Money component
 * system.
 */
export interface MoneyFormatType {
  /** The currency symbol shown at the front of the input, typically "$" */
  currencySymbol: NonNullable<MoneyProps['currencySymbol']>;
  /**
   * The character to use to separate the whole part from the decimal part,
   * typically "."
   */
  decimalPoint: NonNullable<MoneyProps['decimalPoint']>;
  /**
   * The character to use to separate every three digits in the whole part,
   * typically ","
   */
  thousandsSeparator: NonNullable<MoneyProps['decimalPoint']>;
  /**
   * Constraints for the number of decimal places.
   * - The placeholder input will hint that the max places are available
   * - the working input will prevent input past the max
   * - the emitted value via onChange will always include the min places
   */
  decimalPlaces: {
    min: number;
    max: number;
  };
  /** Set to `true` if you want to allow the user to enter negative values */
  allowNegatives: NonNullable<MoneyProps['allowNegatives']>;
  /**
   * Set to `true` if you want to allow a decimal point as the user is
   * "working" towards typing the full number. For example, usually the
   * parsing/formatting utilities will strip off trailing decimal points
   * ("12." -> "12"), but the working <input> needs to allow that case as the
   * user types
   *
   * This option is effectively ignored unless `maxDecimalPlaces` > 0, since
   * otherwise the user can’t add the decimal point.
   */
  allowWorkingDecimalPoint?: boolean;
  /**
   * Set to `true` if you want to allow a negative sign as the user is "working"
   * towards a full number. For example, usually the parsing/formatting
   * utilities will disallow a lone negative sign ("-" -> ""), and strip the
   * negative sign off of negative zero ("-0.00" -> "0.00"). But the working
   * <input> needs to allow those cases as the user types.
   *
   * This option is effectively ignored unless `allowNegatives` is `true`, since
   * otherwise the user can’t type a negative sign.
   */
  allowWorkingNegativeSign?: boolean;
}

export type MoneyValueType = {
  /**
   * Starts at 1; each new value added to the history gets an incremented
   * version
   */
  version: number;
  /**
   * `formValue` is the version of the value that can be parsed as a
   * Number(): it has no thousands separators and the decimalPoint is always
   * ".". This is the version of the value that is emitted via the Money
   * component’s onChange handler back to the parent, as it is generally the
   * most useful programmatically.
   */
  formValue: string;
  /**
   * `workingValue` is the value of the <input> that the user is interacting
   * with. It’s initially set to the formatted version of `value` (e.g. with
   * thousands separators), and then stays in sync with what the user is typing.
   * For example, it can have the decimal prefix at the end of the string.
   */
  workingValue: string;
  /**
   * `placeholderValue` is the same as `workingValue`, except it abides the
   * minimum and maximum decimal places, so the user can see the hint about
   * decimal places in the background.
   */
  placeholderValue: string;
  /**
   * The <Money> component’s raw `value` prop that was present alongside this
   * value. Can be used downstream to see if it changed from the
   * previousValue.controlledValue
   */
  controlledValue: string | number | undefined;
  /** The formatting config used to parse & format this value */
  format: MoneyFormatType;
  /**
   * Whenever the a new value is added to the history, a descriptor for what
   * caused the change is set here, so that downstream code can conditionally
   * decide whether to act on changes to the `value`. For example, the
   * <Money> component does not want to refire a change event when a new
   * controlledValue is passed in.
   */
  source:
    | 'initialValue'
    | 'controlledValue'
    | 'workingValue'
    | 'format'
    | 'increment';
};
