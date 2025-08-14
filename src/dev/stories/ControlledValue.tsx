import * as React from 'react';

/**
 * Helper for adding a "controlled value" to a component, particularly in a
 * <Canvas> block in an .mdx file, where you can’t add non-jsx code, so can't
 * call the React.useState hook.
 */
export function ControlledValue<T>({
  children,
  defaultValue,
}: {
  children: (value: T, setValue: React.Dispatch<T>) => React.ReactNode;
  defaultValue: T;
}) {
  const [value, setValue] = React.useState<T>(defaultValue);
  return children(value, setValue);
}
