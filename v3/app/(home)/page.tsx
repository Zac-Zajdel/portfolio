import Discord from '@/components/icons/discord';
import Github from '@/components/icons/github';
import Linkedin from '@/components/icons/linkedin';
import Pulse from '@/components/pulse';
import Image from 'next/image';
import { MdMailOutline } from 'react-icons/md';

type SocialLink = {
  href: string;
  label: string;
  Icon: React.ElementType;
  className: string;
};

export default function HomePage() {
  const socialLinks: SocialLink[] = [
    {
      href: 'https://github.com/Zac-Zajdel',
      label: 'Follow me on GitHub',
      Icon: Github,
      className: 'size-6 fill-black dark:fill-white',
    },
    {
      href: 'mailto:zaczajdel213@gmail.com',
      label: 'Send me an email',
      Icon: MdMailOutline,
      className: 'size-6',
    },
    {
      href: 'https://www.linkedin.com/in/zachary-zajdel-9b832b191',
      label: 'Follow me on LinkedIn',
      Icon: Linkedin,
      className: 'size-6',
    },
    {
      href: 'https://discord.com/users/ZacZajdel#5036',
      label: 'Follow me on Discord',
      Icon: Discord,
      className: 'size-6 fill-black dark:fill-white',
    },
  ];

  return (
    <main className="xl:px-42 container mx-auto px-5">
      <div className="lg:grid lg:grid-cols-3 lg:place-items-center lg:gap-16">
        <div className="lg:col-span-2">
          <h1 className="text-4xl tracking-tight md:text-5xl">Zac Zajdel</h1>
          <h2 className="mt-3 text-lg text-fd-muted-foreground">
            Full-Stack Software Engineer
          </h2>
          <p className="mt-5">
            Hi there! I&apos;m a full-stack web developer with a passion for
            turning ideas into reality. I love the challenge of building from
            the ground up and constantly learning new tools and technologies.
            Take a look around and feel free to connect with me through my
            socials below! 😊
          </p>

          <ul
            className="mt-5 flex items-center gap-6"
            aria-label="Social links"
          >
            {socialLinks.map(({ href, label, Icon, className }) => (
              <li key={label}>
                <a
                  className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                >
                  <Icon className={className} />
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-6 text-sm">Dallas, TX · 32.775° N, -96.809° W</div>
        </div>

        <div className="mt-10 lg:col-span-1 lg:mt-0">
          <div className="grid place-items-center">
            <Image
              src="/static/me.jpg"
              alt="Photo of Zac Zajdel"
              width={192}
              height={192}
              className="rounded-full"
              priority
              sizes="192px"
            />
            <p className="mt-5 flex items-center">
              <Pulse aria-hidden />
              <span className="pl-1 text-sm">
                Interested in new opportunities
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
