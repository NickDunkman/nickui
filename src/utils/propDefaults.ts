import * as React from 'react';
import { ArgTypes } from 'storybook/internal/csf';

/**
 * Reduces the boilerplate needed to specify prop defaults in a story Meta
 * object.
 */
export function propDefaults<
  Component extends React.ComponentType,
  Props = React.ComponentProps<Component>,
  ReturnType = ArgTypes<Props>,
>(propsWithDefaults: Partial<Props>): ReturnType {
  return Object.entries(propsWithDefaults).reduce(
    (result, [propName, propDefault]) => ({
      ...result,
      [propName]: {
        table: {
          defaultValue: {
            summary: propDefault,
          },
        },
      },
    }),
    {} as ReturnType,
  );
}
