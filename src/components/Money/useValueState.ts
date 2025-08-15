import * as React from 'react';

import { MoneyValueType } from './types';
import { useValueStateReducer } from './useValueStateReducer';

/**
 * Returns a store for managing the various values needed in the <Money>
 * component (current + previous values, initializing, updating, formatting,
 * etc).
 */
export function useValueState(
  args: Parameters<typeof useValueStateReducer>[0],
): {
  /** The current set of values used by the Money component’s <input>s */
  currentValue: MoneyValueType;
  /** The previous set of values used by the Money component’s <input>s */
  previousValue?: MoneyValueType;
  /**
   * Call this to update all of the values based on a change to the working
   * <input>’s value
   */
  updateFromWorkingValue: (newWorkingValue: string) => void;
  /**
   * Call this to increment the values, such as when the user hits the up or
   * down arrow (decrement by passing a negative number)
   */
  incrementValue: (incrementAmount: number) => void;
  /**
   * Call this to reinitialize the value state. For example, if the initial
   * value isn't known on mount, such as when using React Hook Form
   */
  reinitializeWithValue: (args: {
    controlledValue?: string | number;
    defaultValue?: string | number;
  }) => void;
} {
  const [{ currentValue, previousValue }, dispatch] =
    useValueStateReducer(args);

  const updateFromWorkingValue = React.useCallback(
    (newWorkingValue: string) => {
      dispatch({
        type: 'UPDATE_FROM_WORKING_VALUE',
        payload: newWorkingValue,
      });
    },
    [dispatch],
  );

  const incrementValue = React.useCallback(
    (incrementAmount: number) => {
      dispatch({ type: 'INCREMENT_VALUE', payload: incrementAmount });
    },
    [dispatch],
  );

  const reinitializeWithValue = React.useCallback(
    (args: {
      controlledValue?: string | number;
      defaultValue?: string | number;
    }) => {
      dispatch({ type: 'REINITIALIZE_WITH_VALUE', payload: args });
    },
    [dispatch],
  );

  // Update w/ new format when it changes
  React.useEffect(() => {
    if (args.format !== currentValue.format) {
      dispatch({ type: 'UPDATE_FORMAT', payload: args.format });
    }
  }, [args.format, currentValue.format, dispatch]);

  // Update w/ new controlledValue when it changes
  React.useEffect(() => {
    if (args.controlledValue !== currentValue.controlledValue) {
      dispatch({
        type: 'UPDATE_FROM_CONTROLLED_VALUE',
        payload: args.controlledValue,
      });
    }
  }, [args.controlledValue, currentValue.controlledValue, dispatch]);

  return {
    previousValue,
    currentValue,
    updateFromWorkingValue,
    incrementValue,
    reinitializeWithValue,
  };
}
