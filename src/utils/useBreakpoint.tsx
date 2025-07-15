import memoize from 'just-memoize';
import * as React from 'react';
import { singletonHook } from 'react-singleton-hook';

import { BREAKPOINT_MEASURER_ID } from '@/constants';

import { clsw } from './clsw';

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * useBreakpoint is a fancy hook that will performantly & synchronously return
 * an object about the currently active Tailwind breakpoints.
 *
 * It currently only works with Tailwind's default breakpoints (xs, sm, md, lg,
 * xl) -- however, it does account for any custom theming of those breakpoints
 * (such as if you've changed the minimum screen size of the "md" breakpoint in
 * your application). It does this by installing a hidden <div> in the DOM
 * which uses Tailwind breakpoint classes to change itself as the screen size
 * changes. Then, the hook uses a combination of the ResizeObserver &
 * react-singleton-hook to update the return value when the screen's breakpoint
 * changes, in a very performant way.
 *
 * This could probably be updated to include custom breakpoints added to your
 * application's Tailwind config, but that would require some kind of trickery
 * to dynamically pull that config, and then would need to use some kind of
 * useMediaQuery hook along with javascript being aware of the breakpoint
 * sizing.
 */
export const useBreakpoint = singletonHook(
  // This is used until singletonHook sets up the hook (which is only once?)
  () => getBreakpointInfo(getBreakpointFromMeasurer(getMeasurer())),
  // Then, singletonHook just fully uses this hook
  useBreakpointImplementation,
);

export function useBreakpointImplementation() {
  let [measurer, setMeasurer] = React.useState<HTMLElement>();
  let [breakpoint, setBreakpoint] = React.useState<BreakpointType>();

  React.useEffect(() => {
    if (measurer) {
      // By using ResizeObserver, our updater only fires when actual breakpoint
      // changes occur, since our secret element does resizes at breakpoints.
      // And since this hook is wrapped with a react-singleton-hook, there
      // should only be one instance of this ResizeObserver running, no matter
      // how many responsive NickUI components your application has mounted.
      const observer = new ResizeObserver(() => {
        if (measurer) {
          setBreakpoint(getBreakpointFromMeasurer(measurer));
        }
      });
      observer.observe(measurer);
      return () => observer.disconnect();
    }
  }, [measurer]);

  if (!measurer) {
    measurer = getMeasurer();
    setMeasurer(measurer);
  }

  if (!breakpoint) {
    breakpoint = getBreakpointFromMeasurer(measurer);
    setBreakpoint(breakpoint);
  }

  return getBreakpointInfo(breakpoint);
}

function getBreakpointFromMeasurer(measurer: Element) {
  // Note: this is mocked to always return 'md' in unit tests in
  // vitest.setup.ts
  return window
    .getComputedStyle(measurer, '::before')
    .content.replace(/\W/g, '') as BreakpointType;
}

/**
 * Gets the breakpoint measurer element from the DOM. Adds it first if it
 * doesn't exist yet.
 */
function getMeasurer() {
  let measurer = document.getElementById(BREAKPOINT_MEASURER_ID);

  // If it doesn't exist in the dom yet, create it
  if (!measurer) {
    measurer = document.createElement('div');
    measurer.id = BREAKPOINT_MEASURER_ID;
    measurer.ariaHidden = 'true';

    // For each breakpoint, we change the size (so the ResizeObserver calls
    // our observer function again), and we change the content to the name
    // of the breakpoint, so we can peek which name is currently displayed.
    measurer.className = clsw(`
        absolute -top-[9999px] -left-[9999px] -z-[9999]

        w-1 before:content-['xs']
        sm:w-2 sm:before:content-['sm']
        md:w-3 md:before:content-['md']
        lg:w-4 lg:before:content-['lg']
        xl:w-5 xl:before:content-['xl']
      `);

    document.body.appendChild(measurer);
  }

  return measurer;
}

const getBreakpointInfo = memoize((breakpoint: BreakpointType) => {
  const isXlUp = breakpoint === 'xl';
  const isLgUp = isXlUp || breakpoint === 'lg';
  const isMdUp = isLgUp || breakpoint === 'md';
  const isSmUp = isMdUp || breakpoint === 'sm';

  return {
    breakpoint,

    isXsUp: true,
    isXs: !isSmUp,
    isXsDown: !isSmUp,

    isSmUp,
    isSm: isSmUp && !isMdUp,
    isSmDown: !isMdUp,

    isMdUp,
    isMd: isMdUp && !isLgUp,
    isMdDown: !isMdUp,

    isLgUp,
    isLg: isLgUp && !isXlUp,
    isLgDown: !isLgUp,

    isXlUp,
    isXl: isXlUp,
    isXlDown: true,
  };
});
