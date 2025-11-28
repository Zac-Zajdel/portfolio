export type Project = {
  title: string;
  url: string;
  github: string;
  description: string;
  slug: string;
  image: string | null;
  workInProgress?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Bookmark Oasis',
    url: 'https://www.bookmarkoasis.com/',
    github: 'https://github.com/Zac-Zajdel/bookmark-oasis',
    description: 'Personalized Browser Bookmarking.',
    slug: 'oasis',
    image: '/static/bookmark-oasis.png',
  },
  {
    title: 'Feat Sync',
    url: 'https://feat-sync.vercel.app/',
    github: 'https://github.com/Zac-Zajdel/feat-sync',
    description: 'Scope Creep Management.',
    slug: 'feat_sync',
    image: null,
    workInProgress: true,
  },
];
