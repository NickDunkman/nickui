export function getStoryTitle(componentName: string) {
  switch (componentName) {
    case 'Button':
    case 'Checkbox':
    case 'Checkboxes':
    case 'Money':
    case 'Radio':
    case 'Radios':
    case 'Select':
    case 'Slider':
    case 'Switch':
    case 'Switches':
    case 'Text':
    case 'TextArea':
      return `Form controls/${componentName}`;
    case 'CheckedField':
    case 'Field':
    case 'Fieldset':
      return `Field layouts/${componentName}`;
    case 'Aside':
    case 'Shout':
    case 'Toast':
      return `Notices/${componentName}`;
    default:
      return null;
  }
}
