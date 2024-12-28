import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">About Page</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="font-semibold text-fd-foreground underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
