export const setupExternalLinkModal = (): void => {
  const modal = document.querySelector(
    '[data-external-modal]',
  ) as HTMLDivElement | null;
  const confirmLink = document.querySelector(
    '[data-external-confirm]',
  ) as HTMLAnchorElement | null;
  const closeElements = document.querySelectorAll<HTMLElement>(
    '[data-external-close]',
  );
  const externalLinks = document.querySelectorAll<HTMLAnchorElement>(
    '.interest-inline[href]',
  );

  if (!modal || !confirmLink || !externalLinks.length) return;

  externalLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const href = link.getAttribute('href');
      if (!href) return;

      confirmLink.setAttribute('href', href);
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  closeElements.forEach((element) => {
    element.addEventListener('click', () => {
      modal.hidden = true;
      confirmLink.setAttribute('href', '#');
      document.body.style.overflow = '';
    });
  });
};
