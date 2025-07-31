import * as React from 'react';

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
   * Whenever the state’s `value` changes, its previous `value` is transferred
   * to this property, so that downstream code can conditionally decide whether
   * to act on changes to the `value`.
   */
  previousValue?: string;
  /**
   * Whenever the state’s `value` changes, a descriptor for what caused the
   * change is set here, so that downstream code can conditionally decide
   * whether to act on changes to the `value`. For example, the <Currency>
   * component does not want to refire a value change event when the source
   * of the subsequent value change was from a new controlled `value` being
   * passed in.
   */
  previousValueUpdateSource?: 'value' | 'workingValue';
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

function createInitialState(
  initialRawValue: string | number | undefined,
): StateType {
  return {
    value: parseValue(initialRawValue),
    workingValue: formatValue(initialRawValue),
    placeholderValue: formatValue(initialRawValue, true),
  };
}

/**
 * Returns a store for managing the various values needed in the <Currency>
 * component.
 */
export function useCurrencyValueStore(
  initialRawValue: string | number | undefined,
) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialRawValue,
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
    state,
    updateFromControlledValue,
    updateFromWorkingValue,
  };
}

/** Reducer for the store used in useCurrencyValueState */
function reducer(state: StateType, action: ActionType): StateType {
  const newValue = parseValue(action.payload);
  const valueIsChanging = state.value !== newValue;

  switch (action.type) {
    case 'updateFromControlledValue':
      // When updating based on value, nothing should change unless the value
      // is different, since everything cascades from the new value
      if (!valueIsChanging) {
        return state;
      }

      // Don’t update the formatted versions unless there is a numerical
      // change. Otherwise the user's formatting changes will get wiped.
      const formattedValuesShouldChange =
        parseNumericValue(newValue) !== parseNumericValue(state.workingValue);

      return {
        value: newValue,
        workingValue: formattedValuesShouldChange
          ? formatValue(newValue)
          : state.workingValue,
        placeholderValue: formattedValuesShouldChange
          ? formatValue(newValue, true)
          : state.placeholderValue,
        previousValue: state.value,
        previousValueUpdateSource: 'value',
      };

    case 'updateFromWorkingValue':
      return {
        value: newValue,
        workingValue: formatValue(action.payload),
        placeholderValue: formatValue(action.payload, true),
        // Don't update these unless the value is actually changing
        previousValue: valueIsChanging ? state.value : state.previousValue,
        previousValueUpdateSource: valueIsChanging
          ? 'workingValue'
          : state.previousValueUpdateSource,
      };
  }
}
