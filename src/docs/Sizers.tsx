import { Canvas, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { StoriesModule } from '@/types';

/** Custom doc block for rendering a Component's "Responsive sizing" section */
export function Sizers({ of }: { of: StoriesModule }) {
  return (
    <>
      <Markdown>
        {`
## ${of.Responsive ? 'Responsive sizing' : 'Sizing'}

Sizing is done via the \`sizer\` prop & uses Tailwind terminology. The standard
sizes are: \`"xs"\`, \`"sm"\`,\`"base"\`,\`"lg"\`, and \`"xl"\` (\`"base"\` is
the default).
        `}
      </Markdown>

      {of.AllSizers && <Canvas of={of.AllSizers} />}

      {of.Responsive && (
        <>
          <Markdown>
            {`
You can also do Tailwind-style responsive sizing using breakpoint prefixes. For
example, \`sizer={['xs', 'md:base', 'xl:lg']}\` resolves to...

- The \`"xs"\` size below the \`"md"\` breakpoint
- The \`"base"\` size between the \`"md"\` and \'"xl"\` breakpoints
- The \`"lg"\` size above the \`"xl"\` breakpoint
        `}
          </Markdown>

          <Canvas of={of.Responsive} />
        </>
      )}
    </>
  );
}
