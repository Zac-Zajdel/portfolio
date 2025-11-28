import Link from 'next/link';
import type { HTMLAttributes } from 'react';

export default function Logo(props: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      aria-label="Learn with Zac"
      className={`flex items-center ${props.className ?? ''}`}
      {...props}
    >
      <svg
        aria-hidden="true"
        className="h-[30px]"
        viewBox="0 0 24 24"
        role="img"
      >
        <path
          d="M0,0v24h24v-24L0,0Z"
          fill="#010101"
        />
        <path
          d="M3,3v18h18v-18L3,3Z"
          fill="#fff"
        />
        <path
          d="M5,5v14h14v-14L5,5Z"
          fill="#010101"
        />
        <path
          d="M9,8l3,2-3,6h7l-3-2l3-6h-7Z"
          fill="#fff"
        />
      </svg>
      <span
        className="mx-2 mt-[0.2rem] hidden font-bold select-none md:inline"
        title="Learn with Zac"
      >
        Learn with Zac
      </span>
    </Link>
  );
}
