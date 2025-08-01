import * as React from 'react';

import { CurrencyFormatType } from './types';
import { formatValue, parseNumericValue, parseValue } from './utils';

type StateType = {
  /**
   * `state.value` is in the format that can be input via the `value` or
   * `defaultValue` prop, and is emmitted via the onChange event back to the
   * parent.
   * - it’s a string
   * - it does not include thousands separators
   * - it won’t have the decimal prefix at the very end of the string
   * - it will abide the minimum and maximum decimal places (unless it is
   *   an empty string)
   */
  value: string;
  /**
   * `state.workingValue` is the value of the <input> that the user
   * is interacting with. It’s initially set to the formatted version of
   * `state.value` (e.g. with thousands separators), and then stays in sync
   * with what the user is typing. For example, it can have the decimal prefix
   * at the end of the string.
   */
  workingValue: string;
  /**
   * `state.placeholderValue` is the same as
   * `state.workingValue`, except it abides the minimum and maximum
   * decimal places, so the user can see the hint about decimal places in the
   * background.
   */
  placeholderValue: string;
  /**
   * The <Currency> component’s raw `value` that was present alongside this
   * state. Can be used downstream to see if it changed from the previous
   * state.
   */
  controlledValue: string | number | undefined;
  /**
   * The currency formatting config used to parse & format the values for this
   * state.
   */
  format: CurrencyFormatType;
  /**
   * Whenever the state’s `value` changes, a descriptor for what caused the
   * change is set here, so that downstream code can conditionally decide
   * whether to act on changes to the `value`. For example, the <Currency>
   * component does not want to refire a value change event when the source
   * of the subsequent value change was from a new controlled `value` being
   * passed in.
   */
  source: 'initialValue' | 'controlledValue' | 'workingValue';
};

type StatesType = {
  currentState: StateType;
  previousState?: StateType;
};

type ActionType =
  | {
      type: 'updateFromControlledValue';
      payload: string | number | undefined;
    }
  | {
      type: 'updateFromWorkingValue';
      payload: string;
    };

function createInitialState({
  controlledValue,
  defaultValue,
  format,
}: {
  controlledValue: string | number | undefined;
  defaultValue: string | number | undefined;
  format: CurrencyFormatType;
}): StatesType {
  const initialValue =
    controlledValue !== undefined ? controlledValue : defaultValue;

  return {
    currentState: {
      value: parseValue(initialValue, format),
      workingValue: formatWorkingValue(initialValue, format),
      placeholderValue: formatPlaceholderValue(initialValue, format),
      controlledValue,
      format,
      source: 'initialValue',
    },
  };
}

/**
 * Returns a store for managing the various values needed in the <Currency>
 * component.
 */
export function useCurrencyValueStore(args: {
  controlledValue: string | number | undefined;
  defaultValue: string | number | undefined;
  format: CurrencyFormatType;
}) {
  const [{ currentState, previousState }, dispatch] = React.useReducer(
    reducer,
    args,
    createInitialState,
  );

  const updateFromControlledValue = React.useCallback(
    (newRawValue: string | number | undefined) => {
      dispatch({ type: 'updateFromControlledValue', payload: newRawValue });
    },
    [dispatch],
  );

  const updateFromWorkingValue = React.useCallback(
    (newWorkingValue: string) => {
      dispatch({ type: 'updateFromWorkingValue', payload: newWorkingValue });
    },
    [dispatch],
  );

  return {
    previousState,
    currentState,
    updateFromControlledValue,
    updateFromWorkingValue,
  };
}

/** Reducer for the store used in useCurrencyValueState */
function reducer(states: StatesType, action: ActionType): StatesType {
  //const decimalPoint = states.currentState.decimalPoint;
  //const thousandsSeparator = states.currentState.thousandsSeparator;

  let newValue: string;

  switch (action.type) {
    case 'updateFromControlledValue':
      newValue = parseValue(action.payload, states.currentState.format);
      let valueIsChanging = states.currentState.value !== newValue;

      // When updating based on value, nothing should change unless the value
      // is different, since everything cascades from the new value
      if (!valueIsChanging) {
        return states;
      }

      // Don’t update the formatted versions unless there is a numerical
      // change. Otherwise the user's formatting changes will get wiped.
      const formattedValuesShouldChange =
        parseNumericValue(newValue, states.currentState.format) !==
        parseNumericValue(
          states.currentState.placeholderValue,
          states.currentState.format,
        );

      return {
        previousState: states.currentState,
        currentState: {
          value: newValue,
          workingValue: formattedValuesShouldChange
            ? formatWorkingValue(newValue, states.currentState.format)
            : states.currentState.workingValue,
          placeholderValue: formattedValuesShouldChange
            ? formatPlaceholderValue(newValue, states.currentState.format)
            : states.currentState.placeholderValue,
          controlledValue: action.payload,
          format: states.currentState.format,
          source: 'controlledValue',
        },
      };

    case 'updateFromWorkingValue':
      newValue = parseValue(action.payload, states.currentState.format);

      return {
        previousState: states.currentState,
        currentState: {
          value: newValue,
          workingValue: formatWorkingValue(
            action.payload,
            states.currentState.format,
          ),
          placeholderValue: formatPlaceholderValue(
            action.payload,
            states.currentState.format,
          ),
          controlledValue: states.currentState.controlledValue,
          format: states.currentState.format,
          source: 'workingValue',
        },
      };
  }
}

function formatWorkingValue(
  value: string | number | undefined,
  format: CurrencyFormatType,
) {
  return formatValue(value, {
    ...format,
    minDecimalPlaces: 0,
    allowTrailingDecimalPoint: true,
    excludeDecimalOnWholeNumber: false,
  });
}

function formatPlaceholderValue(
  value: string | number | undefined,
  format: CurrencyFormatType,
) {
  return formatValue(value, {
    ...format,
    minDecimalPlaces: format.maxDecimalPlaces,
    excludeDecimalOnWholeNumber: false,
  });
}
