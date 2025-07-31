import * as React from 'react';

import { formatValue, parseNumericValue, parseValue } from './utils';

type StateType = {
  thousandsSeparator: string;
  decimalPoint: string;
  controlledValue: string | number | undefined;
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
  thousandsSeparator,
  decimalPoint,
}: {
  controlledValue: string | number | undefined;
  defaultValue: string | number | undefined;
  thousandsSeparator: string;
  decimalPoint: string;
}): StatesType {
  const initialValue =
    controlledValue !== undefined ? controlledValue : defaultValue;

  return {
    currentState: {
      thousandsSeparator,
      decimalPoint,
      controlledValue,
      value: parseValue(initialValue, { decimalPoint }),
      workingValue: formatValue(initialValue, {
        decimalPoint,
        thousandsSeparator,
      }),
      placeholderValue: formatValue(initialValue, {
        decimalPoint,
        thousandsSeparator,
        forceFractionalPart: true,
      }),
      source: 'initialValue',
    },
  };
}

/**
 * Returns a store for managing the various values needed in the <Currency>
 * component.
 */
export function useCurrencyValueStore(options: {
  controlledValue: string | number | undefined;
  defaultValue: string | number | undefined;
  thousandsSeparator: string;
  decimalPoint: string;
}) {
  const [{ currentState, previousState }, dispatch] = React.useReducer(
    reducer,
    options,
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
  const decimalPoint = states.currentState.decimalPoint;
  const thousandsSeparator = states.currentState.thousandsSeparator;

  const newValue = parseValue(action.payload, { decimalPoint });
  const valueIsChanging = states.currentState.value !== newValue;

  switch (action.type) {
    case 'updateFromControlledValue':
      // When updating based on value, nothing should change unless the value
      // is different, since everything cascades from the new value
      if (!valueIsChanging) {
        return states;
      }

      // Don’t update the formatted versions unless there is a numerical
      // change. Otherwise the user's formatting changes will get wiped.
      const formattedValuesShouldChange =
        parseNumericValue(newValue, decimalPoint) !==
        parseNumericValue(states.currentState.workingValue, decimalPoint);

      return {
        previousState: states.currentState,
        currentState: {
          ...states.currentState,
          controlledValue: action.payload,
          value: newValue,
          workingValue: formattedValuesShouldChange
            ? formatValue(newValue, { decimalPoint, thousandsSeparator })
            : states.currentState.workingValue,
          placeholderValue: formattedValuesShouldChange
            ? formatValue(newValue, {
                decimalPoint,
                thousandsSeparator,
                forceFractionalPart: true,
              })
            : states.currentState.placeholderValue,
          source: 'controlledValue',
        },
      };

    case 'updateFromWorkingValue':
      return {
        previousState: states.currentState,
        currentState: {
          ...states.currentState,
          controlledValue: states.currentState.controlledValue,
          value: newValue,
          workingValue: formatValue(action.payload, {
            decimalPoint,
            thousandsSeparator,
          }),
          placeholderValue: formatValue(action.payload, {
            decimalPoint,
            thousandsSeparator,
            forceFractionalPart: true,
          }),
          source: 'workingValue',
        },
      };
  }
}
