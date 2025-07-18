import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const SITE_NAME = 'NickUI';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'NickUI',
    brandImage: './nickui.svg',
  }),
});

// Custom addon that adds nicer formatting to the site title & prefixes with
// "NicKUI".
addons.register('titleNickUI', (api) => {
  const setTitle = () => {
    let storyData;
    try {
      storyData = api.getCurrentStoryData();
    } catch (e) {}

    document.title = !storyData
      ? SITE_NAME
      : storyData.type === 'docs'
        ? `${SITE_NAME} ⋅ ${storyData.title.replace(/\//g, ' ⋅ ')}`
        : `${SITE_NAME} ⋅ ${storyData.title.replace(/\//g, ' ⋅ ')} ⋅ ${storyData.name}`;
  };

  return new MutationObserver(() => {
    if (document.title.endsWith('Storybook')) {
      setTitle();
    }
  }).observe(document.querySelector('title') as Node, {
    childList: true,
    subtree: true,
    characterData: true,
  });
});
