function sluggify(str: string) {
  return str.replace(/\W+/g, '-').toLowerCase();
}

export function getStoryId(componentName: string, storyName: string) {
  return `${sluggify(getStoryTitle(componentName))}--${sluggify(storyName)}`;
}

export function getStoryTitle(componentName: string) {
  switch (componentName) {
    case 'Button':
    case 'Checkbox':
    case 'Checkboxes':
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
    case 'Callout':
    case 'Fwoop':
    case 'Shout':
      return `Notices/${componentName}`;
    default:
      return componentName;
  }
}
