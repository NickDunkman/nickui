import * as React from 'react';

import { NoticeFlavorType, SizerType } from '@/types';
import { clsw } from '@/utils/clsw';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { shoutStyler } from './styles';

interface ShoutProps extends React.ComponentProps<'div'> {
  /** The inner content shown in the Shout */
  children?: React.ReactNode;
  /** Optionally add utility classes to the root element */
  className?: string;
  /** Changes the size of the Shout ("sm", "base", "lg") */
  sizer?: SizerType | SizerType[];
  /** Changes the color of the Shout ("info", "positive", "caution", "negative") */
  flavor?: NoticeFlavorType;
}

/**
 * Displays an important notice to the user, such as an error message, warning,
 * or congratulatory message. For a less prominent notice, use <Callout>
 * @param props {@link ShoutProps}
 */
export function Shout({ className, sizer, flavor, ...divProps }: ShoutProps) {
  const resolvedSizer = useResolvedSizer(sizer);
  const styles = shoutStyler({ sizer: resolvedSizer, flavor });
  return (
    <div
      {...divProps}
      className={clsw(styles, className)}
      data-nickui-sizer={Array.isArray(sizer) ? sizer.join(',') : sizer}
      data-nickui-resolved-sizer={resolvedSizer}
    />
  );
}
