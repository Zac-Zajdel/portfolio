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
      className="m-2 flex flex-col gap-2 rounded border border-solid border-transparent py-3 px-5 contrast-0 grayscale transition-all duration-200 ease-linear hover:text-gray-600 hover:filter-none dark:hover:border-gray-800 dark:hover:text-white lg:first:ml-6 no-underline focus-visible:ring transition"
      href={url}
    >
      <Icon size="55px" fill={fill} />
      <h4 className="flex justify-center text-sm font-medium">{name}</h4>
    </a>
  )
}
