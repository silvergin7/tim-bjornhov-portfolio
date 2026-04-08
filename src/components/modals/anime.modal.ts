export const createAnimeModal = (): string => {
  return `
    <div class="anime-modal" data-anime-modal hidden>
      <div class="anime-modal__backdrop"></div>

      <div
        class="anime-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="anime-modal-title"
      >
        <button
          type="button"
          class="anime-modal__close"
          aria-label="Close anime popup"
          data-anime-close
        >
          ✕
        </button>

        <div class="anime-modal__media">
          <img
            class="anime-modal__image"
            src="/images/logh.png"
            alt="Legend of the Galactic Heroes anime cover"
          />
        </div>

        <div class="anime-modal__content">
          <p class="anime-modal__eyebrow">Anime</p>
          <h2 id="anime-modal-title" class="anime-modal__title">
            Legend of the Galactic Heroes
          </h2>
          <p class="anime-modal__text">
            One of my all-time favorite anime series.
          </p>
        </div>
      </div>
    </div>
  `;
};
