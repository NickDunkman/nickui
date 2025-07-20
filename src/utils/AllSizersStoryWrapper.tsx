import * as React from 'react';

import { clsw } from './clsw';

export function AllSizersStoryWrapper({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsw(
        'relative flex flex-col gap-4 sm:flex-row sm:items-baseline',
        className,
      )}
    >
      <div
        className="absolute -bottom-8.5 hidden text-sm text-gray-400 sm:block"
        style={{ lineHeight: '1em' }}
      >
        <div className="absolute -right-2.5 -left-2.5 z-9999 -mt-0.5 border-b-2 border-b-[#ff8aff] opacity-50">
          &#8203;
        </div>
        baseline alignment
      </div>
      <div
        className="pointer-events-none -mr-4 hidden select-none sm:block"
        style={{ lineHeight: '1em' }}
      >
        <div className="absolute -right-7.5 -left-7.5 z-9999 -mt-0.5 border-b-2 border-b-[#ff8aff] opacity-50">
          &#8203;
        </div>
        &#8203;
      </div>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div key={index} className="z-1 sm:flex-1">
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
