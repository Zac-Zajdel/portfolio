'use client';

import Loading from '@/components/icons/loading';
import { Project } from '@/types/project';
import { useEffect, useState } from 'react';
import { LuExternalLink, LuEye } from 'react-icons/lu';

export default function ProjectCard({ project }: { project: Project }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/views?slug=${project.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setIsLoading(false);
      });
  }, [project.slug]);

  const incrementViewCount = () => {
    fetch(`/api/views?slug=${project.slug}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
      });
  };

  return (
    <div className="flex h-full w-full flex-col justify-between rounded-lg border bg-slate-200/[.01] shadow">
      <div className="flex h-full flex-col items-start space-y-2.5 p-5">
        <h1 className="h-10 overflow-hidden truncate text-ellipsis whitespace-nowrap pt-2 text-lg font-semibold leading-snug tracking-tight">
          {project.title}
        </h1>
        <p className="text-xs text-fd-muted-foreground">
          {project.description}
        </p>
      </div>

      <div
        data-orientation="horizontal"
        role="none"
        className="w-full border opacity-75"
      />

      <div className="flex items-center justify-between gap-4 px-4 py-2">
        <button className="flex cursor-default items-center space-x-2.5">
          <LuEye className="size-5" />
          {isLoading ? <Loading /> : <p className="text-xs">{count}</p>}
        </button>
        <a
          className="cursor-pointer hover:text-blue-300"
          aria-label="Visit Project"
          target="_blank"
          rel="noreferrer"
          href={project.url}
        >
          <LuExternalLink
            className="size-4"
            onClick={incrementViewCount}
          />
        </a>
      </div>
    </div>
  );
}
