import * as React from 'react';

import { MoneyFormatType, MoneyValueType } from './types';
import { deformatValue, formatValue, parseNumerishValue } from './utils';

type MoneyValueHistoryType = {
  currentValue: MoneyValueType;
  previousValue?: MoneyValueType;
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
      payload: MoneyFormatType;
    }
  | {
      type: 'updateFromIncrement';
      payload: number;
    };

/**
 * Returns a store for managing the various values needed in the <Money>
 * component.
 */
export function useValueStore(args: {
  controlledValue: string | number | undefined;
  defaultValue: string | number | undefined;
  format: MoneyFormatType;
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
  format: MoneyFormatType;
}): MoneyValueHistoryType {
  const rawValue =
    controlledValue !== undefined ? controlledValue : defaultValue;
  const numerishValue = parseNumerishValue(rawValue, format);

  return {
    currentValue: {
      version: 1,
      numerishValue,
      // On initialization, if a value is passed in, the workingValue should
      // start with the full set of decimalPlaces
      workingValue:
        numerishValue === '' ? '' : formatFullValue(rawValue, format),
      placeholderValue: formatFullValue(rawValue, format),
      controlledValue,
      format,
      source: 'initialValue',
    },
  };
}

function updateHistory(
  oldHistory: MoneyValueHistoryType,
  valueChanges: Omit<Partial<MoneyValueType>, 'version'>,
): MoneyValueHistoryType {
  return {
    currentValue: {
      ...oldHistory.currentValue,
      ...valueChanges,
      version: oldHistory.currentValue?.version + 1,
    },
    previousValue: oldHistory?.currentValue,
  };
}

/** Reducer for the store used in useMoneyValueStore */
function historyReducer(
  history: MoneyValueHistoryType,
  action: ActionType,
): MoneyValueHistoryType {
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
        Number(newNumerishValue) !==
          Number(history.currentValue.numerishValue) ||
        (newNumerishValue === '' &&
          history.currentValue.numerishValue !== '') ||
        (newNumerishValue !== '' && history.currentValue.numerishValue === '');

      return updateHistory(history, {
        numerishValue: newNumerishValue,
        workingValue: formattedValuesShouldChange
          ? formatWorkingValue(newNumerishValue, history.currentValue.format)
          : history.currentValue.workingValue,
        placeholderValue: formattedValuesShouldChange
          ? formatFullValue(newNumerishValue, history.currentValue.format)
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
        placeholderValue: formatFullValue(
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
        placeholderValue: formatFullValue(
          deformattedWorkingValue,
          action.payload,
        ),
        format: action.payload,
        source: 'format',
      });

    case 'updateFromIncrement':
      // pressing the "down" arrow on an empty value should just set to 0
      if (history.currentValue.numerishValue === '' && action.payload < 0) {
        newNumerishValue = parseNumerishValue(0, history.currentValue.format);
      } else {
        newNumerishValue = parseNumerishValue(
          Math.max(
            Number(history.currentValue.numerishValue) + action.payload,
            history.currentValue.format.allowNegatives ? -Infinity : 0,
          ),
          history.currentValue.format,
        );
      }

      // This can happen if trying to decrement from zero and negatives are not
      // allowed
      if (newNumerishValue === history.currentValue.numerishValue) {
        return history;
      }

      const [newWholePart] = newNumerishValue.split('.');
      let newWorkingDecimalPart = newNumerishValue.replace(/^-?[0-9]*/, '');
      const previousWorkingDecimalPart =
        history.currentValue.workingValue.replace(/^-?[0-9]*/, '');

      // If the updated decimal part (which will abide minDecimalPlaces) is
      // numerically equivalent to what the working decimal part was previously,
      // keep it as it was to avoid prematurally padding with zeros.
      if (
        Number(newWorkingDecimalPart) === Number(previousWorkingDecimalPart)
      ) {
        newWorkingDecimalPart = previousWorkingDecimalPart;
      }

      return updateHistory(history, {
        numerishValue: newNumerishValue,
        workingValue: formatWorkingValue(
          `${newWholePart}${newWorkingDecimalPart}`,
          history.currentValue.format,
        ),
        placeholderValue: formatFullValue(
          newNumerishValue,
          history.currentValue.format,
        ),
        source: 'increment',
      });
  }
}

function formatWorkingValue(
  rawValue: string | number | undefined,
  format: MoneyFormatType,
) {
  return formatValue(rawValue, {
    ...format,
    // These allow the decimal part to be a work in progress
    allowTrailingDecimalPoint: true,
    minDecimalPlaces: 0,
  });
}

function formatFullValue(
  rawValue: string | number | undefined,
  format: MoneyFormatType,
) {
  return formatValue(rawValue || '0', {
    ...format,
    minDecimalPlaces: format.maxDecimalPlaces,
  });
}
