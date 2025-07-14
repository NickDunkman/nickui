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
      if (asArray.includes(Sizer.xlLarge)) {
        return Sizer.large;
      }
      if (asArray.includes(Sizer.xlMedium)) {
        return Sizer.medium;
      }
      if (asArray.includes(Sizer.xlSmall)) {
        return Sizer.small;
      }
    }

    if (breakpoint.isLgUp) {
      if (asArray.includes(Sizer.lgLarge)) {
        return Sizer.large;
      }
      if (asArray.includes(Sizer.lgMedium)) {
        return Sizer.medium;
      }
      if (asArray.includes(Sizer.lgSmall)) {
        return Sizer.small;
      }
    }

    if (breakpoint.isMdUp) {
      if (asArray.includes(Sizer.mdLarge)) {
        return Sizer.large;
      }
      if (asArray.includes(Sizer.mdMedium)) {
        return Sizer.medium;
      }
      if (asArray.includes(Sizer.mdSmall)) {
        return Sizer.small;
      }
    }

    if (breakpoint.isSmUp) {
      if (asArray.includes(Sizer.smLarge)) {
        return Sizer.large;
      }
      if (asArray.includes(Sizer.smMedium)) {
        return Sizer.medium;
      }
      if (asArray.includes(Sizer.smSmall)) {
        return Sizer.small;
      }
    }

    if (asArray.includes(Sizer.large)) {
      return Sizer.large;
    }
    if (asArray.includes(Sizer.medium)) {
      return Sizer.medium;
    }
    if (asArray.includes(Sizer.small)) {
      return Sizer.small;
    }
  }, [breakpoint, responsiveSizer]);
}
