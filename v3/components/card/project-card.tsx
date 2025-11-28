'use client';

import Loading from '@/components/icons/loading';
import { Project } from '@/types/projects';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LuEye } from 'react-icons/lu';

export default function ProjectCard({ project }: { project: Project }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // TODO - Move to TanStack Query over this nonsense....
  useEffect(() => {
    let active = true;

    fetch(`/api/views?slug=${project.slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        setCount(typeof data?.count === 'number' ? data.count : 0);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));

    return () => {
      active = false;
    };
  }, [project.slug]);

  const incrementViewCount = () => {
    setCount((c) => c + 1);

    fetch(`/api/views?slug=${project.slug}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data?.count === 'number') setCount(data.count);
      })
      .catch(() => {
        // no-op on failure, optimistic count remains
      });
  };

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title}`}
      href={project.url}
      onClick={incrementViewCount}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-neutral-200/30 bg-white/60 shadow-sm transition-all duration-300 focus-within:ring-2 focus-within:ring-neutral-900/10 focus-within:ring-offset-2 focus-within:ring-offset-white hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:focus-within:ring-white/15 dark:focus-within:ring-offset-neutral-950"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            priority={false}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3">
            <LuEye
              className="size-6 text-neutral-700 dark:text-neutral-300"
              aria-hidden
            />
            <p className="text-center text-sm text-neutral-700 dark:text-neutral-300">
              Project Coming Soon
            </p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40" />
      </div>

      <div className="flex flex-col justify-between p-3.5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-xl tracking-tight sm:text-lg">
              {project.title}
            </h1>
            <div className="flex items-center gap-2">
              <LuEye
                className="size-3.5"
                aria-hidden
              />
              {isLoading ? (
                <Loading />
              ) : (
                <span className="text-xs tabular-nums">{count}</span>
              )}
            </div>
          </div>
          <p className="text-sm text-fd-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
}
