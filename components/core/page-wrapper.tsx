import { cn } from 'fumadocs-ui/utils/cn';

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn('xl:px-42 container mx-auto px-5', className)}>
      {children}
    </main>
  );
}
