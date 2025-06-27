import { Canvas, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { getComponentName } from '@/utils/getComponentName';

/**
 * Helper for easily documenting the props for a field component which uses
 * either Field or Fieldset. Renders the component-specific props in one table,
 * and the common field props in another table below.
 */
export function FieldLayoutAndSizing({
  of: Component,
  wrapper,
  stories,
}: {
  of: React.ComponentType;
  reactDocs: string;
  wrapper?: 'Field' | 'Fieldset';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stories: any;
}) {
  const componentName = getComponentName(Component);

  const wrapperStory =
    wrapper === 'Field'
      ? stories.FieldLayout
      : wrapper === 'Fieldset'
        ? stories.FieldsetLayout
        : null;

  return (
    <>
      <Markdown>
        {`
## Standard ${wrapper || 'field'} ${wrapper ? 'layout and ' : ''}sizing
        `}
      </Markdown>
      {wrapper && (
        <>
          <Markdown>
            {`
${componentName} can optionally have each of the elements of a standard
[${wrapper}](/docs/forms-${wrapper.toLowerCase()}--docs): \`label\`,
\`explainer\`, \`hint\`, and \`error\`. ${componentName} automatically handles
the accessibility of these elements for you!
        `}
          </Markdown>

          {wrapperStory && <Canvas of={wrapperStory} />}
        </>
      )}

      <Markdown>
        Sizing is done via the `sizer` prop. You can pass `“small”`, `“medium”`,
        or `“large”`. In keeping with the mobile-first philosophy of Tailwind,
        small is the default size.
      </Markdown>

      {stories.AllSizes && <Canvas of={stories.AllSizes} />}
    </>
  );
}
