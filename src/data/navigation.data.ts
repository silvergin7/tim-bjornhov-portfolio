import type { NavLink } from '@/models/nav-link';
import { languageService } from '@/services/language.instance';

export const getNavigationLinks = (): NavLink[] => [
  { label: languageService.getText('navHome'), href: '#home' },
  { label: languageService.getText('navWork'), href: '#work' },
  { label: languageService.getText('navSkills'), href: '#skills' },
  { label: languageService.getText('navContact'), href: '#contact' },
];
