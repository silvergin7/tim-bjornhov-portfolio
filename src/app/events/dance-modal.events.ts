export const setupDanceModal = (): void => {
  const modal = document.querySelector(
    '[data-dance-modal]',
  ) as HTMLDivElement | null;

  const confirmLink = document.querySelector(
    '[data-dance-confirm]',
  ) as HTMLAnchorElement | null;

  const closeElements =
    document.querySelectorAll<HTMLElement>('[data-dance-close]');

  if (!modal || !confirmLink) {
    return;
  }

  window.addEventListener('show-dance-popup', (event: Event) => {
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
