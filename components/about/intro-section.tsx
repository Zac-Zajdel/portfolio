import SpotifyCard from '@/components/cards/spotify-card';
import Image from 'next/image';

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

          <SpotifyCard />
        </div>
        <div className="col-span-3 place-items-center pt-2">
          Hey 👋
          <br />
          <br />
          I&apos;m Zac, based in Dallas, Texas, honing my craft in web
          development. Between tackling side projects, you&apos;ll catch me
          enjoying movies, constantly tuned into music, and hanging out with
          friends.
          <br />
          <br />
          In the tech realm, I&apos;m a big fan for React, Vue, Laravel, and a
          bunch of other technologies that redefine how developers bring their
          ideas to life. This industry never lets us get bored or complacent,
          and that&apos;s what makes it so invigorating. The commitment and
          generosity of developers worldwide inspire me to strive for
          excellence.
          <br />
          <br />I started this blog with the hope of sharing my discoveries with
          others. It&apos;s my way of giving back to the community that has
          given me so much. If you&apos;ve made it this far, let&apos;s connect
          :)
        </div>
      </div>
    </div>
  );
}
