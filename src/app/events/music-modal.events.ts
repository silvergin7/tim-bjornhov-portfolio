export const setupMusicModal = (): void => {
  const modal = document.querySelector(
    '[data-music-modal]',
  ) as HTMLDivElement | null;

  if (!modal) {
    return;
  }

  const closeElements =
    document.querySelectorAll<HTMLElement>('[data-music-close]');
  const confirmButton = modal.querySelector<HTMLButtonElement>(
    '[data-music-confirm]',
  );
  const declineButton = modal.querySelector<HTMLButtonElement>(
    '[data-music-decline]',
  );

  window.addEventListener('show-music-popup', () => {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });

  closeElements.forEach((element) => {
    element.addEventListener('click', () => {
      modal.hidden = true;
      document.body.style.overflow = '';
    });
  });

  if (declineButton) {
    declineButton.addEventListener('click', () => {
      modal.hidden = true;
      document.body.style.overflow = '';
    });
  }

  if (confirmButton) {
    confirmButton.addEventListener('click', () => {
      const event = new CustomEvent('start-music-playback');
      window.dispatchEvent(event);

      modal.hidden = true;
      document.body.style.overflow = '';
    });
  }
};
