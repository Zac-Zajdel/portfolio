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
    name: 'Node',
    icon: SiNodedotjs,
    fill: '#73CE4C',
    url: 'https://nodejs.org/en/',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    fill: '#007ACC',
    url: 'https://www.typescriptlang.org/',
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
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    fill: '#15C2B8',
    url: 'https://tailwindcss.com/',
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
    name: 'Vercel',
    icon: SiVercel,
    fill: '#E10990',
    url: 'https://vercel.com/',
  },
  {
    name: 'AWS',
    icon: SiAmazonaws,
    fill: '#FF9900',
    url: 'https://aws.amazon.com/',
  },
]

export default function TechStack() {
  return (
    <>
      <div className="space-y-2 md:space-y-5 pt-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-gray-900 dark:text-gray-100">
          Tech Stack
        </h1>
      </div>

      <div className="mt-8 flex flex-wrap justify-center">
        {knowledge.map((item: TechProps) => {
          return (
            <span key={item.name}>
              <TechStackCard
                name={item.name}
                icon={item.icon}
                fill={item.fill}
                url={item.url}
              />
            </span>
          )
        })}
      </div>
    </>
  )
}
