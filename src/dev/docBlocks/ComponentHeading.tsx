import { Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { ComponentName } from './ComponentName';
import { SourceLink } from './SourceLink';

/** Custom doc block for rendering the heading of a Components mdx doc */
export function ComponentHeading({ of }: { of: string }) {
  return (
    <div className="flex w-full items-baseline">
      <div>
        <Markdown
          options={{ overrides: { ComponentName } }}
        >{`#<ComponentName of="${of}" asLink={false} />`}</Markdown>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <Markdown
          options={{ overrides: { SourceLink } }}
        >{`<SourceLink path="/tree/main/src/components/${of}" markSize={20} />`}</Markdown>
      </div>
    </div>
  );
}
