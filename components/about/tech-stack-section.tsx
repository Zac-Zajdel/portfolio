import TechStackCard from '@/components/cards/tech-stack-card';
import { IconType } from 'react-icons';
import { FaVuejs } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa6';
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

const knowledge: TechProps[] = [
  {
    name: 'Next',
    icon: SiNextdotjs,
    fill: '#323031',
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
    fill: '#009f5f',
    url: 'https://nuxtjs.org/',
  },
  {
    name: 'Vue',
    icon: FaVuejs,
    fill: '#35a975',
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
    fill: '#27609e',
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
    fill: '#c2740e',
    url: 'https://www.mysql.com/',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    fill: '#779AB6',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    fill: '#4852ad',
    url: 'https://www.prisma.io/',
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    fill: '#323031',
    url: 'https://vercel.com/',
  },
  {
    name: 'AWS',
    icon: FaAws,
    fill: '#F29100',
    url: 'https://aws.amazon.com/',
  },
  {
    name: 'Supabase',
    icon: SiSupabase,
    fill: '#3ECF8E',
    url: 'https://supabase.com/',
  },
  {
    name: 'PlanetScale',
    icon: TbBrandPlanetscale,
    fill: '#E1E1E1',
    url: 'https://planetscale.com/',
  },
];

export default function TechStackSection() {
  return (
    <div>
      <h1 className="mb-10 text-4xl md:text-5xl">Tech Stacks</h1>

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
