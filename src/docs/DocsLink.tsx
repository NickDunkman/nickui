import { AnchorMdx } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { Name } from './Name';

/** Given a component name, renders a fancy-looking link to its docs */
export function DocsLink({ of }: { of: string }) {
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

  return (
    <AnchorMdx
      href={`/docs/${docsTitle.replace(/\W+/g, '-').toLowerCase()}--docs`}
      target="_self"
    >
      <Name of={of} link />
    </AnchorMdx>
  );
}
