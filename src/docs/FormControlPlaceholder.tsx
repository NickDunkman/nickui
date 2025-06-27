import * as React from 'react';

import { clsw } from '@/utils/clsw';

export function FormControlPlaceholder({
  children = 'A form control',
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsw(
        'rounded-sm border-1 border-dashed border-blue-300 bg-blue-50 p-3 text-xs text-blue-400',
        className,
      )}
    >
      {children}
    </div>
  );
}
