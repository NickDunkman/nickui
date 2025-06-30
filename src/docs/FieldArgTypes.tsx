import { ArgTypes, Markdown } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import { getComponentName } from '@/utils/getComponentName';

const commonFieldProps = [
  'className',
  'sizer',
  'label',
  'explainer',
  'hint',
  'error',
  'disabled',
  'required',
];

/**
 * These are the elements that React has custom docs for at
 * https://react.dev/reference/react-dom/components/<element>
 */
const allReactDocs = ['input', 'option', 'select', 'textarea'];

/**
 * Helper for easily documenting the props for a field component which uses
 * either Field or Fieldset. Renders the component-specific props in one table,
 * and the common field props in another table below.
 */
export function FieldArgTypes({
  of: Component,
  reactDocs,
  wrapper,
}: {
  of: React.ComponentType;
  reactDocs: string;
  wrapper?: 'Field' | 'Fieldset' | 'CheckedField';
}) {
  const componentName = getComponentName(Component);

  return (
    <>
      <Markdown>
        {`
## ${wrapper ? `${componentName}-specific p` : 'P'}rops

In addition to some custom props, ${componentName} takes all the props that can be used
with the native [&lt;${reactDocs}&gt;](https://react.dev/reference/react-dom/components/${allReactDocs.includes(reactDocs) ? reactDocs : 'common'}).
Here are some of the most commonly used:
        `}
      </Markdown>

      <ArgTypes
        of={Component}
        exclude={wrapper && commonFieldProps}
        sort="requiredFirst"
      />

      {wrapper && (
        <>
          <Markdown>
            {`
## Common ${wrapper} props

${componentName} also accepts some of the [${wrapper}](/docs/forms-${wrapper.toLowerCase()}--docs) props:
        `}
          </Markdown>

          <ArgTypes
            of={Component}
            include={commonFieldProps}
            sort="requiredFirst"
          />
        </>
      )}
    </>
  );
}
