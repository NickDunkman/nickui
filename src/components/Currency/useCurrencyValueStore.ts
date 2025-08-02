import * as React from 'react';

import { CurrencyFormatType } from './types';
import {
  deformatValue,
  formatValue,
  parseNumericValue,
  parseValue,
} from './utils';

type StateType = {
  /** Starts at 1; each time the state changes, it increments */
  version: number;
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
  history: StateType[];
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
    createStates,
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

  // Update w/ new controlledValue when it changes
  React.useEffect(() => {
    if (args.controlledValue !== currentState.controlledValue) {
      updateFromControlledValue(args.controlledValue);
    }
  }, [
    args.controlledValue,
    currentState.controlledValue,
    updateFromControlledValue,
  ]);

  return {
    previousState,
    currentState,
    updateFromControlledValue,
    updateFromWorkingValue,
  };
}

function createStates({
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

  const initialState: StateType = {
    version: 1,
    value: parseValue(initialValue, format),
    workingValue: formatWorkingValue(initialValue, format),
    placeholderValue: formatPlaceholderValue(initialValue, format),
    controlledValue,
    format,
    source: 'initialValue',
  };

  return {
    currentState: initialState,
    history: [initialState],
  };
}

function updatedStates(
  oldStates: StatesType,
  stateChanges: Omit<Partial<StateType>, 'version'>,
): StatesType {
  const newState = {
    ...oldStates.currentState,
    ...stateChanges,
    version: oldStates.currentState?.version + 1,
  };

  return {
    currentState: newState,
    previousState: oldStates?.currentState,
    history: [...(oldStates?.history || []), newState],
  };
}

/** Reducer for the store used in useCurrencyValueState */
function reducer(states: StatesType, action: ActionType): StatesType {
  //const decimalPoint = states.currentState.decimalPoint;
  //const thousandsSeparator = states.currentState.thousandsSeparator;

  let newValue: string;

  switch (action.type) {
    case 'updateFromControlledValue':
      // If the controlledValue is identical to our current state, change
      // nothing.
      if (action.payload === states.currentState.controlledValue) {
        return states;
      }

      newValue = parseValue(action.payload, states.currentState.format);

      // Don’t update the formatted versions unless there is a numerical
      // change. Otherwise the user's formatting changes will get wiped.
      const formattedValuesShouldChange =
        parseNumericValue(newValue, states.currentState.format) !==
        parseNumericValue(
          states.currentState.value,
          states.currentState.format,
        );

      return updatedStates(states, {
        value: newValue,
        workingValue: formattedValuesShouldChange
          ? formatWorkingValue(newValue, states.currentState.format)
          : states.currentState.workingValue,
        placeholderValue: formattedValuesShouldChange
          ? formatPlaceholderValue(newValue, states.currentState.format)
          : states.currentState.placeholderValue,
        controlledValue: action.payload,
        source: 'controlledValue',
      });

    case 'updateFromWorkingValue':
      const deformattedValue = deformatValue(
        action.payload,
        states.currentState.format,
      );
      newValue = parseValue(deformattedValue, states.currentState.format);

      return updatedStates(states, {
        value: newValue,
        workingValue: formatWorkingValue(
          deformattedValue,
          states.currentState.format,
        ),
        placeholderValue: formatPlaceholderValue(
          deformattedValue,
          states.currentState.format,
        ),
        source: 'workingValue',
      });
  }
}

function formatWorkingValue(
  value: string | number | undefined,
  format: CurrencyFormatType,
) {
  return formatValue(value, {
    ...format,
    // These allow the decimal part to be a work in progress
    allowTrailingDecimalPoint: true,
    minDecimalPlaces: 0,
  });
}

function formatPlaceholderValue(
  value: string | number | undefined,
  format: CurrencyFormatType,
) {
  return formatValue(value, {
    ...format,
    minDecimalPlaces: format.maxDecimalPlaces,
  });
}
