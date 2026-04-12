import { modalConfigs } from '@/data/modals.data';

const openModal = (modal: HTMLElement): void => {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
};

const closeModal = (modal: HTMLElement): void => {
  modal.hidden = true;
  document.body.style.overflow = '';
};

export const setupInterestModals = (): void => {
  modalConfigs.forEach((config) => {
    const modal = document.querySelector(
      `[data-modal="${config.key}"]`,
    ) as HTMLDivElement | null;

    if (!modal) return;

    window.addEventListener(`show-${config.key}-popup`, () => {
      openModal(modal);
    });

    const closeElements = modal.querySelectorAll<HTMLElement>(
      `[data-modal-close="${config.key}"]`,
    );

    closeElements.forEach((el) => {
      el.addEventListener('click', () => closeModal(modal));
    });

    if (config.variant === 'player') {
      const confirmButton = modal.querySelector<HTMLButtonElement>(
        `[data-modal-confirm="${config.key}"]`,
      );

      if (confirmButton) {
        confirmButton.addEventListener('click', () => {
          window.dispatchEvent(new CustomEvent('start-music-playback'));
          closeModal(modal);
        });
      }
    }
  });
};
