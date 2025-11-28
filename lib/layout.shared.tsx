import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, FolderGit2, User } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/Zac-Zajdel',
    nav: {
      title: 'Learning With Zac',
    },
    links: [
      {
        icon: <BookIcon />,
        text: 'Blog',
        label: 'Visit Blog',
        url: '/blogs',
        active: 'nested-url',
      },
      {
        icon: <FolderGit2 />,
        text: 'Projects',
        label: 'Visit Projects',
        url: '/projects',
        active: 'nested-url',
      },
      {
        icon: <User />,
        text: 'About',
        label: 'Visit About Me',
        url: '/about',
        active: 'nested-url',
      },
    ],
  };
}
