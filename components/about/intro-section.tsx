import SpotifyCard from '@/components/cards/spotify-card';
import SpotifyCardSkeleton from '@/components/cards/spotify-card-skeleton';
import Image from 'next/image';
import { Suspense } from 'react';

export default function IntroSection() {
  return (
    <div>
      <h1 className="mb-10 text-4xl md:text-5xl">About</h1>
      <div className="place-items-center lg:grid lg:grid-cols-5 lg:gap-x-8">
        <div className="col-span-2 place-items-center">
          <Image
            src="/static/me.jpeg"
            alt="avatar"
            width={152}
            height={152}
            className="size-48 rounded-full"
          />
          <h2 className="pb-2 pt-4 text-2xl">Zac Zajdel</h2>
          <p className="text-fd-muted-foreground">
            Full-Stack Software Engineer
          </p>

          <Suspense fallback={<SpotifyCardSkeleton />}>
            <SpotifyCard />
          </Suspense>
        </div>
        <div className="col-span-3 place-items-center pt-2">
          Hi there! 👋
          <br />
          <br />
          My name is Zac Zajdel, and I&apos;m a web developer with over five
          years of experience. Originally from Pittsburgh, Pennsylvania (Steeler
          Nation for life 🖤💛), I now call Dallas, Texas, home. When I&apos;m
          not coding, you&apos;ll find me watching movies, vibing to music, or
          spending time with friends.
          <br />
          <br />
          As a self-proclaimed nerd, I love learning new things. Check out my
          blog where I am learning a new technology every month and talking
          about those experiences here! This industry never lets us get bored or
          complacent, and that&apos;s what makes it so invigorating. The
          commitment and generosity of developers worldwide inspire me todo the
          same.
          <br />
          <br />I started this blog with the hope of sharing what I have learned
          with others. It&apos;s my way of giving back to the community that has
          given me so much. If you&apos;ve made it this far, let&apos;s connect
          :)
        </div>
      </div>
    </div>
  );
}
