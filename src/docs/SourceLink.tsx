import { AnchorMdx } from '@storybook/addon-docs/blocks';
import * as React from 'react';

/**
 * Custom doc block for showing a link to some path in the NickUI Github repo
 */
export function SourceLink({
  path = '',
  markOnly = false,
  ...props
}: {
  path?: string;
  markOnly?: boolean;
} & React.ComponentProps<typeof AnchorMdx>) {
  return (
    <AnchorMdx
      {...props}
      target="_blank"
      href={`https://github.com/NickDunkman/nickui${path}`}
    >
      <img
        className="relative -top-0.5 mr-2 inline"
        src="./github-mark.svg"
        width={markOnly ? undefined : 20}
        alt=""
      />
      {!markOnly && 'Source code'}
    </AnchorMdx>
  );
}
