import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/Zac-Zajdel',
  nav: {
    title: 'Learning With Zac',
  },
  links: [
    {
      text: 'Blog',
      label: 'Visit Blog',
      url: '/blogs',
      active: 'nested-url',
    },
    {
      text: 'Projects',
      label: 'Visit Projects',
      url: '/projects',
      active: 'nested-url',
    },
    {
      text: 'About',
      label: 'Visit About Me',
      url: '/about',
      active: 'nested-url',
    },
  ],
};
