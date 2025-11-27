import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p>
        You can open{' '}
        <Link
          href="/blogs"
          className="font-medium underline"
        >
          /blogs
        </Link>{' '}
        and see the blogs.
      </p>
    </div>
  );
}
