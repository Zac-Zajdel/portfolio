import TechStackCard from './techStackCard'
import { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiLaravel,
  SiVercel,
  SiVapor,
  SiAmazonaws,
} from 'react-icons/si'
import { FaVuejs } from 'react-icons/fa'
import { IoPlanetSharp } from 'react-icons/io5'

interface TechProps {
  name: string;
  icon: IconType;
  fill: string;
  url: string;
}

const knowledge: Array<TechProps> = [
  {
    name: 'Next',
    icon: SiNextdotjs,
    fill: '#0370F3',
    url: 'https://nextjs.org/',
  },
  {
    name: 'React',
    icon: SiReact,
    fill: '#53C1DE',
    url: 'https://reactjs.org/',
  },
  {
    name: 'Nuxt',
    icon: SiNuxtdotjs,
    fill: '#48B884',
    url: 'https://nuxtjs.org/',
  },
  {
    name: 'Vue',
    icon: FaVuejs,
    fill: '#3F7F70',
    url: 'https://vuejs.org/',
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    fill: '#F05340',
    url: 'https://laravel.com/',
  },
  {
    name: 'PHP',
    icon: SiPhp,
    fill: '#6383BB',
    url: 'https://www.php.net/',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    fill: '#007ACC',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    fill: '#E10990',
    url: 'https://vercel.com/',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    fill: '#E48E1A',
    url: 'https://www.mysql.com/',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    fill: '#779AB6',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'PlanetScale',
    icon: IoPlanetSharp,
    fill: '#5D48AF',
    url: 'https://planetscale.com/',
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    fill: '#308988',
    url: 'https://www.prisma.io/',
  },
  {
    name: 'AWS',
    icon: SiAmazonaws,
    fill: '#FF9900',
    url: 'https://aws.amazon.com/',
  },
  {
    name: 'Vapor',
    icon: SiVapor,
    fill: '#3EB9FF',
    url: 'https://vapor.laravel.com/',
  },
  {
    name: 'Node',
    icon: SiNodedotjs,
    fill: '#73CE4C',
    url: 'https://nodejs.org/en/',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    fill: '#15C2B8',
    url: 'https://tailwindcss.com/',
  },
]

export default function TechStack() {
  return (
    <>
      <div className="space-y-2 md:space-y-5 pt-8">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Tech Stack
        </h1>
      </div>

      <div className="mt-8 flex flex-wrap justify-center">
        {knowledge.map((item: TechProps) => {
          return (
            <TechStackCard
              key={item.name}
              name={item.name}
              icon={item.icon}
              fill={item.fill}
              url={item.url}
            />
          )
        })}
      </div>
    </>
  )
}
