export const setupAnimeModal = (): void => {
  const modal = document.querySelector(
    '[data-anime-modal]',
  ) as HTMLDivElement | null;

  const closeElements =
    document.querySelectorAll<HTMLElement>('[data-anime-close]');

  if (!modal) {
    return;
  }

  window.addEventListener('show-anime-popup', () => {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });

  closeElements.forEach((element) => {
    element.addEventListener('click', () => {
      modal.hidden = true;
      document.body.style.overflow = '';
    });
  });
};
