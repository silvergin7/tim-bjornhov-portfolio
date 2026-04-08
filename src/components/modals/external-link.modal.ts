export const createExternalLinkModal = (): string => `
  <div class="external-link-modal" data-external-modal hidden>
    <div class="external-link-modal__backdrop" data-external-close></div>

    <div
      class="external-link-modal__dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="external-link-title"
    >
      <p class="external-link-modal__eyebrow">External link</p>
      <h2 id="external-link-title" class="external-link-modal__title">
        Leaving portfolio
      </h2>
      <p class="external-link-modal__text">
        This link will open outside of my portfolio site.
      </p>

      <div class="external-link-modal__actions">
        <button
          type="button"
          class="external-link-modal__button external-link-modal__button--ghost"
          data-external-close
        >
          Stay here
        </button>

        <a
          href="#"
          class="external-link-modal__button external-link-modal__button--primary"
          data-external-confirm
          target="_blank"
          rel="noopener noreferrer"
        >
          Continue
        </a>
      </div>
    </div>
  </div>
`;
