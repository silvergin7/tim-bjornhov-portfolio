import type { SkillGroup } from '@/models/skill';
import { languageService } from '@/services/language.instance';

export const getSkillGroups = (): SkillGroup[] => {
  const lang = languageService.getLanguage();

  return [
    {
      title: 'Development',
      intro:
        lang === 'en'
          ? 'Fullstack fundamentals with a leaning toward Web3'
          : 'Fullstack-grunder med en lutning mot Web3',
      variant: 'pills',
      subgroups: [
        { label: 'Frontend', tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'] },
        { label: 'Backend', tags: ['JavaScript', 'TypeScript', 'Solidity'] },
        { label: 'AI', tags: ['LLMs', 'Agents', 'Skills'] },
      ],
    },
    {
      title: 'Blockchain & Crypto',
      variant: 'narrative',
      subgroups: [
        {
          label: lang === 'en' ? 'Investing' : 'Investering',
          description:
            lang === 'en'
              ? 'Criteria-driven methodology adapted to each project stage — from early research to active position management. Disciplined process with minimal exceptions.'
              : 'Kriteriebaserad metodik anpassad efter varje projekts stadie — från tidig research till aktiv positionshantering. Disciplinerad process med minimala undantag.',
        },
        {
          label: 'Trading',
          description:
            lang === 'en'
              ? 'Technical analysis built on supply and demand levels, volume analysis, time cycles, and custom indicators. Mindset and sticking to the plan matters more than the plan itself.'
              : 'Teknisk analys byggd på utbud- och efterfrågenivåer, volymanalys, tidscykler och custom indicators. Mindset och att hålla sig till planen är viktigare än själva planen.',
        },
        {
          label: 'Community',
          description:
            lang === 'en'
              ? 'Active in the Bittensor ecosystem through "The Nerds" — an exclusive group of subnet owners and key figures shaping the network.'
              : 'Aktiv i Bittensors ekosystem genom "The Nerds" — en exklusiv grupp av subnet owners och nyckelpersoner som formar nätverket.',
        },
      ],
    },
    {
      title: lang === 'en' ? 'Professional Background' : 'Arbetslivserfarenhet',
      intro:
        lang === 'en'
          ? 'Practical experience from several industries before transitioning into tech'
          : 'Praktisk erfarenhet från flera branscher innan övergången till tech',
      variant: 'compact',
      subgroups: [
        { label: lang === 'en' ? 'Customer Service' : 'Kundservice' },
        { label: lang === 'en' ? 'Logistics' : 'Logistik' },
        { label: lang === 'en' ? 'Retail' : 'Butiksarbete' },
        { label: lang === 'en' ? 'Department Lead' : 'Avdelningsansvar' },
      ],
    },
  ];
};
