import { Canvas, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { StoriesModule } from '@/types';

/**
 * Helper for easily documenting the props for a field component which uses
 * either Field or Fieldset. Renders the component-specific props in one table,
 * and the common field props in another table below.
 */
export function Sizing({ of }: { of: StoriesModule }) {
  return (
    <>
      <Markdown>
        {`
## Standard sizing

Sizing is done via the \`sizer\` prop. You can pass a single sizer as a string,
or an array of sizers if you want different sizing at different breakpoints.

- The standard sizes are \`"small"\`, \`"base"\` (the default), and \`"large"\`
- You can also do Tailwind-style responsive sizing using prefixes: \`"sm:"\`, \`"md:"\`, \`"lg:"\`, and \`"xl:"\`.

For example, \`sizer={["small", "sm:base", "md:large"]}\` will show the small size on screens smaller than the "sm" breakpoint, then the base size between the "sm" and "md" breakpoints, and then the large size above the "md" breakpoint.
        `}
      </Markdown>

      {of.AllSizes && <Canvas of={of.AllSizes} />}
    </>
  );
}
