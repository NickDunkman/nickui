/** These props are used to parse & format the <Currency> component's value */
export interface CurrencyFormatProps {
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
}

/**
 * The formatting configuration used internally in the Currency component
 * system.
 */
export interface CurrencyFormatType {
  decimalPoint: NonNullable<CurrencyFormatProps['decimalPoint']>;
  minDecimalPlaces: NonNullable<CurrencyFormatProps['decimalPlaces']>;
  maxDecimalPlaces: NonNullable<CurrencyFormatProps['decimalPlaces']>;
  thousandsSeparator: NonNullable<CurrencyFormatProps['decimalPoint']>;
  allowTrailingDecimalPoint?: boolean;
}

export type CurrencyValueType = {
  /**
   * Starts at 1; each new value added to the history gets an incremented
   * version
   */
  version: number;
  /**
   * `numerishValue` is the version of the value that can be parsed as a
   * Number(): it has no thousands separators and the decimalPoint is always
   * ".". This is the version of the value that is emitted via the Currency
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
   * The <Currency> component’s raw `value` prop that was present alongside this
   * value. Can be used downstream to see if it changed from the
   * previousValue.controlledValue
   */
  controlledValue: string | number | undefined;
  /** The formatting config used to parse & format this value */
  format: CurrencyFormatType;
  /**
   * Whenever the a new value is added to the history, a descriptor for what
   * caused the change is set here, so that downstream code can conditionally
   * decide whether to act on changes to the `value`. For example, the
   * <Currency> component does not want to refire a change event when a new
   * controlledValue is passed in.
   */
  source:
    | 'initialValue'
    | 'controlledValue'
    | 'workingValue'
    | 'format'
    | 'increment';
};
