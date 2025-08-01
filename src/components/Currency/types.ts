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
   * The minimum number of decimal places to include on the value, typically 2
   */
  minDecimalPlaces?: number;
  /**
   * The maximum number of decimal places to include on the value, typically 2
   */
  maxDecimalPlaces?: number;
  /** Option to exclude the decimal places when the decimal part is zero */
  excludeDecimalOnWholeNumber?: boolean;
}

/**
 * A version of CurrencyFormatProps where all properties are required. They’re
 * optional in CurrencyFormatProps b/c the component provides default values.
 */
export type CurrencyFormatType = Required<CurrencyFormatProps> & {
  allowTrailingDecimalPoint?: boolean;
};
