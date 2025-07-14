import * as React from 'react';

import { clsw } from './clsw';
import { debounceToRepaint } from './debounceToRepaint';

const breakpointFinderId = 'nickui-breakpoint-finder';

/**
 * A hook that returns an object with information about which Tailwind
 * breakpoints are currently in effect, based on the screen size.
 *
 * Note: as implemented, this only works with Tailwind's default breakpoints
 * (xs, sm, md, lg, xl). However, it *is* able to work with a downstream
 * application codebase's overrides to those breakpoints (such as changing
 * "sm" from 640px to 800px), since it detects the current breakpoint from an
 * element that uses tailwind breakpoint classes.
 *
 * There's probably a smarter way to dynamically load where the config
 * would be located in such a codebase, and load the breakpoint config from
 * there, so that this hook doesn't need to return possibly `undefined` until
 * we install our special element. That would also allow us to include custom
 * breakpoints (such as an "xxxxl" breakpoint).
 */
export function useBreakpoint() {
  // Holds the current breakpoint string (i.e. '"sm"'). This string has quotes
  // on it when it comes out of getComputedStyle(). Deferring stripping that off
  // until it is used to compute the return value, since that can happen *far*
  // less often than the window resize event.
  const [currentBreakpoint, setCurrentBreakpoint] = React.useState<string>();

  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let breakpointFinder = document.getElementById(breakpointFinderId);

    // We only need to install this element once -- other components calling
    // this hook can just use the same element.
    if (!breakpointFinder) {
      breakpointFinder = document.createElement('div');
      breakpointFinder.id = breakpointFinderId;
      breakpointFinder.className = clsw(`
        absolute
        hidden
        before:content-['xs']
        sm:before:content-['sm']
        md:before:content-['md']
        lg:before:content-['lg']
        xl:before:content-['xl']
      `);
      breakpointFinder.ariaHidden = 'true';
      document.body.appendChild(breakpointFinder);
    }

    // Now that we have the finder installed, we can set the initial breakpoint.
    // The hook below will only update it if/when a window resize occurs.
    setCurrentBreakpoint(getBreakpointFromFinder(breakpointFinder));
  }, []);

  // Add a window.onresize event that updates the currentBreakpoint value
  // (only) when it needs to change.
  React.useLayoutEffect(() => {
    const breakpointFinder = document.getElementById(breakpointFinderId);

    if (!breakpointFinder) {
      setCounter(counter + 1);
    } else {
      const updateBreakpointOnResize = debounceToRepaint(() => {
        if (breakpointFinder) {
          const newBreakpoint = getBreakpointFromFinder(breakpointFinder);

          if (newBreakpoint !== currentBreakpoint) {
            setCurrentBreakpoint(newBreakpoint);
          }
        }
      });

      window.addEventListener('resize', updateBreakpointOnResize);

      return () => {
        window.removeEventListener('resize', updateBreakpointOnResize);
      };
    }
  }, [counter, currentBreakpoint]);

  return React.useMemo(() => {
    if (!currentBreakpoint) {
      return;
    }

    const isXlUp = currentBreakpoint === '"xl"';
    const isLgUp = isXlUp || currentBreakpoint === '"lg"';
    const isMdUp = isLgUp || currentBreakpoint === '"md"';
    const isSmUp = isMdUp || currentBreakpoint === '"sm"';

    return {
      currentBreakpoint: currentBreakpoint?.replace(/\W/g, ''),

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
  }, [currentBreakpoint]);
}

function getBreakpointFromFinder(breakpointFinder: Element) {
  // Note: this is mocked to always return '"md"' in unit tests in
  // vitest.setup.ts
  return window.getComputedStyle(breakpointFinder, '::before').content;
}
