import Discord from '@/components/icons/discord';
import Github from '@/components/icons/github';
import Linkedin from '@/components/icons/linkedin';
import Pulse from '@/components/pulse';
import Image from 'next/image';
import { MdMailOutline } from 'react-icons/md';

export default function HomePage() {
  return (
    <main className="container mx-auto md:px-16 xl:px-48">
      <div className="place-items-center lg:grid lg:grid-cols-3 lg:gap-x-16">
        <div className="col-span-2">
          <h1 className="text-4xl md:text-5xl">Zac Zajdel</h1>
          <p className="pt-4 text-fd-muted-foreground">
            Full-Stack Software Engineer
          </p>
          <p className="pt-3">
            Hi there! I&apos;m a full-stack web developer with a passion for
            turning ideas into interactive, real-world applications. I love the
            challenge of building from the ground up and constantly learning new
            tools and technologies. Take a look around and feel free to connect
            with me through my socials below! 😊
          </p>
          <div className="flex items-center space-x-6 pt-5">
            <a
              className="size-5 fill-black dark:fill-white"
              aria-label="Follow me on Github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Zac-Zajdel"
            >
              <Github />
            </a>
            <a
              aria-label="Send me an email"
              target="_blank"
              rel="noreferrer"
              href="mailto:zaczajdel213@gmail.com"
            >
              <MdMailOutline className="size-6" />
            </a>
            <a
              className="size-6"
              aria-label="Follow me on LinkedIn"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/zachary-zajdel-9b832b191"
            >
              <Linkedin />
            </a>
            <a
              className="size-6 fill-black dark:fill-white"
              aria-label="Follow me on Discord"
              target="_blank"
              rel="noreferrer"
              href="https://discord.com/users/ZacZajdel#5036"
            >
              <Discord />
            </a>
          </div>
          <div className="pt-6 text-sm">Dallas, TX · 32.775° N, -96.809° W</div>
        </div>
        <div className="col-span-1 place-items-center pt-10 xl:pt-0">
          <Image
            src="/static/me.jpg"
            alt="avatar"
            width={152}
            height={152}
            className="h-48 w-48 rounded-full"
          />
          <p className="mt-2 flex items-center">
            <Pulse />
            <span className="pl-1 text-sm">
              Interested in new opportunities
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
