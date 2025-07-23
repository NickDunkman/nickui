import * as React from 'react';

import { SizerType } from '@/types';

import { useBreakpoint } from './useBreakpoint';

export function useResolvedSizer(
  responsiveSizer: SizerType | SizerType[] | undefined,
) {
  const breakpoint = useBreakpoint();

  const responsiveSizers = Array.isArray(responsiveSizer)
    ? responsiveSizer
    : responsiveSizer
      ? [responsiveSizer]
      : [];

  return React.useMemo(() => {
    if (!responsiveSizers.length) {
      return 'base';
    }

    // Return the biggest specified sizer that applies to the current screen
    // size.

    if (breakpoint.isXlUp) {
      if (responsiveSizers.includes('xl:xl')) {
        return 'xl';
      }
      if (responsiveSizers.includes('xl:lg')) {
        return 'lg';
      }
      if (responsiveSizers.includes('xl:base')) {
        return 'base';
      }
      if (responsiveSizers.includes('xl:sm')) {
        return 'sm';
      }
      if (responsiveSizers.includes('xl:xs')) {
        return 'xs';
      }
    }

    if (breakpoint.isLgUp) {
      if (responsiveSizers.includes('lg:xl')) {
        return 'xl';
      }
      if (responsiveSizers.includes('lg:lg')) {
        return 'lg';
      }
      if (responsiveSizers.includes('lg:base')) {
        return 'base';
      }
      if (responsiveSizers.includes('lg:sm')) {
        return 'sm';
      }
      if (responsiveSizers.includes('lg:xs')) {
        return 'xs';
      }
    }

    if (breakpoint.isMdUp) {
      if (responsiveSizers.includes('md:xl')) {
        return 'xl';
      }
      if (responsiveSizers.includes('md:lg')) {
        return 'lg';
      }
      if (responsiveSizers.includes('md:base')) {
        return 'base';
      }
      if (responsiveSizers.includes('md:sm')) {
        return 'sm';
      }
      if (responsiveSizers.includes('md:xs')) {
        return 'xs';
      }
    }

    if (breakpoint.isSmUp) {
      if (responsiveSizers.includes('sm:xl')) {
        return 'xl';
      }
      if (responsiveSizers.includes('sm:lg')) {
        return 'lg';
      }
      if (responsiveSizers.includes('sm:base')) {
        return 'base';
      }
      if (responsiveSizers.includes('sm:sm')) {
        return 'sm';
      }
      if (responsiveSizers.includes('sm:xs')) {
        return 'xs';
      }
    }

    if (responsiveSizers.includes('xl')) {
      return 'xl';
    }
    if (responsiveSizers.includes('lg')) {
      return 'lg';
    }
    if (responsiveSizers.includes('base')) {
      return 'base';
    }
    if (responsiveSizers.includes('sm')) {
      return 'sm';
    }
    if (responsiveSizers.includes('xs')) {
      return 'xs';
    }

    return 'base';
    // Using a spread here so that our dependencies array doesn't change
    // when `responsiveSizers` is just a new array w/ the same items
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint, ...responsiveSizers]);
}
