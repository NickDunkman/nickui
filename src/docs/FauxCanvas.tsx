import * as React from 'react';

/**
 * Custom doc block for rendering what appears to be a standard Storybook
 * <Canvas /> bock. This is useful for when you want to demo something without
 * having to make a story for it. Does not support the "show code" feature.
 */
export function FauxCanvas({ children }: { children?: React.ReactNode }) {
  // The checkered background is added in /.storybook/preview-head.html
  return (
    <div className="sb-unstyled" style={{ margin: '25px 0 40px' }}>
      <div
        className="docs-faux-canvas"
        style={{
          border: '1px solid rgba(38, 85, 115, 0.15)',
          borderRadius: 4,
          padding: 32,
        }}
      >
        {children}
      </div>
    </div>
  );
}
