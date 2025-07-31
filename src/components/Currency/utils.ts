// Returns `true` if a string has multiple occurrences of a substring
function stringHasMultipleSubstring(str: string, substr: string) {
  const firstOccurenceIndex = str.indexOf(substr);

  if (firstOccurenceIndex === -1) {
    return false;
  }

  const secondOccurrenceIndex = str.indexOf(substr, firstOccurenceIndex + 1);

  return secondOccurrenceIndex !== -1;
}

export function parseValue(
  rawValue: string | number | undefined,
  options: {
    decimalPoint: string;
    keepTrailingDecimalPoint?: boolean;
  },
) {
  const regex = new RegExp(`[^0-9${options.decimalPoint}-]`, 'g');

  let stringValue = rawValue?.toString().replace(regex, '') || '';

  // Reject if there is a negative sign not at the front
  if (stringValue.indexOf('-') > 0) {
    return '';
  }

  // Reject if there are more than one decimal points
  if (stringHasMultipleSubstring(stringValue, options.decimalPoint)) {
    return '';
  }

  // Reject if there are more than one negative signs
  if (stringHasMultipleSubstring(stringValue, '-')) {
    return '';
  }

  // Pad with a zero when the first character is the decimal point
  if (stringValue[0] === options.decimalPoint) {
    stringValue = `0${stringValue}`;
  }

  // Drop the decimal point when it's the last character
  if (
    !options.keepTrailingDecimalPoint &&
    stringValue[stringValue.length - 1] === options.decimalPoint
  ) {
    stringValue = stringValue.slice(0, -1);
  }

  return stringValue;
}

export function parseNumericValue(
  rawValue: string | number | undefined,
  decimalPoint: string,
) {
  return (
    Number(parseValue(rawValue, { decimalPoint }).replace(decimalPoint, '.')) ||
    0
  );
}

export function formatValue(
  rawValue: string | number | undefined,
  options: {
    decimalPoint: string;
    thousandsSeparator: string;
    forceFractionalPart?: boolean;
  },
) {
  const stringValue = parseValue(rawValue, {
    decimalPoint: options.decimalPoint,
    keepTrailingDecimalPoint: true,
  });

  if (stringValue === '') {
    return '';
  }

  const [wholePart, fractionalPart] = stringValue.split(options.decimalPoint);

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
  const chunkedWholePart = chunks.join(options.thousandsSeparator);

  if (options.forceFractionalPart) {
    return `${chunkedWholePart}${options.decimalPoint}${(fractionalPart || '').padEnd(2, '0')}`;
  } else if (fractionalPart !== undefined) {
    return `${chunkedWholePart}${options.decimalPoint}${fractionalPart}`;
  } else {
    return chunkedWholePart;
  }
}
