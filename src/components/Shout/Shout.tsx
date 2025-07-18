import * as React from 'react';

import { NoticeFlavor, Sizer } from '@/constants';
import { clsw } from '@/utils/clsw';
import { useResolvedSizer } from '@/utils/useResolvedSizer';

import { shoutStyles } from './styles';

interface ShoutProps extends React.ComponentProps<'div'> {
  /** The inner content shown in the Shout */
  children?: React.ReactNode;
  /** Optionally add utility classes to the root element */
  className?: string;
  /** Changes the size of the Shout ("small", "base", "large") */
  sizer?: Sizer | Sizer[];
  /** Changes the color of the Shout ("info", "yep", "maybe", "nope") */
  flavor?: NoticeFlavor;
}

/**
 * Displays an important notice to the user, such as an error message, warning,
 * or congratulatory message. For a less prominent notice, use <Callout>
 * @param props {@link ShoutProps}
 */
export function Shout({ className, sizer, flavor, ...divProps }: ShoutProps) {
  const resolvedSizer = useResolvedSizer(sizer);
  const s = shoutStyles({ sizer: resolvedSizer, flavor });
  return <div {...divProps} className={clsw(s, className)} />;
}

Shout.sizer = Sizer;
Shout.flavor = NoticeFlavor;
