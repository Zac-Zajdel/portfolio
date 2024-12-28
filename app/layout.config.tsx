import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Learning With Zac',
  },
  links: [
    {
      text: 'Blog',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Projects',
      url: '/projects',
      active: 'nested-url',
    },
    {
      text: 'About',
      url: '/about',
      active: 'nested-url',
    },
  ],
};
