import { languageService } from '@/services/language.instance';

const interestEventMap: Record<string, string> = {
  training: 'show-training-popup',
  mma: 'show-mma-popup',
  anime: 'show-anime-popup',
  dance: 'show-dance-popup',
  music: 'show-music-popup',
  gaming: 'show-gaming-popup',
  food: 'show-food-popup',
};

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
      if (!type) return;

      const extra = document.querySelector<HTMLParagraphElement>(
        `.home-section__extra[data-extra="${type}"]`,
      );
      if (!extra) return;

      const isHidden = extra.hidden;
      extra.hidden = !isHidden;
      btn.textContent = isHidden
        ? languageService.getText('showLess')
        : languageService.getText('showMore');
    });
  });

  const interestButtons = document.querySelectorAll<HTMLButtonElement>(
    '.interest-inline[data-interest]',
  );

  interestButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const interest = btn.dataset.interest;
      if (!interest) return;

      const eventName = interestEventMap[interest];
      if (!eventName) return;

      window.dispatchEvent(new CustomEvent(eventName));
    });
  });
};
