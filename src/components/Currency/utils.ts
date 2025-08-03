import { CurrencyFormatType } from './types';

/**
 * Given a raw value, converts to a "numerish" (number as a string)
 * representation that abides by any of the formatting configuration options
 * that wouldn't prevent the string from being a parsable Number() -- e.g.
 * `minDecimalPoints` is followed, but adding `thousandsSeparators` is not.
 *
 * If the raw value provided is not a valid representation of a number (such
 * as by having multiple decimal points, or by being an empty string), returns
 * an empty string.
 *
 * To fully format (but not have a guaranteed parsable Number()), use the
 * formatValue function.
 */
export function parseNumerishValue(
  rawValue: string | number | undefined,
  format: CurrencyFormatType,
) {
  let stringValue = rawValue?.toString().replace(/[^0-9.-]/g, '') || '';

  // Reject if there is a negative sign not at the front
  if (
    stringValue.indexOf('-') > 0 ||
    stringHasMultipleSubstring(stringValue, '-')
  ) {
    return '';
  }

  // Reject if there are more than one decimal points
  if (stringHasMultipleSubstring(stringValue, '.')) {
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
    !format?.allowTrailingDecimalPoint &&
    stringValue[stringValue.length - 1] === '.'
  ) {
    stringValue = stringValue.slice(0, -1);
  }

  // Ensure minimum decimal places
  if (stringValue && format.minDecimalPlaces > 0) {
    let [wholePart, decimalPart] = stringValue.split('.');
    stringValue = `${wholePart || '0'}.${(decimalPart || '').padEnd(format.minDecimalPlaces, '0')}`;
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
      stringValue = `${wholePart}.${(decimalPart || '').padEnd(format.maxDecimalPlaces, '0')}`;
    }
  }

  return stringValue;
}

/**
 * Converts a raw value to a fully formatted currency based on the provided
 * formatting configuration, for display to the user.
 *
 * This string is intended to be presented to the user (such as in the
 * Currency component’s interactive <input>. It is not necessarily parsable
 * using Number(), since Number() parsing only works with standard number
 * formatting (such as by having "." as the decimal point). To convert to a
 * parseable Number() string, use the parseNumerishValue() function.
 */
export function formatValue(
  rawValue: string | number | undefined,
  format: CurrencyFormatType,
) {
  const stringValue = parseNumerishValue(rawValue, format);

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
 * Given a currency string that is formatted (such as the value provided from
 * the Currency component’s interactive <input>, strips the custom formatting
 * so that it can then be parsed using parseNumerishValue().
 */
export function deformatValue(
  formattedValue: string,
  format: CurrencyFormatType,
) {
  return formattedValue
    .replaceAll(format.thousandsSeparator, '')
    .replace(format.decimalPoint, '.');
}

/** Returns `true` if a string has multiple occurrences of a substring */
function stringHasMultipleSubstring(str: string, substr: string) {
  const firstOccurenceIndex = str.indexOf(substr);

  if (firstOccurenceIndex === -1) {
    return false;
  }

  const secondOccurrenceIndex = str.indexOf(substr, firstOccurenceIndex + 1);

  return secondOccurrenceIndex !== -1;
}
