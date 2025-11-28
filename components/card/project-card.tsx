'use client';

import Loading from '@/components/icons/loading';
import { queryClient } from '@/lib/utils';
import { Project } from '@/types/projects';
import { useMutation, useQuery } from '@tanstack/react-query';
import { cn } from 'fumadocs-ui/utils/cn';
import Image from 'next/image';
import { LuEye } from 'react-icons/lu';

export default function ProjectCard({ project }: { project: Project }) {
  const { data: count, isLoading } = useQuery({
    queryKey: ['views', project.slug],
    queryFn: async () => {
      const res = await fetch(`/api/views?slug=${project.slug}`);
      return (await res.json())?.count ?? 1;
    },
  });

  const incrementMutation = useMutation<
    number,
    Error,
    void,
    { previousCount?: number }
  >({
    mutationFn: async () => {
      const res = await fetch('/api/views', {
        method: 'POST',
        body: JSON.stringify({ slug: project.slug }),
      });
      const data = await res.json();
      return data.count;
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['views', project.slug] });
      const previousCount = queryClient.getQueryData<number>([
        'views',
        project.slug,
      ]);

      queryClient.setQueryData(
        ['views', project.slug],
        (previousCount ?? 0) + 1,
      );
      return { previousCount };
    },
    onError: (_err, _newCount, onMutateResult) => {
      queryClient.setQueryData(
        ['views', project.slug],
        onMutateResult?.previousCount,
      );
    },
  });

  return (
    <a
      target={project.workInProgress ? '_self' : '_blank'}
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title}`}
      href={project.workInProgress ? undefined : project.url}
      onClick={
        project.workInProgress ? undefined : () => incrementMutation.mutate()
      }
      className={cn(
        'group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-neutral-200/30 bg-white/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none',
        project.workInProgress ? 'cursor-default' : 'cursor-pointer',
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
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
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 to-transparent dark:from-black/40" />
      </div>

      <div className="flex flex-col justify-between p-3.5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-xl tracking-tight sm:text-lg">
              {project.title}
            </h1>
            {!project.workInProgress && (
              <div className="flex items-center gap-2">
                <LuEye
                  className="size-3.5"
                  aria-hidden
                />
                {isLoading ? (
                  <Loading />
                ) : (
                  <span className="text-xs tabular-nums">{count ?? 0}</span>
                )}
              </div>
            )}
          </div>
          <p className="text-fd-muted-foreground text-sm">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
}
