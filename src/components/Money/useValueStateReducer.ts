import * as React from 'react';

import { MoneyFormatType, MoneyValueType } from './types';
import { deformatValue, formatValue, parseNumerishValue } from './utils';

/** A reducer hook for making updates to the Money value state */
export function useValueStateReducer(args: {
  controlledValue: string | number | undefined;
  defaultValue: string | number | undefined;
  format: MoneyFormatType;
}) {
  return React.useReducer(reducer, args, initializeState);
}

/**
 * Represents one holistic state of the values used in the Money component
 * system, including the current set + previous set
 */
type MoneyValueStateType = {
  currentValue: MoneyValueType;
  previousValue?: MoneyValueType;
};

type ActionType =
  | {
      type: 'REINITIALIZE_VALUE';
      payload: {
        controlledValue?: string | number;
        defaultValue?: string | number;
      };
    }
  | {
      type: 'UPDATE_CONTROLLED_VALUE';
      payload: string | number | undefined;
    }
  | {
      type: 'UPDATE_WORKING_VALUE';
      payload: string;
    }
  | {
      type: 'REFORMAT_VALUE';
      payload: MoneyFormatType;
    }
  | {
      type: 'INCREMENT_VALUE';
      payload: number;
    };

function initializeState({
  controlledValue,
  defaultValue,
  format,
}: {
  controlledValue?: string | number;
  defaultValue?: string | number;
  format: MoneyFormatType;
}): MoneyValueStateType {
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

function updatedState(
  oldState: MoneyValueStateType,
  valueChanges: Omit<Partial<MoneyValueType>, 'version'>,
): MoneyValueStateType {
  return {
    currentValue: {
      ...oldState.currentValue,
      ...valueChanges,
      version: oldState.currentValue?.version + 1,
    },
    previousValue: oldState?.currentValue,
  };
}

function reducer(
  state: MoneyValueStateType,
  action: ActionType,
): MoneyValueStateType {
  let newNumerishValue: string;

  switch (action.type) {
    case 'REINITIALIZE_VALUE':
      return initializeState({
        ...action.payload,
        format: state.currentValue.format,
      });

    case 'UPDATE_CONTROLLED_VALUE':
      // If the controlledValue is not changing, don't update the state
      if (action.payload === state.currentValue.controlledValue) {
        return state;
      }

      newNumerishValue = parseNumerishValue(
        action.payload,
        state.currentValue.format,
      );

      // Don’t update the formatted versions unless there is a numerical
      // change. Otherwise the user's formatting changes will get wiped.
      const formattedValuesShouldChange =
        Number(newNumerishValue) !== Number(state.currentValue.numerishValue) ||
        (newNumerishValue === '' && state.currentValue.numerishValue !== '') ||
        (newNumerishValue !== '' && state.currentValue.numerishValue === '');

      return updatedState(state, {
        numerishValue: newNumerishValue,
        workingValue: formattedValuesShouldChange
          ? formatWorkingValue(newNumerishValue, state.currentValue.format)
          : state.currentValue.workingValue,
        placeholderValue: formattedValuesShouldChange
          ? formatFullValue(newNumerishValue, state.currentValue.format)
          : state.currentValue.placeholderValue,
        controlledValue: action.payload,
        source: 'controlledValue',
      });

    case 'UPDATE_WORKING_VALUE':
      var deformattedWorkingValue = deformatValue(
        action.payload,
        state.currentValue.format,
      );
      newNumerishValue = parseNumerishValue(
        deformattedWorkingValue,
        state.currentValue.format,
      );

      return updatedState(state, {
        numerishValue: newNumerishValue,
        workingValue: formatWorkingValue(
          deformattedWorkingValue,
          state.currentValue.format,
        ),
        placeholderValue: formatFullValue(
          deformattedWorkingValue,
          state.currentValue.format,
        ),
        source: 'workingValue',
      });

    case 'REFORMAT_VALUE':
      var deformattedWorkingValue = deformatValue(
        state.currentValue.workingValue,
        state.currentValue.format,
      );

      return updatedState(state, {
        numerishValue: parseNumerishValue(
          deformattedWorkingValue,
          action.payload,
        ),
        workingValue:
          deformattedWorkingValue === ''
            ? ''
            : formatFullValue(deformattedWorkingValue, action.payload),
        placeholderValue: formatFullValue(
          deformattedWorkingValue,
          action.payload,
        ),
        format: action.payload,
        source: 'format',
      });

    case 'INCREMENT_VALUE':
      // pressing the "down" arrow on an empty value should just set to 0
      if (state.currentValue.numerishValue === '' && action.payload < 0) {
        newNumerishValue = parseNumerishValue(0, state.currentValue.format);
      } else {
        newNumerishValue = parseNumerishValue(
          Math.max(
            Number(state.currentValue.numerishValue) + action.payload,
            state.currentValue.format.allowNegatives ? -Infinity : 0,
          ),
          state.currentValue.format,
        );
      }

      // This can happen if trying to decrement from zero and negatives are not
      // allowed
      if (newNumerishValue === state.currentValue.numerishValue) {
        return state;
      }

      const [newWholePart] = newNumerishValue.split('.');
      let newWorkingDecimalPart = newNumerishValue.replace(/^-?[0-9]*/, '');
      const previousWorkingDecimalPart =
        state.currentValue.workingValue.replace(/^-?[0-9]*/, '');

      // If the updated decimal part (which will abide minDecimalPlaces) is
      // numerically equivalent to what the working decimal part was previously,
      // keep it as it was to avoid prematurally padding with zeros.
      if (
        (Number(newWorkingDecimalPart) || 0) ===
        (Number(previousWorkingDecimalPart) || 0)
      ) {
        newWorkingDecimalPart = previousWorkingDecimalPart;
      }

      return updatedState(state, {
        numerishValue: newNumerishValue,
        workingValue: formatWorkingValue(
          `${newWholePart}${newWorkingDecimalPart}`,
          state.currentValue.format,
        ),
        placeholderValue: formatFullValue(
          newNumerishValue,
          state.currentValue.format,
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
    allowWorkingDecimalPoint: true,
    allowWorkingNegativeSign: true,
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
    allowWorkingDecimalPoint: true,
    allowWorkingNegativeSign: true,
  });
}
