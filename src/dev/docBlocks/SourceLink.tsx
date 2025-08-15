import { AnchorMdx } from '@storybook/addon-docs/blocks';
import * as React from 'react';

/**
 * Custom doc block for showing a link to some path in the NickUI Github repo
 */
export function SourceLink({
  path = '',
  markOnly = false,
  markSize = 15,
  ...props
}: {
  path?: string;
  markSize?: number;
  markOnly?: boolean;
} & React.ComponentProps<typeof AnchorMdx>) {
  return (
    <AnchorMdx
      {...props}
      target="_blank"
      href={`https://github.com/NickDunkman/nickui${path}`}
    >
      <img
        className="relative -top-0.5 mr-1.5 ml-1 inline"
        src="./github-mark.svg"
        width={markSize}
        alt=""
      />
      {!markOnly && 'Source code'}
    </AnchorMdx>
  );
}
