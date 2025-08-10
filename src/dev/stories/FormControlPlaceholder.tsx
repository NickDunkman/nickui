import * as React from 'react';

import { clsw } from '@/utils/clsw';

export function FormControlPlaceholder({
  children,
  className,
  tiny = false,
}: {
  children?: React.ReactNode;
  className?: string;
  tiny?: boolean;
}) {
  return (
    <div
      className={clsw(
        'rounded-sm border-1 border-dashed border-blue-300 bg-blue-50 text-xs text-blue-600',
        tiny ? 'p-1' : 'p-3',
        className,
      )}
    >
      {children || (tiny ? 'control' : 'A form control')}
    </div>
  );
}
