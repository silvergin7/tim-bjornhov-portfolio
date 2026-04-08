export const setupGamingModal = (): void => {
  const modal = document.querySelector(
    '[data-gaming-modal]',
  ) as HTMLDivElement | null;

  const closeElements = document.querySelectorAll<HTMLElement>(
    '[data-gaming-close]',
  );

  if (!modal) {
    return;
  }

  window.addEventListener('show-gaming-popup', () => {
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
