import { AnchorMdx, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

/** Given a component name, renders a fancy-looking link to its docs */
export function ComponentLink({ of }: { of: string }) {
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
    return <Markdown>{`\`<${of}>\``}</Markdown>;
  }

  return (
    <Markdown
      options={{
        forceInline: true,
        overrides: {
          code: CodeWithLinkStyle,
          a: AnchorMdx,
        },
      }}
    >
      {`
[\`<${of}>\`](/docs/${docsTitle.replace(/\W+/g, '-').toLowerCase()}--docs)
     `}
    </Markdown>
  );
}

function CodeWithLinkStyle(props: React.ComponentProps<'code'>) {
  return (
    <code
      {...props}
      style={{
        ...props.style,
        color: 'rgb(2, 156, 253)',
        fontWeight: 'bold',
      }}
    />
  );
}
