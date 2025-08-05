import * as React from 'react';

import { CurrencyFormatType, CurrencyValueType } from './types';
import { deformatValue, formatValue, parseNumerishValue } from './utils';

type CurrencyValueHistoryType = {
  currentValue: CurrencyValueType;
  previousValue?: CurrencyValueType;
};

type ActionType =
  | {
      type: 'updateFromControlledValue';
      payload: string | number | undefined;
    }
  | {
      type: 'updateFromWorkingValue';
      payload: string;
    }
  | {
      type: 'updateFromFormat';
      payload: CurrencyFormatType;
    }
  | {
      type: 'updateFromIncrement';
      payload: number;
    };

/**
 * Returns a store for managing the various values needed in the <Currency>
 * component.
 */
export function useValueStore(args: {
  controlledValue: string | number | undefined;
  defaultValue: string | number | undefined;
  format: CurrencyFormatType;
}) {
  const [{ currentValue, previousValue }, dispatch] = React.useReducer(
    historyReducer,
    args,
    initializeHistory,
  );

  const updateFromWorkingValue = React.useCallback(
    (newWorkingValue: string) => {
      dispatch({ type: 'updateFromWorkingValue', payload: newWorkingValue });
    },
    [dispatch],
  );

  const updateFromIncrement = React.useCallback(
    (amount: number) => {
      dispatch({ type: 'updateFromIncrement', payload: amount });
    },
    [dispatch],
  );

  // Update w/ new format when it changes
  React.useEffect(() => {
    if (args.format !== currentValue.format) {
      dispatch({ type: 'updateFromFormat', payload: args.format });
    }
  }, [args.format, currentValue.format, dispatch]);

  // Update w/ new controlledValue when it changes
  React.useEffect(() => {
    if (args.controlledValue !== currentValue.controlledValue) {
      dispatch({
        type: 'updateFromControlledValue',
        payload: args.controlledValue,
      });
    }
  }, [args.controlledValue, currentValue.controlledValue, dispatch]);

  return {
    previousValue,
    currentValue,
    updateFromWorkingValue,
    updateFromIncrement,
  };
}

function initializeHistory({
  controlledValue,
  defaultValue,
  format,
}: {
  controlledValue: string | number | undefined;
  defaultValue: string | number | undefined;
  format: CurrencyFormatType;
}): CurrencyValueHistoryType {
  const rawValue =
    controlledValue !== undefined ? controlledValue : defaultValue;
  const workingValue = formatWorkingValue(rawValue, format);

  return {
    currentValue: {
      version: 1,
      numerishValue: parseNumerishValue(rawValue, format),
      workingValue,
      placeholderValue: formatPlaceholderValue(rawValue, format),
      controlledValue,
      format,
      source: 'initialValue',
    },
  };
}

function updateHistory(
  oldHistory: CurrencyValueHistoryType,
  valueChanges: Omit<Partial<CurrencyValueType>, 'version'>,
): CurrencyValueHistoryType {
  return {
    currentValue: {
      ...oldHistory.currentValue,
      ...valueChanges,
      version: oldHistory.currentValue?.version + 1,
    },
    previousValue: oldHistory?.currentValue,
  };
}

/** Reducer for the store used in useCurrencyValueStore */
function historyReducer(
  history: CurrencyValueHistoryType,
  action: ActionType,
): CurrencyValueHistoryType {
  let newNumerishValue: string;

  switch (action.type) {
    case 'updateFromControlledValue':
      // If the controlledValue is not changing, don't update the history
      if (action.payload === history.currentValue.controlledValue) {
        return history;
      }

      newNumerishValue = parseNumerishValue(
        action.payload,
        history.currentValue.format,
      );

      // Don’t update the formatted versions unless there is a numerical
      // change. Otherwise the user's formatting changes will get wiped.
      const formattedValuesShouldChange =
        Number(newNumerishValue) !== Number(history.currentValue.numerishValue);

      return updateHistory(history, {
        numerishValue: newNumerishValue,
        workingValue: formattedValuesShouldChange
          ? formatWorkingValue(newNumerishValue, history.currentValue.format)
          : history.currentValue.workingValue,
        placeholderValue: formattedValuesShouldChange
          ? formatPlaceholderValue(
              newNumerishValue,
              history.currentValue.format,
            )
          : history.currentValue.placeholderValue,
        controlledValue: action.payload,
        source: 'controlledValue',
      });

    case 'updateFromWorkingValue':
      var deformattedWorkingValue = deformatValue(
        action.payload,
        history.currentValue.format,
      );
      newNumerishValue = parseNumerishValue(
        deformattedWorkingValue,
        history.currentValue.format,
      );

      return updateHistory(history, {
        numerishValue: newNumerishValue,
        workingValue: formatWorkingValue(
          deformattedWorkingValue,
          history.currentValue.format,
        ),
        placeholderValue: formatPlaceholderValue(
          deformattedWorkingValue,
          history.currentValue.format,
        ),
        source: 'workingValue',
      });

    case 'updateFromFormat':
      var deformattedWorkingValue = deformatValue(
        history.currentValue.workingValue,
        history.currentValue.format,
      );

      return updateHistory(history, {
        workingValue: formatWorkingValue(
          deformattedWorkingValue,
          action.payload,
        ),
        placeholderValue: formatPlaceholderValue(
          deformattedWorkingValue,
          action.payload,
        ),
        format: action.payload,
        source: 'format',
      });

    case 'updateFromIncrement':
      // pressing the "down" arrow on an empty value should just set to 0
      if (history.currentValue.numerishValue === '' && action.payload === -1) {
        newNumerishValue = parseNumerishValue(0, history.currentValue.format);
      } else {
        newNumerishValue = Math.max(
          Number(history.currentValue.numerishValue) + action.payload,
          history.currentValue.format.allowNegatives ? -Infinity : 0,
        ).toString();
      }

      // This can happen if trying to decrement from zero and negatives are not
      // allowed
      if (newNumerishValue === history.currentValue.numerishValue) {
        return history;
      }

      // Persist exact decimals from the old working value. They should remain
      // the same since incrementing happens by integers. Keeping the decimals
      // the same (rather than potentially padding w/ another zero) allows the
      // cursor position to not jerk over
      const [incrementedWholePart] = newNumerishValue.split('.');
      const [_, incrementedDecimalPart] =
        history.currentValue.workingValue.split(
          history.currentValue.format.decimalPoint,
        );

      return updateHistory(history, {
        numerishValue: newNumerishValue,
        workingValue: formatWorkingValue(
          `${incrementedWholePart}${incrementedDecimalPart !== undefined ? history.currentValue.format.decimalPoint : ''}${incrementedDecimalPart || ''}`,
          history.currentValue.format,
        ),
        placeholderValue: formatPlaceholderValue(
          newNumerishValue,
          history.currentValue.format,
        ),
        source: 'increment',
      });
  }
}

function formatWorkingValue(
  rawValue: string | number | undefined,
  format: CurrencyFormatType,
) {
  return formatValue(rawValue, {
    ...format,
    // These allow the decimal part to be a work in progress
    allowTrailingDecimalPoint: true,
    minDecimalPlaces: 0,
  });
}

function formatPlaceholderValue(
  rawValue: string | number | undefined,
  format: CurrencyFormatType,
) {
  return formatValue(rawValue || '0', {
    ...format,
    minDecimalPlaces: format.maxDecimalPlaces,
  });
}
