function sluggify(str: string) {
  return str.replace(/\W+/g, '-').toLowerCase();
}

export function getStoryId(componentName: string, storyName: string) {
  const title = getStoryTitle(componentName);
  return title ? `${sluggify(title)}--${sluggify(storyName)}` : null;
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
    case 'Aside':
    case 'Shout':
    case 'Toast':
      return `Notices/${componentName}`;
    default:
      return null;
  }
}
