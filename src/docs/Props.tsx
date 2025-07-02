import { ArgTypes, Canvas, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { StoriesModule } from '@/types';

import { DocsLink } from './DocsLink';
import { Name } from './Name';

const commonFieldProps = ['label', 'explainer', 'hint', 'error', 'required'];

/**
 * These are the elements that React has custom docs for at
 * https://react.dev/reference/react-dom/components/<element>
 */
const allReactDocs = ['input', 'option', 'select', 'textarea'];

function ucFirst(str: string) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

/**
 * Helper for easily documenting the props for a component, especially for
 * breaking out props from a wrapper component in a separate section.
 */
export function Props({
  of,
  nativeBase,
  wrapper,
  exclude,
}: {
  of: StoriesModule;
  nativeBase: string;
  wrapper?: 'Field' | 'Fieldset' | 'CheckedField';
  exclude?: string[];
}) {
  const componentName = of.default.title.split('/').pop();

  const wrapperStory =
    wrapper === 'Field'
      ? of.FieldLayout
      : wrapper === 'Fieldset'
        ? of.FieldsetLayout
        : wrapper === 'CheckedField'
          ? of.CheckedFieldLayout
          : null;

  return (
    <>
      <Markdown options={{ overrides: { Name } }}>
        {`
## ${wrapper ? `${componentName}-specific p` : 'P'}rops

In addition to some custom props, <Name of="${componentName}" /> takes all the
props that can be used with
[HTML${ucFirst(nativeBase)}Element](https://react.dev/reference/react-dom/components/${allReactDocs.includes(nativeBase) ? nativeBase : 'common'}).
Here are some of the most commonly used:
        `}
      </Markdown>

      <ArgTypes
        of={of}
        exclude={[...(wrapper ? commonFieldProps : []), ...(exclude || [])]}
        sort="requiredFirst"
      />

      {wrapper && (
        <>
          <Markdown options={{ overrides: { DocsLink, Name } }}>
            {`
## Standard ${wrapper} layout

Instead of wrapping with a <DocsLink of="${wrapper}" /> manually, you can just
pass these props directly to <Name of="${componentName}" />. Accessibility
is handled for you.
        `}
          </Markdown>

          {wrapperStory && <Canvas of={wrapperStory} />}

          <ArgTypes
            of={of}
            include={commonFieldProps}
            exclude={exclude}
            sort="requiredFirst"
          />
        </>
      )}
    </>
  );
}
