import * as React from 'react';

/**
 * Returns a function that can be used to determine whether a key press on
 * the Currency component’s working <input> should be blocked. For example,
 * typing a decimalPoint when there is already a decimalPoint in the value
 * is not allowed.
 */
export function useCurrencyKeyDownConstrictor({
  allowNegatives,
  decimalPlaces,
  decimalPoint,
}: {
  allowNegatives: boolean;
  decimalPlaces: number;
  decimalPoint: string;
}) {
  return React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      // Don't block when holding command/etc, since those are things like
      // "copy" / "paste", instead of character inputs.
      if (event.metaKey) {
        return false;
      }

      // Block disallowed characters
      if (
        ![
          ...numberKeys,
          decimalPoint,
          ...(allowNegatives ? ['-'] : []),
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'ArrowRight',
          'Tab',
          'Enter',
          'Backspace',
          'Delete',
        ].includes(event.key) &&
        event.key !== decimalPoint
      ) {
        return true;
      }

      const value = event.currentTarget.value;
      const selectionStart = event.currentTarget.selectionStart || 0;
      const hasSelectionRange =
        (event.currentTarget.selectionEnd || 0) !== selectionStart;

      // Block input of a second decimal
      if (event.key === decimalPoint && value.indexOf(decimalPoint) !== -1) {
        return true;
      }

      // Negative sign only allowed when cursor is at the start & there is
      // no negative sign yet
      if (
        event.key === '-' &&
        (selectionStart > 0 || value.indexOf('-') !== -1)
      ) {
        return true;
      }

      // Block additional decimal place when at max
      if (numberKeys.includes(event.key)) {
        // Don’t block when there is a selection range, since the number key
        // press can’t possibly add another decimal place
        if (!hasSelectionRange) {
          // Don't block unless the cursor is to the right of the decimal point
          const decimalPointIndex = value.indexOf(decimalPoint);
          if (decimalPointIndex !== -1 && selectionStart > decimalPointIndex) {
            // Don't block unless we already have max decimal places
            const decimalPlacesOnWorkingValue =
              value.length - (decimalPointIndex + 1);
            if (decimalPlacesOnWorkingValue >= decimalPlaces) {
              return true;
            }
          }
        }
      }
    },
    [allowNegatives, decimalPlaces, decimalPoint],
  );
}

const numberKeys = Object.freeze([
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]);
