import { cn } from 'fumadocs-ui/utils/cn';

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn('container mx-auto px-5 xl:px-42', className)}>
      {children}
    </main>
  );
}
