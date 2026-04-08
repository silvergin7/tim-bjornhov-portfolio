export const createMusicModal = (): string => {
  return `
    <div class="music-modal" data-music-modal hidden>
      <div class="music-modal__backdrop"></div>

      <div
        class="music-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="music-modal-title"
      >
        <button
          type="button"
          class="music-modal__close"
          aria-label="Close music popup"
          data-music-close
        >
          ✕
        </button>

        <div class="music-modal__media">
          <img
            class="music-modal__image"
            src="/images/moment-of-truth.jpg"
            alt="Moment of Truth cover"
          />

          <button
            type="button"
            class="music-modal__play"
            aria-label="Play song"
            data-music-confirm
          >
            ▶
          </button>
        </div>

        <div class="music-modal__content">
          <p class="music-modal__eyebrow">Music</p>
          <h2 id="music-modal-title" class="music-modal__title">
            Moment of Truth
          </h2>
          <p class="music-modal__text">
            Tap play to start the song in the background and open the mini player.
          </p>
        </div>
      </div>
    </div>
  `;
};
