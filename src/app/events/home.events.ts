export const setupExpandableBlocks = (): void => {
  const extraParagraphs = document.querySelectorAll<HTMLParagraphElement>(
    '.home-section__extra',
  );

  extraParagraphs.forEach((p) => {
    p.hidden = true;
  });

  const toggleButtons = document.querySelectorAll<HTMLButtonElement>(
    '.home-section__toggle',
  );

  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.toggle;

      if (!type) {
        return;
      }

      const extra = document.querySelector<HTMLParagraphElement>(
        `.home-section__extra[data-extra="${type}"]`,
      );

      if (!extra) {
        return;
      }

      const isHidden = extra.hidden;
      extra.hidden = !isHidden;
      btn.textContent = isHidden ? 'Show less' : 'Show more';
    });
  });

  const interestButtons = document.querySelectorAll<HTMLButtonElement>(
    '.interest-inline[data-interest]',
  );

  interestButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const interest = btn.dataset.interest;

      if (interest === 'training') {
        const event = new CustomEvent('show-training-popup');
        window.dispatchEvent(event);
      }

      if (interest === 'anime') {
        const event = new CustomEvent('show-anime-popup');
        window.dispatchEvent(event);
      }

      if (interest === 'mma') {
        const event = new CustomEvent('show-mma-popup');
        window.dispatchEvent(event);
      }

      if (interest === 'dance') {
        const href = btn.dataset.href;

        if (!href) {
          return;
        }

        const event = new CustomEvent('show-dance-popup', {
          detail: { href },
        });

        window.dispatchEvent(event);
      }

      if (interest === 'music') {
        const event = new CustomEvent('show-music-popup');
        window.dispatchEvent(event);
      }

      if (interest === 'gaming') {
        const event = new CustomEvent('show-gaming-popup');
        window.dispatchEvent(event);
      }
    });
  });
};
