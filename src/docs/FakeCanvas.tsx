import * as React from 'react';

/**
 * Displays children inside of a card that appears to be a Storybook <Canvas />,
 * without the "show code" feature. This is useful when you want to display
 * something in a doc without creating a story for it, which Canvas requires.
 */
export function FakeCanvas({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="sb-unstyled"
      style={{
        border: '1px solid rgba(38, 85, 115, 0.15)',
        borderRadius: 4,
        padding: 32,
      }}
    >
      {children}
    </div>
  );
}
