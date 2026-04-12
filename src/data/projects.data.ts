import type { Project } from '@/models/project';

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'This portfolio site built with vanilla TypeScript and Vite. Mobile-first, bilingual, dark mode support.',
    stack: ['TypeScript', 'Vite', 'CSS'],
    url: 'https://github.com/timbjornhov',
  },
];

export const experiment = {
  name: '$SWE',
  url: 'https://www.dextools.io/',
};
