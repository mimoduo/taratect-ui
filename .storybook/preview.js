import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';

addDecorator((story) => (
  story()
));

const customViewports = {
  iphone5: {
    name: 'iPhone 5',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  iphone6: {
    name: 'iPhone 6',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
  iphonex: {
    name: 'iPhone X',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  },
  ipad: {
    name: 'iPad',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  ipad10p: {
    name: 'iPad Pro 10.5-in',
    styles: {
      height: '1112px',
      width: '834px',
    },
    type: 'tablet',
  },
  ipad12p: {
    name: 'iPad Pro 12.9-in',
    styles: {
      height: '1366px',
      width: '1024px',
    },
    type: 'tablet',
  },
};

export const parameters = {
  options: {
    storySort: (a, b) => {
      // We want the Welcome story at the top
      if (b[1].kind === 'Welcome') {
        return 1
      }

      // Sort the other stories by ID
      // https://github.com/storybookjs/storybook/issues/548#issuecomment-530305279
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },

  // https://storybook.js.org/docs/react/essentials/viewport
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
    defaultViewport: 'ipad12p'
  },
}