// Returns `true` if a string has multiple occurrences of a substring
export function stringHasMultipleSubstring(str: string, substr: string) {
  const firstOccurenceIndex = str.indexOf(substr);

  if (firstOccurenceIndex === -1) {
    return false;
  }

  const secondOccurrenceIndex = str.indexOf(substr, firstOccurenceIndex + 1);

  return secondOccurrenceIndex !== -1;
}

export function parseValue(
  rawValue: string | number | undefined,
  {
    keepTrailingFractionSeparator = false,
  }: {
    keepTrailingFractionSeparator?: boolean;
  } = {},
) {
  let stringValue = rawValue?.toString().replace(/[^0-9.-]/g, '') || '';

  // Reject if there is a negative sign not at the front
  if (stringValue.indexOf('-') > 0) {
    return '';
  }

  // Reject if there are more than one decimal points
  if (stringHasMultipleSubstring(stringValue, '.')) {
    return '';
  }

  // Reject if there are more than one negative signs
  if (stringHasMultipleSubstring(stringValue, '-')) {
    return '';
  }

  // Pad with a zero when the first character is the fractional separator
  if (stringValue[0] === '.') {
    stringValue = `0${stringValue}`;
  }

  // Drop the fractional separator when it's the last character
  if (
    !keepTrailingFractionSeparator &&
    stringValue[stringValue.length - 1] === '.'
  ) {
    stringValue = stringValue.slice(0, -1);
  }

  return stringValue;
}

export function parseNumericValue(rawValue: string | number | undefined) {
  return Number(parseValue(rawValue)) || 0;
}

export function formatValue(
  rawValue: string | number | undefined,
  forceFullDecimal: boolean = false,
) {
  const stringValue = parseValue(rawValue, {
    keepTrailingFractionSeparator: true,
  });

  if (stringValue === '') {
    return '';
  }

  const [wholePart, decimalPart] = stringValue.split('.');

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
  const chunkedWholePart = chunks.join(',');

  if (forceFullDecimal) {
    return `${chunkedWholePart}.${(decimalPart || '').padEnd(2, '0')}`;
  } else if (decimalPart !== undefined) {
    return `${chunkedWholePart}.${decimalPart}`;
  } else {
    return chunkedWholePart;
  }
}
