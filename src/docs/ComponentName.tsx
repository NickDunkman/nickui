import { AnchorMdx } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { getStoryId } from '@/utils/stories';

/** Given a component name, renders a fancy-looking link to its docs */
export function ComponentName({ of }: { of: string }) {
  const docsId = getStoryId(of, 'Docs');
  const asLink = !window.location.href.includes(docsId);

  const componentName = (
    <code
      style={{
        color: asLink ? 'rgb(2, 156, 253)' : undefined,
        display: 'inline-block',
        fontWeight: 'bold',
        backgroundColor: 'rgb(247, 250, 252)',
        padding: '3px 5px',
        lineHeight: '1',
        margin: '0px 2px',
        whiteSpace: 'nowrap',
        borderRadius: 3,
        border: '1px solid rgb(236, 244, 249)',
      }}
    >
      &lt;{of}&gt;
    </code>
  );

  return asLink ? (
    <AnchorMdx href={`/docs/${docsId}`} target="_self">
      {componentName}
    </AnchorMdx>
  ) : (
    componentName
  );
}
