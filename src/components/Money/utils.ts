import memoize from 'just-memoize';

import { MoneyFormatType, MoneyValueType } from './types';

/**
 * Given a raw value, converts to a "form" (number as a string)
 * representation that abides by any of the formatting configuration options
 * that wouldn't prevent the string from being a parsable Number() -- e.g.
 * `minDecimalPlaces` is followed, but adding `thousandsSeparators` or
 * customizing the decimalPoint is not.
 *
 * If the raw value provided is not a valid representation of a number (such
 * as by having multiple decimal points, or by being an empty string), returns
 * an empty string.
 *
 * To fully format (but not have a guaranteed parsable Number()), use the
 * formatValue function.
 */
export function parseFormValue(
  rawValue: string | number | undefined,
  format: MoneyFormatType,
) {
  let stringValue = rawValue?.toString().replace(/[^0-9.-]/g, '') || '';

  // Drop the negative sign if it's the only character (that ain't a number)
  if (!format.allowWorkingNegativeSign && stringValue === '-') {
    return '';
  }

  // If negatives are allowed, there should only be one negative sign at the
  // front of the string
  if (
    stringValue.indexOf('-') > 0 ||
    substringCount(stringValue, '-') > (format.allowNegatives ? 1 : 0)
  ) {
    return '';
  }

  // Reject if there are more than one decimal points
  if (substringCount(stringValue, '.') > 1) {
    return '';
  }

  // There should not be leading zeros on the front of the whole part (unless
  // the whole part is a single zero)
  const matches = stringValue.match(/^(-?)0+(([1-9][0-9]*)|0)(\.[0-9]*)?$/);
  if (matches) {
    stringValue = (matches[1] || '') + (matches[2] || '') + (matches[4] || '');
  }

  // Pad with a zero when the first character is the decimal point
  if (stringValue[0] === '.') {
    stringValue = `0${stringValue}`;
  } else if (stringValue.slice(0, 2) === '-.') {
    stringValue = `-0${stringValue.slice(1)}`;
  }

  // Drop the decimal point when it's the last character
  if (
    !format?.allowWorkingDecimalPoint &&
    stringValue[stringValue.length - 1] === '.'
  ) {
    stringValue = stringValue.slice(0, -1);
  }

  // Ensure minimum decimal places
  if (stringValue && format.minDecimalPlaces > 0) {
    let [wholePart, decimalPart] = stringValue.split('.');
    stringValue = `${wholePart === '-' ? '-0' : wholePart || '0'}.${(decimalPart || '').padEnd(format.minDecimalPlaces, '0')}`;
  }

  // Ensure maximum decimal places
  if (stringValue && format.maxDecimalPlaces === 0) {
    let [wholePart] = stringValue.split('.');
    stringValue = wholePart;
  } else {
    let [wholePart, decimalPart] = stringValue.split('.');
    if (decimalPart && decimalPart.length > format.maxDecimalPlaces) {
      [wholePart, decimalPart] = (
        Math.round(
          Number(`${wholePart}.${decimalPart}`) *
            Math.pow(10, format.maxDecimalPlaces),
        ) / Math.pow(10, format.maxDecimalPlaces)
      )
        .toString()
        .split('.');
      stringValue = `${wholePart === '-' ? '-0' : wholePart}.${(decimalPart || '').padEnd(format.maxDecimalPlaces, '0')}`;
    }
  }

  // Negative zero is zero
  if (!format.allowWorkingNegativeSign && stringValue.match(/^-0(\.(0+)?)?$/)) {
    stringValue = stringValue.slice(1);
  }

  return stringValue;
}

/**
 * Converts a raw value to a fully formatted monetary string based on the
 * provided formatting configuration, for display to the user.
 *
 * This string is intended to be presented to the user (such as in the
 * Money component’s interactive <input>. It is not necessarily parsable
 * using Number(), since Number() parsing only works with standard number
 * formatting (such as by having "." as the decimal point). To convert to a
 * parseable Number() string, use the parseFormValue() function.
 */
export function formatValue(
  rawValue: string | number | undefined,
  format: MoneyFormatType,
) {
  const stringValue = parseFormValue(rawValue, format);

  if (stringValue === '') {
    return '';
  }

  const [wholePart, decimalPart] = stringValue.split('.');
  const hasDecimalPoint = stringValue.indexOf('.') !== -1;

  // Chunk the whole part into thousands places. Doing it this way instead of
  // Number.toLocaleString() so that it works even with very large numbers.
  const chunkSize = 3;
  const numChunks = Math.ceil(wholePart.length / chunkSize);
  const firstChunkSize = wholePart.length % chunkSize || chunkSize;
  const chunks = [wholePart.substring(0, firstChunkSize)];
  for (var i = 0; i < numChunks - 1; i++) {
    chunks.push(
      wholePart.substring(
        firstChunkSize + i * chunkSize,
        firstChunkSize + (i + 1) * chunkSize,
      ),
    );
  }

  const chunkedWholePart = chunks.join(format.thousandsSeparator);

  return `${chunkedWholePart}${hasDecimalPoint ? format.decimalPoint : ''}${decimalPart || ''}`;
}

/**
 * Given a monetary string that is formatted (such as the value provided from
 * the Money component’s interactive <input>, strips the custom formatting
 * so that it can then be parsed using parseFormValue().
 */
export function deformatValue(formattedValue: string, format: MoneyFormatType) {
  return formattedValue
    .replaceAll(format.thousandsSeparator, '')
    .replace(format.decimalPoint, '.');
}

/**
 * Given a value that may have formatting, return the appropriate selection
 * after removing the thousands separators.
 */
export function getDeformattedSelection(
  value: MoneyValueType,
  previousSelectionStart: number,
  previousSelectionEnd: number,
): [newSelectionStart: number, newSelectionEnd: number] {
  return [
    // Move the `start` to the left based on how many preceeding thousands
    // separators there were
    previousSelectionStart -
      substringCount(
        value.workingValue.slice(0, previousSelectionStart),
        value.format.thousandsSeparator,
      ) *
        value.format.thousandsSeparator.length,
    // Move the `end` to the left based on how many preceeding thousands
    // separators there were
    previousSelectionEnd -
      substringCount(
        value.workingValue.slice(0, previousSelectionEnd),
        value.format.thousandsSeparator,
      ) *
        value.format.thousandsSeparator.length,
  ];
}

/** Returns the number of times some substring occurs in a string */
function substringCount(string: string, substring: string) {
  return string.split(substring).length - 1;
}

/**
 * A function that creates the `format` in a guaranteed-memoized way
 * (React.useMemo does not guarantee absolute memoization)
 */
export const createFormatConfig = memoize(
  (
    currencySymbol: MoneyFormatType['currencySymbol'],
    decimalPoint: MoneyFormatType['decimalPoint'],
    decimalPlaces: MoneyFormatType['minDecimalPlaces'],
    thousandsSeparator: MoneyFormatType['thousandsSeparator'],
    allowNegatives: MoneyFormatType['allowNegatives'],
  ) => ({
    currencySymbol,
    decimalPoint,
    minDecimalPlaces: decimalPlaces,
    maxDecimalPlaces: decimalPlaces,
    thousandsSeparator,
    allowNegatives,
  }),
);
