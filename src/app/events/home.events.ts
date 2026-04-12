import { languageService } from '@/services/language.instance';

const interestEventMap: Record<string, string> = {
  training: 'show-training-popup',
  mma: 'show-mma-popup',
  anime: 'show-anime-popup',
  dance: 'show-dance-popup',
  music: 'show-music-popup',
  gaming: 'show-gaming-popup',
  food: 'show-food-popup',
  'tau-net': 'show-tau-net-popup',
  bittensor: 'show-bittensor-popup',
};

export const setupExpandableBlocks = (): void => {
  const extraElements = document.querySelectorAll<HTMLElement>(
    '.home-section__extra',
  );

  extraElements.forEach((el) => {
    el.hidden = true;
  });

  const toggleButtons = document.querySelectorAll<HTMLButtonElement>(
    '.home-section__toggle',
  );

  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.toggle;
      if (!type) return;

      const extras = document.querySelectorAll<HTMLElement>(
        `.home-section__extra[data-extra="${type}"]`,
      );
      if (extras.length === 0) return;

      const isHidden = extras[0].hidden;
      extras.forEach((el) => {
        el.hidden = !isHidden;
      });
      btn.textContent = isHidden
        ? languageService.getText('showLess')
        : languageService.getText('showMore');
    });
  });

  const interestButtons = document.querySelectorAll<HTMLButtonElement>(
    '[data-interest]',
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
