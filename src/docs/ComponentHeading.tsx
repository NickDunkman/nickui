import { AnchorMdx, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { ComponentName } from './ComponentName';

/**
 * Helper for easily showing the "Control States" section in a component's docs
 */
export function ComponentHeading({ of }: { of: string }) {
  return (
    <div className="flex w-full items-baseline">
      <div>
        <Markdown
          options={{ overrides: { ComponentName } }}
        >{`#<ComponentName of="${of}" />`}</Markdown>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <Markdown
          options={{ overrides: { SourceLink } }}
        >{`<SourceLink of={${of}} />`}</Markdown>
      </div>
    </div>
  );
}

function SourceLink({
  of,
  ...props
}: { of: string } & React.ComponentProps<typeof AnchorMdx>) {
  return (
    <AnchorMdx
      {...props}
      target="_blank"
      href={`https://github.com/NickDunkman/nickui/tree/main/src/components/${of}`}
    >
      <img
        className="relative -top-0.5 mr-2 inline"
        src="./github-mark.svg"
        width="20"
        alt=""
      />
      Source code
    </AnchorMdx>
  );
}
