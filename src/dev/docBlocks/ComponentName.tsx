import { AnchorMdx } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { getStoryId } from '@/dev/stories/getStoryId';

/**
 * Custom doc block for rendering a consistent-looking Component name in the
 * the docs. By default, becomes a link to that Component's docs if it's not the
 * page you’re already on (override one way or the other with the `asLink`
 * prop).
 */
export function ComponentName({
  of,
  asLink,
}: {
  of: string;
  asLink?: boolean;
}) {
  const docsId = getStoryId(of, 'Docs');

  const componentExists = !!docsId;
  const withinComponentDocs = !!docsId && window.location.href.includes(docsId);
  const renderAsLink = asLink ?? (componentExists && !withinComponentDocs);

  const componentName = (
    <code
      style={{
        color: renderAsLink ? 'rgb(2, 156, 253)' : undefined,
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

  return renderAsLink ? (
    <AnchorMdx href={`/docs/${docsId}`} target="_self">
      {componentName}
    </AnchorMdx>
  ) : (
    componentName
  );
}
