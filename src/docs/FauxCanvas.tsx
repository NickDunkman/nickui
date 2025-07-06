import * as React from 'react';

import { clsw } from '@/utils/clsw';

import { PrettyPrint } from './PrettyPrint';

/**
 * Displays children inside of a card that appears to be a Storybook <Canvas />,
 * without the "show code" feature. This is useful when you want to display
 * something in a doc without creating a story for it, which Canvas requires.
 */
export function FauxCanvas({
  children,
  prettyPrint,
}: {
  children?: React.ReactNode;
  prettyPrint?: React.ComponentProps<typeof PrettyPrint>;
}) {
  // The checkered background is added in /.storybook/preview-head.html
  return (
    <div className="sb-unstyled" style={{ margin: '25px 0 40px' }}>
      <div
        className="docs-faux-canvas"
        style={{
          border: '1px solid rgba(38, 85, 115, 0.15)',
          borderRadius: 4,
          padding: 32,
          ...(prettyPrint
            ? {
                borderRadius: '4px 4px 0 0',
                borderBottom: 0,
              }
            : {}),
        }}
      >
        {children}
      </div>
      {prettyPrint && (
        <PrettyPrint
          {...prettyPrint}
          className={clsw('rounded-t-none', prettyPrint.className)}
        />
      )}
    </div>
  );
}
