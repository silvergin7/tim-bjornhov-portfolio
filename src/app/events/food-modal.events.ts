export const setupFoodModal = (): void => {
  const modal = document.querySelector(
    '[data-food-modal]',
  ) as HTMLDivElement | null;

  const confirmLink = document.querySelector(
    '[data-food-confirm]',
  ) as HTMLAnchorElement | null;

  const closeElements =
    document.querySelectorAll<HTMLElement>('[data-food-close]');

  if (!modal || !confirmLink) {
    return;
  }

  window.addEventListener('show-food-popup', (event: Event) => {
    const customEvent = event as CustomEvent<{ href?: string }>;
    const href = customEvent.detail?.href;

    if (!href) {
      return;
    }

    confirmLink.setAttribute('href', href);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });

  closeElements.forEach((element) => {
    element.addEventListener('click', () => {
      modal.hidden = true;
      confirmLink.setAttribute('href', '#');
      document.body.style.overflow = '';
    });
  });
};
