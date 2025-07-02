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
## Standard sizing options

Sizing is done via the \`sizer\` prop. You can pass \`“small”\`, \`“medium”\`,
or \`“large”\`. In keeping with the mobile-first philosophy of Tailwind, small
is the default size.
        `}
      </Markdown>

      {of.AllSizes && <Canvas of={of.AllSizes} />}
    </>
  );
}
