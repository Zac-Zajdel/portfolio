import Discord from '@/components/icons/discord';
import Github from '@/components/icons/github';
import Linkedin from '@/components/icons/linkedin';
import { MdMailOutline } from 'react-icons/md';

type SocialLink = {
  href: string;
  label: string;
  Icon: React.ElementType;
  className: string;
};

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/Zac-Zajdel',
    label: 'Follow me on GitHub',
    Icon: Github,
    className: 'size-6 fill-black dark:fill-white',
  },
  {
    href: 'mailto:zaczajdel213@gmail.com',
    label: 'Send me an email',
    Icon: MdMailOutline,
    className: 'size-6',
  },
  {
    href: 'https://www.linkedin.com/in/zachary-zajdel-9b832b191',
    label: 'Follow me on LinkedIn',
    Icon: Linkedin,
    className: 'size-6',
  },
  {
    href: 'https://discord.com/users/ZacZajdel#5036',
    label: 'Follow me on Discord',
    Icon: Discord,
    className: 'size-6 fill-black dark:fill-white',
  },
];
