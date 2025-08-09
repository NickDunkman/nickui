import * as React from 'react';

import { FieldableProps } from '@/types';

export interface MoneyInputProps
  extends Omit<React.ComponentProps<'input'>, 'type' | 'placeholder'> {
  /** Called when the value of the Text changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Sets the value of the Money when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: string | number;
  /** Sets the value of the Money when using it as an uncontrolled component */
  defaultValue?: string | number;
}

/** These props are used to parse & format the <Money> component's value */
export interface MoneyFormatProps {
  /** The currency symbol shown at the front of the input, typically "$" */
  currencySymbol?: React.ReactNode;
  /**
   * The character to use to separate the whole part from the decimal part,
   * typically "."
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
  decimalPlaces?: number;
  /** Set to `true` if you want to allow the user to enter negative values */
  allowNegatives?: boolean;
}

/** The full spec of props for the <Money> component */
export interface MoneyProps
  extends Omit<React.ComponentProps<'input'>, 'type' | 'placeholder'>,
    FieldableProps,
    MoneyFormatProps {
  /** Called when the value of the Text changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Sets the value of the Money when using it as a
   * [controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
   */
  value?: string | number;
  /** Sets the value of the Money when using it as an uncontrolled component */
  defaultValue?: string | number;
}

/**
 * The formatting configuration used internally in the Money component
 * system.
 */
export interface MoneyFormatType {
  decimalPoint: NonNullable<MoneyFormatProps['decimalPoint']>;
  minDecimalPlaces: NonNullable<MoneyFormatProps['decimalPlaces']>;
  maxDecimalPlaces: NonNullable<MoneyFormatProps['decimalPlaces']>;
  thousandsSeparator: NonNullable<MoneyFormatProps['decimalPoint']>;
  allowNegatives: NonNullable<MoneyFormatProps['allowNegatives']>;
  currencySymbol: NonNullable<MoneyFormatProps['currencySymbol']>;
  allowTrailingDecimalPoint?: boolean;
}

export type MoneyValueType = {
  /**
   * Starts at 1; each new value added to the history gets an incremented
   * version
   */
  version: number;
  /**
   * `numerishValue` is the version of the value that can be parsed as a
   * Number(): it has no thousands separators and the decimalPoint is always
   * ".". This is the version of the value that is emitted via the Money
   * component’s onChange handler back to the parent, as it is generally the
   * most useful programmatically.
   */
  numerishValue: string;
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
