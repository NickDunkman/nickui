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
    <div className={clsw('relative', className)}>
      {/** This is the legend we show at the bottom left of the canvas */}
      <div
        className="absolute -bottom-8.5 hidden text-sm text-gray-400 sm:block"
        style={{ lineHeight: '1em' }}
      >
        <div className="absolute -right-2.5 -left-2.5 z-9999 -mt-0.5 border-b-2 border-b-[#ff8aff] opacity-50">
          &#8203;
        </div>
        baseline alignment
      </div>
      {/*
        Render a flexbox with the children invisible, and add the pink line as
        the first item in the flexbox. This allows the pink line to be
        baseline-aligned with the children. We want to "justify-between" the
        children, but we don't want the pink line element to cause an additional
        gap, so we have this separate rendering.
       */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 hidden items-baseline gap-4 select-none sm:flex">
        <div style={{ lineHeight: '1em' }}>
          <div className="absolute -right-7.5 -left-7.5 z-9999 -mt-0.5 border-b-2 border-b-[#ff8aff] opacity-50">
            &#8203;
          </div>
          &#8203;
        </div>
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div
                key={index}
                className={clsw('invisible outline-2', index === 0 && '-ml-4')}
              >
                {child}
              </div>
            ))
          : children}
      </div>
      {/*
        Now we just render the children in a visible way, with the gaps we want
       */}
      <div className="flex flex-col items-baseline justify-between gap-4 sm:flex-row">
        {children}
      </div>
    </div>
  );
}
