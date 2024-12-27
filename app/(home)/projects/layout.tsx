import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
