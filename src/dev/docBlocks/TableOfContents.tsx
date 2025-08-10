import { Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

/**
 * Custom doc block for rendering a table of contents on an mdx doc.
 * Automatically parses out the <h2> headings on the doc and shows a link
 * for each.
 */
export function TableOfContents() {
  const [sections, setSections] = React.useState<
    { id: string; title: string }[]
  >([]);
  React.useLayoutEffect(() => {
    setSections(
      [
        ...(document
          .getElementById('storybook-docs')
          ?.getElementsByTagName('h2') || []),
      ].map((heading) => ({
        id: heading.id,
        title: heading.innerText,
      })),
    );
  }, []);

  return (
    <ol
      style={{
        margin: '25px 0 40px',
        paddingLeft: 15,
        listStyleType: 'decimal',
      }}
    >
      {sections.map((section) => (
        <li key={section.id}>
          <Markdown>
            {`
[${section.title}](#${section.id})
            `}
          </Markdown>
        </li>
      ))}
    </ol>
  );
}
