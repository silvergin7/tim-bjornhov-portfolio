export const setupMenuEvents = (): void => {
  const menu = document.querySelector(
    '[data-mobile-menu]',
  ) as HTMLElement | null;
  const openButton = document.querySelector(
    '[data-menu-toggle]',
  ) as HTMLButtonElement | null;
  const closeButton = document.querySelector(
    '[data-menu-close]',
  ) as HTMLButtonElement | null;

  if (!menu || !openButton || !closeButton) {
    return;
  }

  openButton.addEventListener('click', () => {
    menu.classList.add('is-open');
    openButton.setAttribute('aria-expanded', 'true');
  });

  closeButton.addEventListener('click', () => {
    menu.classList.remove('is-open');
    openButton.setAttribute('aria-expanded', 'false');
  });
};
