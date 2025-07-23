import { Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { ComponentName } from './ComponentName';
import { SourceLink } from './SourceLink';

/** Custom doc block for rendering the heading of a Components mdx doc */
export function ComponentHeading({ of }: { of: string }) {
  return (
    <div className="flex w-full items-baseline" style={{ marginTop: -30 }}>
      <div>
        <Markdown
          options={{ overrides: { ComponentName } }}
        >{`#<ComponentName of="${of}" />`}</Markdown>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <Markdown
          options={{ overrides: { SourceLink } }}
        >{`<SourceLink path="/tree/main/src/components/${of}" />`}</Markdown>
      </div>
    </div>
  );
}
