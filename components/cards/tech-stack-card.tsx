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
      className="m-2 flex min-w-[150px] transform flex-col gap-2 rounded border border-solid border-transparent px-5 py-3 no-underline contrast-0 grayscale transition duration-300 ease-linear hover:scale-105 hover:border-gray-500 hover:filter-none dark:hover:border-gray-600 dark:hover:text-white lg:first:ml-6"
      href={url}
      rel="noreferrer"
    >
      <span className="flex justify-center">
        <Icon
          size="55px"
          fill={fill}
        />
      </span>
      <h4 className="flex justify-center text-sm font-medium">{name}</h4>
    </a>
  );
}
