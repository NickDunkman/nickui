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

// Can run code inside here after the manager UI is loaded
addons.register('NickUI Storybook manager UI fiddling', (api) => {
  // Remove blue outline when clicking the title in the sidebar
  const sidebarTitle = document.querySelector('a[title="NickUI"]');
  if (sidebarTitle) {
    (sidebarTitle as HTMLElement).style.borderColor = 'transparent';
  }

  // Nicely format the page <title>
  new MutationObserver(() => {
    if (document.title.endsWith('Storybook')) {
      let storyData;
      try {
        storyData = api.getCurrentStoryData();
      } catch (e) {}

      document.title = !storyData
        ? SITE_NAME
        : storyData.type === 'docs'
          ? `${SITE_NAME} ⋅ ${storyData.title.replace(/\//g, ' ⋅ ')}`
          : `${SITE_NAME} ⋅ ${storyData.title.replace(/\//g, ' ⋅ ')} ⋅ ${storyData.name}`;
    }
  }).observe(document.querySelector('title') as Node, {
    childList: true,
    subtree: true,
    characterData: true,
  });
});
