export const createMmaModal = (): string => {
  return `
    <div class="mma-modal" data-mma-modal hidden>
      <div class="mma-modal__backdrop"></div>

      <div
        class="mma-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mma-modal-title"
      >
        <button
          type="button"
          class="mma-modal__close"
          aria-label="Close MMA popup"
          data-mma-close
        >
          ✕
        </button>

        <div class="mma-modal__media">
          <img
            class="mma-modal__image"
            src="/images/mma.png"
            alt="MMA moment that represents my interest in fighting and discipline"
          />
        </div>

        <div class="mma-modal__content">
          <p class="mma-modal__eyebrow">MMA</p>
          <h2 id="mma-modal-title" class="mma-modal__title">
            Mixed Martial Arts
          </h2>
          <p class="mma-modal__text">
            A big source of inspiration for discipline, toughness and strategy.
          </p>
        </div>
      </div>
    </div>
  `;
};
