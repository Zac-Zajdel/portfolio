import TechStackCard from '@/components/cards/tech-stack-card';
import { IconType } from 'react-icons';
import { FaVuejs } from 'react-icons/fa';
import {
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { TbBrandPlanetscale } from 'react-icons/tb';

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
    icon: TbBrandPlanetscale,
    fill: '#E1E1E1',
    url: 'https://planetscale.com/',
  },
  {
    name: 'Supabase',
    icon: SiSupabase,
    fill: '#3ECF8E',
    url: 'https://supabase.com/',
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
];

export default function TechStackSection() {
  return (
    <div>
      <h1 className="mb-10 text-4xl md:text-5xl">Tech Stack</h1>

      <div className="flex flex-wrap justify-center">
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
          );
        })}
      </div>
    </div>
  );
}
