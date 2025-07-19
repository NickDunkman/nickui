import { Canvas, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { StoriesModule } from '@/types';

/** Custom doc block for rendering a Component's "Standard sizing" section */
export function Sizers({ of }: { of: StoriesModule }) {
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

      {of.AllSizers && <Canvas of={of.AllSizers} />}
    </>
  );
}
