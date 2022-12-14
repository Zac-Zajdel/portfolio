import { IconType } from 'react-icons'

interface CardProps {
  name: string;
  icon: IconType;
  fill: string;
  url: string;
}

export default function TechStackCard({ name, icon, fill, url }: CardProps) {
  const Icon = icon
  return (
    <a
      data-state="closed"
      target="_blank"
      className="min-w-[150px] m-2 flex flex-col gap-2 rounded border border-solid border-transparent py-3 px-5 contrast-0 grayscale transition-all duration-200 ease-linear hover:text-gray-600 hover:filter-none dark:hover:border-gray-800 dark:hover:text-white lg:first:ml-6 no-underline transition transform transition duration-300 hover:scale-105"
      href={url}
      rel="noreferrer"
    >
      <span className="flex justify-center">
        <Icon size="55px" fill={fill} />
      </span>
      <h4 className="flex justify-center text-sm font-medium">{name}</h4>
    </a>
  )
}
