'use client';

import Loading from '@/components/icons/loading';
import { Project } from '@/types/project';
import Image from 'next/image';
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
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-xl border bg-slate-200/[.01] transition-all duration-300 hover:translate-y-[-3px]">
      <div className="relative aspect-[17/9] w-full overflow-hidden bg-slate-50 dark:bg-slate-50">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <LuEye className="size-8 text-slate-800" />
            <p className="text-center text-slate-800">Project Coming Soon</p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-2">
          <h2 className="text-xl font-medium tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm leading-relaxed">{project.description}</p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LuEye className="size-sm" />
            {isLoading ? (
              <Loading />
            ) : (
              <span className="text-xs font-medium">{count}</span>
            )}
          </div>
          <a
            className="group/link flex items-center gap-2 font-medium"
            aria-label="Visit Project"
            target="_blank"
            rel="noreferrer"
            href={project.url}
            onClick={incrementViewCount}
          >
            <LuExternalLink className="size-sm transition-transform group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
