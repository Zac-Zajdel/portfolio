import PageTitle from '@/components/core/page-title';

export default function ExperienceSection() {
  return (
    <section className="mb-10">
      <PageTitle title="Experience" />
      <article className="max-w-none text-gray-900 xl:col-span-2 dark:text-gray-100">
        <header className="flex flex-wrap items-baseline gap-x-2 text-xl">
          <h3 className="font-medium">Senior Full‑Stack Software Engineer</h3>
          <span className="text-gray-400">·</span>
          <a
            href="https://www.rimsys.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#892666] hover:underline"
          >
            Rimsys
          </a>
        </header>

        <div className="text-fd-muted-foreground py-3 font-mono text-sm">
          <time dateTime="2020-01">January 2020</time> —{' '}
          <time aria-label="Present">Present</time>
        </div>

        <ul className="mt-2 list-disc space-y-2 pl-4">
          <li>
            Modernized the Rimsys platform with a contemporary web stack and
            scalable architecture, improving performance, reliability, and
            developer velocity.
          </li>
          <li>
            Led a cross‑functional team: set sprint goals, drove code reviews,
            managed releases, and mentored engineers to raise code quality and
            throughput.
          </li>
          <li>
            Owned end‑to‑end delivery across architecture, deployments,
            production operations, customer support, and feature development to
            ensure consistent business impact.
          </li>
        </ul>
      </article>
    </section>
  );
}
