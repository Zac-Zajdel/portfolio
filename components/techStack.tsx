import TechStackCard from './techStackCard'
import { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTypescript,
  // SiJavascript,
  // SiHtml5,
  // SiCss3,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiPhp,
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
    fill: '#53C1DE',
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
    fill: '#53C1DE',
    url: 'https://laravel.com/',
  },
  {
    name: 'PHP',
    icon: SiPhp,
    fill: '#53C1DE',
    url: 'https://www.php.net/',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    fill: '#53C1DE',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    fill: '#53C1DE',
    url: 'https://vercel.com/',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    fill: '#53C1DE',
    url: 'https://www.mysql.com/',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    fill: '#53C1DE',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'PlanetScale',
    icon: IoPlanetSharp,
    fill: '#53C1DE',
    url: 'https://planetscale.com/',
  },
  {
    name: 'AWS',
    icon: SiAmazonaws,
    fill: '#53C1DE',
    url: 'https://aws.amazon.com/',
  },
  {
    name: 'Vapor',
    icon: SiVapor,
    fill: '#53C1DE',
    url: 'https://vapor.laravel.com/',
  },
  // {
  //   name: 'JavaScript',
  //   icon: SiJavascript,
  //   url: 'https://www.javascript.com/',
  // },
  // {
  //   name: 'HTML',
  //   icon: SiHtml5,
  //   url: 'https://html.com/',
  // },
  {
    name: 'Node',
    icon: SiNodedotjs,
    fill: '#53C1DE',
    url: 'https://nodejs.org/en/',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    fill: '#53C1DE',
    url: 'https://tailwindcss.com/',
  },
  // {
  //   name: 'CSS',
  //   icon: SiCss3,
  //   url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  // },
]

export default function TechStack() {
  return (
    <>
      <div className="space-y-2 md:space-y-5 pt-6">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Tech Stack
        </h1>
      </div>

      <div className="mt-10 flex flex-wrap justify-center">
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
