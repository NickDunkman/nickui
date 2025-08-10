import * as React from 'react';

import { clsw } from '@/utils/clsw';

/** JSON.stringifies nicely within a nice looking nicety. */
export function PrettyPrint({
  className,
  data,
  title,
}: {
  className?: string;
  data: unknown;
  title?: React.ReactNode;
}) {
  return (
    <div
      className={clsw(
        'rounded-sm border-2 border-amber-200 bg-amber-200',
        className,
      )}
    >
      {title && <div className="px-3 py-2 text-xs font-bold">{title}</div>}
      <pre className="overflow-x-scroll rounded-b-sm bg-amber-50 p-3 font-mono text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
