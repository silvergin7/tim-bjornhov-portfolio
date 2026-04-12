import '@/styles/variables.css';
import '@/styles/base.css';
import '@/styles/layout.css';
import '@/styles/components.css';
import '@/styles/modals.css';
import '@/styles/sections.css';

import { languageService } from '@/services/language.instance';
import { createHeader } from '@/components/header/header.component';
import { createHomeSection } from '@/sections/home/home.section';
import { createWorkSection } from '@/sections/work/work.section';
import { createSkillsSection } from '@/sections/skills/skills.section';
import { createContactSection } from '@/sections/contact/contact.section';
import { createExternalLinkModal } from '@/components/modals/external-link.modal';
import { createAllModals } from '@/components/modals/modal.component';
import { createMusicPlayer } from '@/components/player/music-player.component';
import { modalConfigs } from '@/data/modals.data';
import {
  setupMenuEvents,
  setupExpandableBlocks,
  setupExternalLinkModal,
  setupInterestModals,
  setupMusicPlayer,
} from '@/app/events';

const app = document.querySelector('#app') as HTMLDivElement;

const renderApp = (): void => {
  document.title = languageService.getText('siteTitle');

  app.innerHTML = `
    ${createHeader()}
    <main class="site-main">
      ${createHomeSection()}
      ${createWorkSection()}
      ${createSkillsSection()}
      ${createContactSection()}
    </main>
    ${createExternalLinkModal()}
    ${createAllModals(modalConfigs)}
    ${createMusicPlayer()}
  `;

  setupMenuEvents();
  setupExpandableBlocks();
  setupExternalLinkModal();
  setupInterestModals();
  setupMusicPlayer();
};

const setupLanguageToggle = (): void => {
  const btn = document.querySelector('[data-lang-toggle]');
  if (!btn) return;

  btn.addEventListener('click', () => {
    languageService.toggleLanguage();
    renderApp();
    setupLanguageToggle();
  });
};

const initApp = (): void => {
  renderApp();
  setupLanguageToggle();
};

document.addEventListener('DOMContentLoaded', initApp);
