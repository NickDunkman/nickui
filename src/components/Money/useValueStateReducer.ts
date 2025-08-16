import * as React from 'react';

import { MoneyFormatType, MoneyValueType } from './types';
import { deformatValue, formatValue, parseFormValue } from './utils';

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
      type: 'UPDATE_FROM_CONTROLLED_VALUE';
      payload: string | number | undefined;
    }
  | {
      type: 'UPDATE_FROM_WORKING_VALUE';
      payload: string;
    }
  | {
      type: 'UPDATE_FORMAT';
      payload: MoneyFormatType;
    }
  | {
      type: 'INCREMENT_VALUE';
      payload: number;
    }
  | {
      type: 'REINITIALIZE_WITH_VALUE';
      payload: {
        controlledValue?: string | number;
        defaultValue?: string | number;
      };
    }
  | { type: 'SET_WORKING_MODE' }
  | { type: 'SET_IDLE_MODE' };

function initializeState({
  controlledValue,
  defaultValue,
  workingMode = false,
  format,
}: {
  controlledValue?: string | number;
  defaultValue?: string | number;
  workingMode?: boolean;
  format: MoneyFormatType;
}): MoneyValueStateType {
  const rawValue =
    controlledValue !== undefined ? controlledValue : defaultValue;
  const formValue = parseFormValue(rawValue, format);

  return {
    currentValue: {
      version: 1,
      workingMode,
      formValue,
      workingValue: formatWorkingValue(formValue, format, workingMode, true),
      placeholderValue: formatPlaceholderValue(formValue, format, workingMode),
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
  let newFormValue: string;

  switch (action.type) {
    case 'REINITIALIZE_WITH_VALUE':
      return initializeState({
        ...action.payload,
        format: state.currentValue.format,
      });

    case 'UPDATE_FROM_CONTROLLED_VALUE':
      // If the controlledValue is not changing, don't update the state
      if (action.payload === state.currentValue.controlledValue) {
        return state;
      }

      newFormValue = parseFormValue(action.payload, state.currentValue.format);

      // Don’t update the formatted versions unless there is a numerical
      // change. Otherwise the user's formatting changes will get wiped.
      const formattedValuesShouldChange =
        Number(newFormValue) !== Number(state.currentValue.formValue) ||
        (newFormValue === '' && state.currentValue.formValue !== '') ||
        (newFormValue !== '' && state.currentValue.formValue === '');

      return updatedState(state, {
        formValue: newFormValue,
        workingValue: formattedValuesShouldChange
          ? formatWorkingValue(
              newFormValue,
              state.currentValue.format,
              state.currentValue.workingMode,
            )
          : state.currentValue.workingValue,
        placeholderValue: formattedValuesShouldChange
          ? formatPlaceholderValue(
              newFormValue,
              state.currentValue.format,
              state.currentValue.workingMode,
            )
          : state.currentValue.placeholderValue,
        controlledValue: action.payload,
        source: 'controlledValue',
      });

    case 'UPDATE_FROM_WORKING_VALUE':
      var deformattedWorkingValue = deformatValue(
        action.payload,
        state.currentValue.format,
      );
      newFormValue = parseFormValue(
        deformattedWorkingValue,
        state.currentValue.format,
      );

      return updatedState(state, {
        formValue: newFormValue,
        workingValue: formatWorkingValue(
          deformattedWorkingValue,
          state.currentValue.format,
          state.currentValue.workingMode,
        ),
        placeholderValue: formatPlaceholderValue(
          deformattedWorkingValue,
          state.currentValue.format,
          state.currentValue.workingMode,
        ),
        source: 'workingValue',
      });

    case 'UPDATE_FORMAT':
      var deformattedWorkingValue = deformatValue(
        state.currentValue.workingValue,
        state.currentValue.format,
      );

      return updatedState(state, {
        formValue: parseFormValue(deformattedWorkingValue, action.payload),
        workingValue: formatWorkingValue(
          deformattedWorkingValue,
          action.payload,
          state.currentValue.workingMode,
        ),
        placeholderValue: formatPlaceholderValue(
          deformattedWorkingValue,
          action.payload,
          state.currentValue.workingMode,
        ),
        format: action.payload,
        source: 'format',
      });

    case 'INCREMENT_VALUE':
      // pressing the "down" arrow on an empty value should just set to 0
      if (state.currentValue.formValue === '' && action.payload < 0) {
        newFormValue = parseFormValue(0, state.currentValue.format);
      } else {
        newFormValue = parseFormValue(
          Math.max(
            Number(state.currentValue.formValue) + action.payload,
            state.currentValue.format.allowNegatives ? -Infinity : 0,
          ),
          state.currentValue.format,
        );
      }

      // This can happen if trying to decrement from zero and negatives are not
      // allowed
      if (newFormValue === state.currentValue.formValue) {
        return state;
      }

      const [newWholePart] = newFormValue.split('.');
      let newWorkingDecimalPart = newFormValue.replace(/^-?[0-9]*/, '');
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
        formValue: newFormValue,
        workingValue: formatWorkingValue(
          `${newWholePart}${newWorkingDecimalPart}`,
          state.currentValue.format,
          state.currentValue.workingMode,
        ),
        placeholderValue: formatPlaceholderValue(
          newFormValue,
          state.currentValue.format,
          state.currentValue.workingMode,
        ),
        source: 'increment',
      });

    case 'SET_WORKING_MODE':
    case 'SET_IDLE_MODE':
      const workingMode = action.type === 'SET_WORKING_MODE';

      var deformattedWorkingValue = deformatValue(
        state.currentValue.workingValue,
        state.currentValue.format,
      );

      return updatedState(state, {
        workingMode,
        workingValue: formatWorkingValue(
          deformattedWorkingValue,
          state.currentValue.format,
          workingMode,
        ),
        placeholderValue: formatPlaceholderValue(
          deformattedWorkingValue,
          state.currentValue.format,
          workingMode,
        ),
        source: workingMode ? 'workingMode' : 'idleMode',
      });
  }
}

function formatWorkingValue(
  rawValue: string | number | undefined,
  format: MoneyFormatType,
  workingMode: boolean,
  initializationMode: boolean = false,
) {
  return formatValue(rawValue, format, {
    allowWorkingDecimals: workingMode && !initializationMode,
    allowWorkingNegative: workingMode,
    allowThousandsSeparators: !workingMode,
  });
}

function formatPlaceholderValue(
  rawValue: string | number | undefined,
  format: MoneyFormatType,
  workingMode: boolean,
) {
  return formatValue(rawValue || '0', format, {
    allowWorkingDecimals: false,
    allowWorkingNegative: workingMode,
    allowThousandsSeparators: !workingMode,
  });
}
