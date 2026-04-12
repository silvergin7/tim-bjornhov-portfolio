import { languageService } from '@/services/language.instance';

export const createExternalLinkModal = (): string => `
  <div class="external-link-modal" data-external-modal hidden>
    <div class="external-link-modal__backdrop" data-external-close></div>

    <div
      class="external-link-modal__dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="external-link-title"
    >
      <p class="external-link-modal__eyebrow">
        ${languageService.getText('externalLinkEyebrow')}
      </p>
      <h2 id="external-link-title" class="external-link-modal__title">
        ${languageService.getText('externalLinkTitle')}
      </h2>
      <p class="external-link-modal__text">
        ${languageService.getText('externalLinkText')}
      </p>

      <div class="external-link-modal__actions">
        <button
          type="button"
          class="external-link-modal__button external-link-modal__button--ghost"
          data-external-close
        >
          ${languageService.getText('stayHere')}
        </button>

        <a
          href="#"
          class="external-link-modal__button external-link-modal__button--primary"
          data-external-confirm
          target="_blank"
          rel="noopener noreferrer"
        >
          ${languageService.getText('continue')}
        </a>
      </div>
    </div>
  </div>
`;
