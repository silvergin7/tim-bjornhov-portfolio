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
  const brandButton = document.querySelector(
    '[data-menu-brand]',
  ) as HTMLButtonElement | null;

  if (!menu || !openButton) {
    return;
  }

  const closeMenu = (): void => {
    menu.classList.remove('is-open');
    openButton.setAttribute('aria-expanded', 'false');
  };

  openButton.addEventListener('click', () => {
    menu.classList.add('is-open');
    openButton.setAttribute('aria-expanded', 'true');
  });

  closeButton?.addEventListener('click', closeMenu);
  brandButton?.addEventListener('click', closeMenu);

  const navLinks = menu.querySelectorAll<HTMLAnchorElement>('.mobile-nav__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
};
