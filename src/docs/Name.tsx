import * as React from 'react';

export function Name({ of, link = false }: { of: string; link?: boolean }) {
  return (
    <code
      style={{
        color: link ? 'rgb(2, 156, 253)' : undefined,
        display: 'inline-block',
        fontWeight: 'bold',
        backgroundColor: 'rgb(247, 250, 252)',
        padding: '3px 5px',
        lineHeight: '1',
        margin: '0px 2px',
        whiteSpace: 'nowrap',
        borderRadius: 3,
        border: '1px solid rgb(236, 244, 249)',
      }}
    >
      &lt;{of}&gt;
    </code>
  );
}
