export default function ExperienceSection() {
  return (
    <div>
      <h1 className="mb-10 text-4xl md:text-5xl">Experience</h1>
      <div className="max-w-none text-gray-900 dark:text-gray-100 xl:col-span-2">
        <div className="flex flex-row text-xl">
          <span>Lead Full Stack Software Engineer&nbsp;-&nbsp;</span>
          <span className="text-primary-color dark:text-primary-color-dark">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.rimsys.io/"
              className="no-underline"
            >
              Rimsys
            </a>
          </span>
        </div>
        <div>
          <div className="py-3 font-mono text-sm text-fd-muted-foreground">
            January 2020 - Current
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="mr-2">‣</div>
              <p>
                Played a pivotal role in redesigning and upgrading the platform
                with modern technologies, improving system scalability,
                performance, and developer efficiency while laying the
                foundation for future growth.
              </p>
            </div>
            <div className="flex">
              <div className="mr-2">‣</div>
              <p>
                Led a team of developers by effectively coordinating sprint
                objectives, managing pull request reviews, overseeing releases,
                and facilitating productive meetings, fostering a culture of
                collaboration and high-quality deliverables.
              </p>
            </div>
            <div className="flex">
              <div className="mr-2">‣</div>
              <p>
                Managed a diverse set of responsibilities, including daily
                operations, deployments, customer support, architecture
                discussions, and development of new features, ensuring seamless
                functionality and continuous improvement across projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
