import { Canvas, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { StoriesModule } from '@/types';

/** Custom doc block for rendering a Component's "Flavoring" section */
export function Flavoring({ of }: { of: StoriesModule }) {
  return (
    <>
      <Markdown>
        {`
## Flavoring

Coloring is done via the \`flavor\` prop. You can pass \`"neutral"\` (the
default), \`"positive"\`, \`"caution"\` or \`"negative"\`.
        `}
      </Markdown>

      {of.AllFlavors && (
        <Canvas
          of={of.AllFlavors}
          source={
            of.AllFlavors?.parameters?.source
              ? {
                  language: 'tsx',
                  code: of.AllFlavors?.parameters?.source,
                }
              : undefined
          }
        />
      )}

      {of.AllSecondaryFlavors && (
        <>
          <Markdown>
            {`
You can also use the \`secondary\` prop for more muted look to each flavor.
        `}
          </Markdown>

          <Canvas
            of={of.AllSecondaryFlavors}
            source={
              of.AllSecondaryFlavors?.parameters?.source
                ? {
                    language: 'tsx',
                    code: of.AllSecondaryFlavors?.parameters?.source,
                  }
                : undefined
            }
          />
        </>
      )}
    </>
  );
}
