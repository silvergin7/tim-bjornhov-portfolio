export const setupMmaModal = (): void => {
  const modal = document.querySelector(
    '[data-mma-modal]',
  ) as HTMLDivElement | null;

  const closeElements =
    document.querySelectorAll<HTMLElement>('[data-mma-close]');

  if (!modal) {
    return;
  }

  window.addEventListener('show-mma-popup', () => {
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
