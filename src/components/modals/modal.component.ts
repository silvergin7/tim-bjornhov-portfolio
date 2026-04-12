import type { ModalConfig } from '@/models/modal';

const createCloseButton = (key: string): string => `
  <button
    type="button"
    class="modal__close"
    aria-label="Close popup"
    data-modal-close="${key}"
  >
    ✕
  </button>
`;

const createPlayButton = (key: string): string => `
  <button
    type="button"
    class="modal__play"
    aria-label="Play song"
    data-modal-confirm="${key}"
  >
    ▶
  </button>
`;

const createLinkActions = (key: string, href: string): string => `
  <div class="modal__actions">
    <button
      type="button"
      class="modal__button modal__button--ghost"
      data-modal-close="${key}"
    >
      Stay here
    </button>
    <a
      href="${href}"
      class="modal__button modal__button--primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      Continue
    </a>
  </div>
`;

const createModal = (config: ModalConfig): string => {
  const hasCloseButton = config.variant === 'image' || config.variant === 'player';
  const hasPlayButton = config.variant === 'player';
  const hasLinkActions = config.variant === 'link' && config.href;

  return `
    <div class="modal" data-modal="${config.key}" hidden>
      <div class="modal__backdrop"></div>
      <div
        class="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title-${config.key}"
      >
        ${hasCloseButton ? createCloseButton(config.key) : ''}
        <div class="modal__media">
          <img
            class="modal__image"
            src="${config.imageSrc}"
            alt="${config.imageAlt}"
          />
          ${hasPlayButton ? createPlayButton(config.key) : ''}
        </div>
        <div class="modal__content">
          <p class="modal__eyebrow">${config.eyebrow}</p>
          <h2 id="modal-title-${config.key}" class="modal__title">
            ${config.title}
          </h2>
          <p class="modal__text">${config.text}</p>
          ${hasLinkActions ? createLinkActions(config.key, config.href!) : ''}
        </div>
      </div>
    </div>
  `;
};

export const createAllModals = (configs: ModalConfig[]): string => {
  return configs.map(createModal).join('');
};
