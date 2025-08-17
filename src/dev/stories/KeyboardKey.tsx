import * as React from 'react';

import { clsw } from '@/utils/clsw';

export function KeyboardKey({ children }: { children: string }) {
  return (
    <span
      className={clsw(
        'sb-unstyled mx-1 inline-flex rounded-sm px-1.5 py-0.25 text-nowrap first:ml-0',
      )}
      style={{
        background: 'rgb(252, 252, 253)',
        color: 'rgb(28, 32, 36)',
        boxShadow:
          'rgba(0, 0, 85, 0.024) 0px -0.525px 5.25px 0px inset, rgba(255, 255, 255, 0.95) 0px 0.525px 0px 0px inset, rgba(0, 0, 85, 0.024) 0px 2.625px 5.25px 0px inset, rgba(0, 0, 47, 0.15) 0px -0.525px 0px 0px inset, rgba(0, 9, 50, 0.12) 0px 0px 0px 0.525px, rgba(0, 6, 46, 0.196) 0px 0.84px 1.785px 0px',
        fontFamily:
          '"Untitled Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        fontSize: 11,
      }}
    >
      {children}
    </span>
  );
}
