export const createDanceModal = (): string => {
  return `
      <div class="dance-modal" data-dance-modal hidden>
        <div class="dance-modal__backdrop"></div>
  
        <div
          class="dance-modal__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dance-modal-title"
        >
          <div class="dance-modal__media">
            <img
              class="dance-modal__image"
              src="/images/metals-palace.jpg"
              alt="Dance image for Metals Palace"
            />
          </div>
  
          <div class="dance-modal__content">
            <p class="dance-modal__eyebrow">Dance</p>
            <h2 id="dance-modal-title" class="dance-modal__title">
              Metals Palace
            </h2>
            <p class="dance-modal__text">
              A dance channel that I enjoy!
            </p>
  
            <div class="dance-modal__actions">
              <button
                type="button"
                class="dance-modal__button dance-modal__button--ghost"
                data-dance-close
              >
                Stay here
              </button>
  
              <a
                href="#"
                class="dance-modal__button dance-modal__button--primary"
                data-dance-confirm
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
};
