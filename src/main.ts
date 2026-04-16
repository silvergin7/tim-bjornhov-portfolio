import '@/styles/variables.css';
import '@/styles/base.css';
import '@/styles/layout.css';
import '@/styles/components.css';
import '@/styles/modals.css';
import '@/styles/sections.css';

import { languageService } from '@/services/language.instance';
import { themeService } from '@/services/theme.instance';
import { createHeader } from '@/components/header/header.component';
import { createHomeSection } from '@/sections/home/home.section';
import { createWorkSection } from '@/sections/work/work.section';
import { createSkillsSection } from '@/sections/skills/skills.section';
import { createExternalLinkModal } from '@/components/modals/external-link.modal';
import { createAllModals } from '@/components/modals/modal.component';
import { createMusicPlayer } from '@/components/player/music-player.component';
import { getModalConfigs } from '@/data/modals.data';
import {
  setupMenuEvents,
  setupExpandableBlocks,
  setupExternalLinkModal,
  setupInterestModals,
  setupMusicPlayer,
} from '@/app/events';

const app = document.querySelector('#app') as HTMLDivElement;

const getRoute = (): string => {
  const hash = location.hash.replace('#', '') || 'home';
  return hash;
};

const getPageContent = (): string => {
  switch (getRoute()) {
    case 'work':
      return createWorkSection();
    case 'skills':
      return createSkillsSection();
    default:
      return createHomeSection();
  }
};

const renderApp = (): void => {
  document.title = languageService.getText('siteTitle');

  app.innerHTML = `
    ${createHeader()}
    <main class="site-main">
      ${getPageContent()}
    </main>
    ${createExternalLinkModal()}
    ${createAllModals(getModalConfigs())}
    ${createMusicPlayer()}
  `;

  setupMenuEvents();
  setupExpandableBlocks();
  setupExternalLinkModal();
  setupInterestModals();
  setupMusicPlayer();
};

const setupHeaderToggles = (): void => {
  const langBtn = document.querySelector('[data-lang-toggle]');
  const themeBtn = document.querySelector('[data-theme-toggle]');

  langBtn?.addEventListener('click', () => {
    languageService.toggleLanguage();
    renderApp();
    setupHeaderToggles();
  });

  themeBtn?.addEventListener('click', () => {
    themeService.toggleTheme();
    renderApp();
    setupHeaderToggles();
  });
};

const initApp = (): void => {
  themeService.init();
  renderApp();
  setupHeaderToggles();
};

document.addEventListener('DOMContentLoaded', initApp);

window.addEventListener('hashchange', () => {
  renderApp();
  setupHeaderToggles();
});
