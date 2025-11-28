import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      className="mt-20"
      {...baseOptions()}
    >
      {children}
    </HomeLayout>
  );
}
