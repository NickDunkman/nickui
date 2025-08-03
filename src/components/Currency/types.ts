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
