import Tanstack from '@/components/icons/tanstack';
import { IconType } from 'react-icons';
import { FaVuejs } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa6';
import {
  SiFastapi,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRailway,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

type TechStack = {
  name: string;
  icon: IconType;
  fill: string;
  url: string;
};

export const techStackList: TechStack[] = [
  {
    name: 'TanStack Start',
    icon: Tanstack,
    fill: '#009587',
    url: 'https://tanstack.com/start',
  },
  {
    name: 'Next',
    icon: SiNextdotjs,
    fill: '#b6b6b6',
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
    name: 'FastAPI',
    icon: SiFastapi,
    fill: '#00766a',
    url: 'https://fastapi.tiangolo.com/',
  },
  {
    name: 'Python',
    icon: SiPython,
    fill: '#32638a',
    url: 'https://www.python.org/',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    fill: '#15C2B8',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Shadcn/UI',
    icon: SiShadcnui,
    fill: '#b6b6b6',
    url: 'https://ui.shadcn.com/',
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    fill: '#4852ad',
    url: 'https://www.prisma.io/',
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
    name: 'Supabase',
    icon: SiSupabase,
    fill: '#3ECF8E',
    url: 'https://supabase.com/',
  },
  {
    name: 'AWS',
    icon: FaAws,
    fill: '#F29100',
    url: 'https://aws.amazon.com/',
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    fill: '#b6b6b6',
    url: 'https://vercel.com/',
  },
  {
    name: 'Railway',
    icon: SiRailway,
    fill: '#b6b6b6',
    url: 'https://railway.app/',
  },
];
