import PageWrapper from '@/components/core/page-wrapper';
import Pulse from '@/components/pulse';
import { socialLinks } from '@/types/socialLinks';
import Image from 'next/image';

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="lg:grid lg:grid-cols-3 lg:place-items-center lg:gap-16">
        <div className="lg:col-span-2">
          <h1 className="text-4xl tracking-tight md:text-5xl">Zac Zajdel</h1>
          <h2 className="mt-3 text-lg text-fd-muted-foreground">
            Full-Stack Software Engineer
          </h2>
          <p className="mt-5 text-balance">
            I design and build software that&apos;s fast and thoughtfully built.
            Most days I&apos;m turning ideas into shippable features, learning
            new tech, and obsessing over the details. You&apos;ll find recent
            projects and blog posts throughout my site. If something sparks a
            thought or you just want to jam on an idea, say hello! I&apos;m
            always down for a good conversation :)
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
    </PageWrapper>
  );
}
