import * as React from 'react';

import { CurrencyFormatType } from './types';
import { deformatValue, formatValue, parseNumerishValue } from './utils';

type StateType = {
  /** Starts at 1; each time the state changes, it increments */
  version: number;
  /**
   * `state.numerishValue` is the version of the value that can be parsed as a
   * Number(): it has no thousands separators and the decimalPoint is always
   * ".". This is the version of the value that is emitted via the Currency
   * component’s onChange handler back to the parent, as it is generally the
   * most useful programmatically.
   */
  numerishValue: string;
  /**
   * `state.workingValue` is the value of the <input> that the user
   * is interacting with. It’s initially set to the formatted version of
   * `state.value` (e.g. with thousands separators), and then stays in sync
   * with what the user is typing. For example, it can have the decimal prefix
   * at the end of the string.
   */
  workingValue: string;
  /**
   * `state.placeholderValue` is the same as `state.workingValue`, except it
   * abides the minimum and maximum decimal places, so the user can see the
   * hint about decimal places in the background.
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
   * Whenever the state changes, a descriptor for what caused the change is set
   * here, so that downstream code can conditionally decide whether to act on
   * changes to the `value`. For example, the <Currency> component does not want
   * to refire a change event when the new value is the result of a new
   * controlledValue being passed in.
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
    numerishValue: parseNumerishValue(initialValue, format),
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

function updateStates(
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
  let newNumerishValue: string;

  switch (action.type) {
    case 'updateFromControlledValue':
      // If the controlledValue is identical to our current state, don't
      // create a change
      if (action.payload === states.currentState.controlledValue) {
        return states;
      }

      newNumerishValue = parseNumerishValue(
        action.payload,
        states.currentState.format,
      );

      // Don’t update the formatted versions unless there is a numerical
      // change. Otherwise the user's formatting changes will get wiped.
      const formattedValuesShouldChange =
        Number(newNumerishValue) !== Number(states.currentState.numerishValue);

      return updateStates(states, {
        numerishValue: newNumerishValue,
        workingValue: formattedValuesShouldChange
          ? formatWorkingValue(newNumerishValue, states.currentState.format)
          : states.currentState.workingValue,
        placeholderValue: formattedValuesShouldChange
          ? formatPlaceholderValue(newNumerishValue, states.currentState.format)
          : states.currentState.placeholderValue,
        controlledValue: action.payload,
        source: 'controlledValue',
      });

    case 'updateFromWorkingValue':
      const deformattedValue = deformatValue(
        action.payload,
        states.currentState.format,
      );
      newNumerishValue = parseNumerishValue(
        deformattedValue,
        states.currentState.format,
      );

      return updateStates(states, {
        numerishValue: newNumerishValue,
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
