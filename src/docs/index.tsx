import * as React from 'react';

import { ComponentName } from './ComponentName';
import { ControlStates } from './ControlStates';
import { FakeCanvas } from './FakeCanvas';
import { FormControlPlaceholder } from './FormControlPlaceholder';
import { FormikDemo } from './FormikDemo';
import { PrettyPrint } from './PrettyPrint';
import { Props } from './Props';
import { ReactHookFormDemo } from './ReactHookFormDemo';
import { Sizing } from './Sizing';
import { TableOfContents } from './TableOfContents';

/**
 * A namespace for the available helper components for common documentation
 * patterns in stories & mdx files.
 *
 * This is a default export to encourage namespaced usage, which will help
 * readers of the docs more easily distinguish between first-class NickUI
 * components (like Button and Checkbox) and these helper components, which
 * are only available internally in this project.
 *
 * Example usage in an .mdx file:
 *
 * import Docs from '@/docs';
 *
 * # My docs!
 *
 * Go to <Docs of="Button" />.  <- Docs is a shortcut to Docs.ComponentName!
 *
 * <Docs.TableOfContents />
 */
export default function Docs(
  props: React.ComponentProps<typeof ComponentName>,
) {
  return <ComponentName {...props} />;
}

Docs.ControlStates = ControlStates;
Docs.ComponentName = ComponentName;
Docs.FakeCanvas = FakeCanvas;
Docs.FormControlPlaceholder = FormControlPlaceholder;
Docs.FormikDemo = FormikDemo;
Docs.PrettyPrint = PrettyPrint;
Docs.Props = Props;
Docs.ReactHookFormDemo = ReactHookFormDemo;
Docs.Sizing = Sizing;
Docs.TableOfContents = TableOfContents;
