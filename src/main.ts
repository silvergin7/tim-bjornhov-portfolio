import '@/styles/variables.css';
import '@/styles/base.css';
import '@/styles/layout.css';
import '@/styles/components.css';
import '@/styles/sections.css';

import LanguageService from '@/services/language.service';
import { createHeader } from '@/components/header/header.component';
import { createHomeSection } from '@/sections/home/home.section';
import {
  setupMenuEvents,
  setupExpandableBlocks,
  setupExternalLinkModal,
  setupTrainingModal,
  setupAnimeModal,
  setupMmaModal,
  setupMusicModal,
  setupMusicPlayer,
  setupGamingModal,
} from '@/app/events';
import { createExternalLinkModal } from '@/components/modals/external-link.modal';
import { createTrainingModal } from '@/components/modals/training.modal';
import { createAnimeModal } from '@/components/modals/anime.modal';
import { createMmaModal } from '@/components/modals/mma.modal';
import { createMusicModal } from '@/components/modals/music.modal';
import { createMusicPlayer } from '@/components/player/music-player.component';
import { createGamingModal } from '@/components/modals/gaming.modal';

const app = document.querySelector('#app') as HTMLDivElement;
const languageService = new LanguageService('en');

const initApp = (): void => {
  document.title = languageService.getText('siteTitle');

  app.innerHTML = `
  ${createHeader()}
  <main class="site-main">
    ${createHomeSection()}
  </main>
  ${createExternalLinkModal()}
  ${createTrainingModal()}
  ${createAnimeModal()}
  ${createMmaModal()}
  ${createMusicModal()}
  ${createMusicPlayer()}
  ${createGamingModal()}
`;

  setupMenuEvents();
  setupExpandableBlocks();
  setupExternalLinkModal();
  setupTrainingModal();
  setupAnimeModal();
  setupMmaModal();
  setupMusicModal();
  setupMusicPlayer();
  setupGamingModal();
};

document.addEventListener('DOMContentLoaded', initApp);
