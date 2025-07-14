import * as React from 'react';

import { FieldSizer } from '@/constants';

import { useBreakpoint } from './useBreakpoint';

export function useResolvedFieldSizer(
  responsiveFieldSizer: FieldSizer | FieldSizer[] | undefined,
) {
  const breakpoint = useBreakpoint();

  return React.useMemo(() => {
    if (!breakpoint || !responsiveFieldSizer) {
      return undefined;
    }

    const asArray = Array.isArray(responsiveFieldSizer)
      ? responsiveFieldSizer
      : [responsiveFieldSizer];

    // Return the biggest specified sizer that applies to the current screen
    // size.

    if (breakpoint.isXlUp) {
      if (asArray.includes(FieldSizer.xlLarge)) {
        return FieldSizer.large;
      }
      if (asArray.includes(FieldSizer.xlMedium)) {
        return FieldSizer.medium;
      }
      if (asArray.includes(FieldSizer.xlSmall)) {
        return FieldSizer.small;
      }
    }

    if (breakpoint.isLgUp) {
      if (asArray.includes(FieldSizer.lgLarge)) {
        return FieldSizer.large;
      }
      if (asArray.includes(FieldSizer.lgMedium)) {
        return FieldSizer.medium;
      }
      if (asArray.includes(FieldSizer.lgSmall)) {
        return FieldSizer.small;
      }
    }

    if (breakpoint.isMdUp) {
      if (asArray.includes(FieldSizer.mdLarge)) {
        return FieldSizer.large;
      }
      if (asArray.includes(FieldSizer.mdMedium)) {
        return FieldSizer.medium;
      }
      if (asArray.includes(FieldSizer.mdSmall)) {
        return FieldSizer.small;
      }
    }

    if (breakpoint.isSmUp) {
      if (asArray.includes(FieldSizer.smLarge)) {
        return FieldSizer.large;
      }
      if (asArray.includes(FieldSizer.smMedium)) {
        return FieldSizer.medium;
      }
      if (asArray.includes(FieldSizer.smSmall)) {
        return FieldSizer.small;
      }
    }

    if (asArray.includes(FieldSizer.large)) {
      return FieldSizer.large;
    }
    if (asArray.includes(FieldSizer.medium)) {
      return FieldSizer.medium;
    }
    if (asArray.includes(FieldSizer.small)) {
      return FieldSizer.small;
    }
  }, [breakpoint, responsiveFieldSizer]);
}
