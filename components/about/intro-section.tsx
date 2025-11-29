import SpotifyCard from '@/components/card/spotify-card';
import SpotifyCardSkeleton from '@/components/card/spotify-card-skeleton';
import PageTitle from '@/components/core/page-title';
import Image from 'next/image';
import { Suspense } from 'react';

export default function IntroSection() {
  return (
    <section>
      <PageTitle title="About" />
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-6">
        <aside className="col-span-1 md:col-span-2">
          <figure className="flex flex-col items-center text-center">
            <Image
              src="/static/me.jpg"
              alt="Zac Zajdel"
              width={152}
              height={152}
              className="size-48 rounded-full"
            />
            <figcaption className="mt-4">
              <h2 className="text-2xl">Zac Zajdel</h2>
              <p className="text-fd-muted-foreground mt-2">
                Full-Stack Software Engineer
              </p>
            </figcaption>
          </figure>

          <div className="mt-4 flex justify-center">
            <Suspense fallback={<SpotifyCardSkeleton />}>
              <SpotifyCard />
            </Suspense>
          </div>
        </aside>

        <article className="col-span-1 space-y-4 md:col-span-4">
          <p>Hi there! 👋</p>
          <p>
            I&apos;m Zac, a full‑stack software engineer with 6+ years of
            experience building for the web. I am originally from Pittsburgh, PA
            (Steeler Nation), but now I live in Dallas, TX. When I&apos;m not
            shipping code, I&apos;m watching movies, curating spotify playlists,
            playing guitar, and spending time with friends.
          </p>
          <p>
            I love learning new things. I try to keep up with my favorite tech
            creators on YouTube and X and then put what I learn into practice.
            This site is my way of paying that forward: part lab notebook, part
            guide. You&apos;ll find write‑ups, tutorials, and code snippets. If
            anything sparks a thought or has helped you along the way, say hi :)
          </p>
        </article>
      </div>
    </section>
  );
}
