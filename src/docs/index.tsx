import * as React from 'react';

import { ComponentHeading } from './ComponentHeading';
import { ComponentName } from './ComponentName';
import { ControlStates } from './ControlStates';
import { FauxCanvas } from './FauxCanvas';
import { Flavoring } from './Flavoring';
import { FormControlPlaceholder } from './FormControlPlaceholder';
import { FormLibraryCompatibility } from './FormLibraryCompatibility';
import { PrettyPrint } from './PrettyPrint';
import { Props } from './Props';
import { Sizers } from './Sizers';
import { SourceLink } from './SourceLink';
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

Docs.ComponentHeading = ComponentHeading;
Docs.ComponentName = ComponentName;
Docs.ControlStates = ControlStates;
Docs.FauxCanvas = FauxCanvas;
Docs.Flavoring = Flavoring;
Docs.FormControlPlaceholder = FormControlPlaceholder;
Docs.FormLibraryCompatibility = FormLibraryCompatibility;
Docs.PrettyPrint = PrettyPrint;
Docs.Props = Props;
Docs.Sizers = Sizers;
Docs.SourceLink = SourceLink;
Docs.TableOfContents = TableOfContents;
