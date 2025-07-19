import * as React from 'react';

import { Sizer } from '@/constants';

import { useBreakpoint } from './useBreakpoint';

export function useResolvedSizer(responsiveSizer: Sizer | Sizer[] | undefined) {
  const breakpoint = useBreakpoint();

  return React.useMemo(() => {
    if (!breakpoint || !responsiveSizer) {
      return undefined;
    }

    const asArray = Array.isArray(responsiveSizer)
      ? responsiveSizer
      : [responsiveSizer];

    // Return the biggest specified sizer that applies to the current screen
    // size.

    if (breakpoint.isXlUp) {
      if (asArray.includes(Sizer.xlXl)) {
        return Sizer.xl;
      }
      if (asArray.includes(Sizer.xlLg)) {
        return Sizer.lg;
      }
      if (asArray.includes(Sizer.xlBase)) {
        return Sizer.base;
      }
      if (asArray.includes(Sizer.xlSm)) {
        return Sizer.sm;
      }
      if (asArray.includes(Sizer.xlXs)) {
        return Sizer.xs;
      }
    }

    if (breakpoint.isLgUp) {
      if (asArray.includes(Sizer.lgXl)) {
        return Sizer.xl;
      }
      if (asArray.includes(Sizer.lgLg)) {
        return Sizer.lg;
      }
      if (asArray.includes(Sizer.lgBase)) {
        return Sizer.base;
      }
      if (asArray.includes(Sizer.lgSm)) {
        return Sizer.sm;
      }
      if (asArray.includes(Sizer.lgXs)) {
        return Sizer.xs;
      }
    }

    if (breakpoint.isMdUp) {
      if (asArray.includes(Sizer.mdXl)) {
        return Sizer.xl;
      }
      if (asArray.includes(Sizer.mdLg)) {
        return Sizer.lg;
      }
      if (asArray.includes(Sizer.mdBase)) {
        return Sizer.base;
      }
      if (asArray.includes(Sizer.mdSm)) {
        return Sizer.sm;
      }
      if (asArray.includes(Sizer.mdXs)) {
        return Sizer.xs;
      }
    }

    if (breakpoint.isSmUp) {
      if (asArray.includes(Sizer.smXl)) {
        return Sizer.xl;
      }
      if (asArray.includes(Sizer.smLg)) {
        return Sizer.lg;
      }
      if (asArray.includes(Sizer.smBase)) {
        return Sizer.base;
      }
      if (asArray.includes(Sizer.smSm)) {
        return Sizer.sm;
      }
      if (asArray.includes(Sizer.smXs)) {
        return Sizer.xs;
      }
    }

    if (asArray.includes(Sizer.xl)) {
      return Sizer.xl;
    }
    if (asArray.includes(Sizer.lg)) {
      return Sizer.lg;
    }
    if (asArray.includes(Sizer.base)) {
      return Sizer.base;
    }
    if (asArray.includes(Sizer.sm)) {
      return Sizer.sm;
    }
    if (asArray.includes(Sizer.xs)) {
      return Sizer.xs;
    }

    return Sizer.base;
  }, [breakpoint, responsiveSizer]);
}
