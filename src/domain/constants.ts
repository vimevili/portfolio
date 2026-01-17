import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { compassLogo, embraerLogo } from '../assets';
import type { Experience, Project } from '../interfaces';

export const socialMedia = [
  {
    name: 'GitHub',
    link: 'https://github.com/vimevili',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/viniciusmeirelles',
    icon: FiLinkedin,
  },
  {
    name: 'Email',
    link: 'mailto:viniciusmeirelles@gmail.com',
    icon: FiMail,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'projects.items.0.title',
    description: 'projects.items.0.description',
    tags: ['React', 'Tailwind', 'TypeScript'],
    link: 'https://github.com/vimevili/audio-app',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'experience.items.0.role',
    company: 'experience.items.0.company',
    companyLogo: embraerLogo,
    period: 'experience.items.0.period',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Python (Flask)',
      'SQL',
      'TanStack Query',
      'Vitest',
      'Material UI',
      'Highcharts',
    ],
  },
  {
    id: 2,
    role: 'experience.items.1.role',
    company: 'experience.items.1.company',
    companyLogo: compassLogo,
    period: 'experience.items.1.period',
    tags: ['React', 'TypeScript', 'Firebase', 'Vitest', 'Tailwind'],
  },
];

export const sectionsConfig = [
  { id: 'home', label: 'navigation.home', index: 0 },
  { id: 'about', label: 'navigation.about', index: 1 },
  { id: 'experience', label: 'navigation.experience', index: 2 },
  { id: 'projects', label: 'navigation.projects', index: 3 },
];

export default { socialMedia, projects, experiences, sectionsConfig };
