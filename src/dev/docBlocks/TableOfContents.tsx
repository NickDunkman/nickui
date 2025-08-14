import { Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

type HeadingType = {
  id: string;
  title: string;
  level: number;
  subHeadings: HeadingType[];
};

/**
 * Custom doc block for rendering a table of contents on an mdx doc.
 * Automatically parses out the <h2> headings on the doc and shows a link
 * for each.
 */
export function TableOfContents() {
  const [headings, setHeadings] = React.useState<HeadingType[]>([]);
  React.useLayoutEffect(() => {
    const newHeadings: HeadingType[] =
      // Select all headings
      [
        ...(document
          .getElementById('storybook-docs')
          ?.querySelectorAll<HTMLHeadingElement>(
            ':scope h2, :scope h3, :scope h4, :scope h5, :scope h6',
          ) || []),
      ]
        // filter out those inside of canvases (those are part of the demos, not the docs)
        .filter((heading) => !heading.closest('.docs-faux-canvas, .docs-story'))
        .map((heading) => ({
          id: heading.id,
          title: heading.innerText,
          level: Number(heading.tagName.slice(1)),
          subHeadings: [],
        }));

    // Go through each heading and add it as a child heading to the most
    // recently preceeding heading with a smaller level, if any
    for (var i = 1; i < newHeadings.length; i++) {
      // Find the first preceding section with a heading level greater than this heading's level, and add it to that heading's subsections
      for (var j = i; j >= 0; j--) {
        if (newHeadings[j].level < newHeadings[i].level) {
          newHeadings[j].subHeadings.push(newHeadings[i]);
          break;
        }
      }
    }

    // Now, the top-level array should only include direct children which are at
    // the level of the first child, or below
    setHeadings(
      newHeadings.filter((heading) => heading.level <= newHeadings[0].level),
    );
  }, []);

  return (
    <HeadingList
      headings={headings}
      style={{
        margin: '25px 0 40px',
        paddingLeft: 15,
      }}
    />
  );
}

// We can only go 6 levels deep (h1 -> h6), so only need 6 different list
// style types
const LIST_STYLE_TYPE_PROGRESSION = [
  'decimal',
  'lower-alpha',
  'lower-roman',
  'lower-greek',
  'hiragana',
  'georgian',
];

function HeadingList({
  headings,
  style,
}: {
  headings: HeadingType[];
  style?: React.CSSProperties;
}) {
  const listStyleType = style?.listStyleType || LIST_STYLE_TYPE_PROGRESSION[0];
  const nextListStyleType =
    LIST_STYLE_TYPE_PROGRESSION[
      LIST_STYLE_TYPE_PROGRESSION.indexOf(listStyleType) + 1
    ];

  return (
    <ol
      style={{
        ...style,
        listStyleType,
      }}
    >
      {headings.map((heading) => (
        <li key={heading.id}>
          <Markdown>
            {`
[${stringifyTags(heading.title)}](#${heading.id})
            `}
          </Markdown>
          {heading.subHeadings.length > 0 && (
            <HeadingList
              headings={heading.subHeadings}
              style={{
                padding: '5px 0 10px 20px',
                listStyleType: nextListStyleType,
              }}
            />
          )}
        </li>
      ))}
    </ol>
  );
}

/**
 * Markdown removes the backtick (`) characters from our original markdown
 * where we created the headings in the .mdx files. So when we regurgitate
 * the heading text in the table of contents, we need to convert tags to just
 * tag-name strings, otherwise the corresponding element would be rendered.
 *
 * E.g. in the .mdx file:
 *
 *   ## Lol this is a heading about an `<input>`
 *
 * In the table of contents, we want to render:
 *
 *   1. Lol this is a heading about an input
 *
 * Instead of:
 *
 *   2. Lol this is a headinbg about an <input>
 */
function stringifyTags(str: string) {
  return str.replace(/>/g, '').replace(/</g, '');
}
