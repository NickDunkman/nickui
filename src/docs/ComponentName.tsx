import { AnchorMdx } from '@storybook/addon-docs/blocks';
import * as React from 'react';

function getDocsId(docsTitle: string) {
  return `${docsTitle.replace(/\W+/g, '-').toLowerCase()}--docs`;
}

/** Given a component name, renders a fancy-looking link to its docs */
export function ComponentName({ of }: { of: string }) {
  const [docsTitle, setDocsTitle] = React.useState<string>();

  React.useEffect(() => {
    const componentStoriesPath = `../components/${of}/${of}.stories`;
    import(
      /* @vite-ignore */
      componentStoriesPath
    ).then((stories) => {
      setDocsTitle(stories.default.title);
    });
  }, [of]);

  if (!docsTitle) {
    return null;
  }

  const docsId = getDocsId(docsTitle);
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
