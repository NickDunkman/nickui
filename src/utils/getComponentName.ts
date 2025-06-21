import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getComponentName(Component: React.ComponentType<any>) {
  return Component.displayName || Component.name;
}
