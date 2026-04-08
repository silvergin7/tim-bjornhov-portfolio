export const setupTrainingModal = (): void => {
  const modal = document.querySelector(
    '[data-training-modal]',
  ) as HTMLDivElement | null;

  const closeElements = document.querySelectorAll<HTMLElement>(
    '[data-training-close]',
  );

  if (!modal) {
    return;
  }

  window.addEventListener('show-training-popup', () => {
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
