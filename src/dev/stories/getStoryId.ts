import { getStoryTitle } from './getStoryTitle';

function sluggify(str: string) {
  return str.replace(/\W+/g, '-').toLowerCase();
}

export function getStoryId(componentName: string, storyName: string) {
  const title = getStoryTitle(componentName);
  return title ? `${sluggify(title)}--${sluggify(storyName)}` : null;
}
