import * as React from 'react';

import { SizerType } from '@/types';

import { useBreakpoint } from './useBreakpoint';

export function useResolvedSizer(
  responsiveSizer: SizerType | SizerType[] | undefined,
) {
  const breakpoint = useBreakpoint();

  return React.useMemo(() => {
    if (!responsiveSizer) {
      return 'base';
    }

    const asArray = Array.isArray(responsiveSizer)
      ? responsiveSizer
      : [responsiveSizer];

    // Return the biggest specified sizer that applies to the current screen
    // size.

    if (breakpoint.isXlUp) {
      if (asArray.includes('xl:xl')) {
        return 'xl';
      }
      if (asArray.includes('xl:lg')) {
        return 'lg';
      }
      if (asArray.includes('xl:base')) {
        return 'base';
      }
      if (asArray.includes('xl:sm')) {
        return 'sm';
      }
      if (asArray.includes('xl:xs')) {
        return 'xs';
      }
    }

    if (breakpoint.isLgUp) {
      if (asArray.includes('lg:xl')) {
        return 'xl';
      }
      if (asArray.includes('lg:lg')) {
        return 'lg';
      }
      if (asArray.includes('lg:base')) {
        return 'base';
      }
      if (asArray.includes('lg:sm')) {
        return 'sm';
      }
      if (asArray.includes('lg:xs')) {
        return 'xs';
      }
    }

    if (breakpoint.isMdUp) {
      if (asArray.includes('md:xl')) {
        return 'xl';
      }
      if (asArray.includes('md:lg')) {
        return 'lg';
      }
      if (asArray.includes('md:base')) {
        return 'base';
      }
      if (asArray.includes('md:sm')) {
        return 'sm';
      }
      if (asArray.includes('md:xs')) {
        return 'xs';
      }
    }

    if (breakpoint.isSmUp) {
      if (asArray.includes('sm:xl')) {
        return 'xl';
      }
      if (asArray.includes('sm:lg')) {
        return 'lg';
      }
      if (asArray.includes('sm:base')) {
        return 'base';
      }
      if (asArray.includes('sm:sm')) {
        return 'sm';
      }
      if (asArray.includes('sm:xs')) {
        return 'xs';
      }
    }

    if (asArray.includes('xl')) {
      return 'xl';
    }
    if (asArray.includes('lg')) {
      return 'lg';
    }
    if (asArray.includes('base')) {
      return 'base';
    }
    if (asArray.includes('sm')) {
      return 'sm';
    }
    if (asArray.includes('xs')) {
      return 'xs';
    }

    return 'base';
  }, [breakpoint, responsiveSizer]);
}
