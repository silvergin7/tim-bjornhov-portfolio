export const createGamingModal = (): string => {
  return `
    <div class="gaming-modal" data-gaming-modal hidden>
      <div class="gaming-modal__backdrop"></div>

      <div
        class="gaming-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gaming-modal-title"
      >
        <button
          type="button"
          class="gaming-modal__close"
          aria-label="Close gaming popup"
          data-gaming-close
        >
          ✕
        </button>

        <div class="gaming-modal__media">
          <img
            class="gaming-modal__image"
            src="/images/wow-classic.jpg"
            alt="World of Warcraft Classic themed gaming image"
          />
        </div>

        <div class="gaming-modal__content">
          <p class="gaming-modal__eyebrow">Gaming</p>
          <h2 id="gaming-modal-title" class="gaming-modal__title">
            World of Warcraft Classic
          </h2>
          <p class="gaming-modal__text">
            A massive multiplayer online game that taught me the importance of working together and working towards a goal.
          </p>
        </div>
      </div>
    </div>
  `;
};
