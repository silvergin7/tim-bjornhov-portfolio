export const createTrainingModal = (): string => {
  return `
      <div class="training-modal" data-training-modal hidden>
        <div class="training-modal__backdrop" data-training-close></div>
  
        <div
          class="training-modal__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="training-modal-title"
        >
          <button
            type="button"
            class="training-modal__close"
            aria-label="Close training image"
            data-training-close
          >
            ✕
          </button>
  
          <div class="training-modal__media">
            <img
  class="training-modal__image"
  src="/images/pildammsparken.jpg"
  alt="Outdoor training area in Pildammsparken"
/>
          </div>
  
          <div class="training-modal__content">
            <p class="training-modal__eyebrow">Training</p>
            <h2 id="training-modal-title" class="training-modal__title">
              Outdoor training
            </h2>
            <p class="training-modal__text">
              A place I enjoy for training and clearing my head.
            </p>
          </div>
        </div>
      </div>
    `;
};
