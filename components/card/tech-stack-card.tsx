import { IconType } from 'react-icons';

interface CardProps {
  name: string;
  icon: IconType;
  fill: string;
  url: string;
}

export default function TechStackCard({ name, icon, fill, url }: CardProps) {
  const Icon = icon;
  return (
    <a
      data-state="closed"
      target="_blank"
      className="m-3 flex min-w-[150px] transform flex-col gap-2 rounded border border-transparent px-5 py-3 contrast-0 transition duration-300 ease-linear hover:scale-105 hover:border-gray-500 hover:filter-none dark:hover:border-gray-600 dark:hover:text-white"
      href={url}
      rel="noreferrer"
    >
      <span className="flex flex-col place-items-center">
        <Icon
          size="55px"
          fill={fill}
        />
        <p className="pt-3 text-sm font-medium">{name}</p>
      </span>
    </a>
  );
}
