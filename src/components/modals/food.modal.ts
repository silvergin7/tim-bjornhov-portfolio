export const createFoodModal = (): string => {
  return `
      <div class="food-modal" data-food-modal hidden>
        <div class="food-modal__backdrop"></div>
  
        <div
          class="food-modal__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="food-modal-title"
        >
          <div class="food-modal__media">
            <img
              class="food-modal__image"
              src="/images/taste-of-thailand.png"
              alt="Taste of Thailand restaurant image"
            />
          </div>
  
          <div class="food-modal__content">
            <p class="food-modal__eyebrow">Food</p>
            <h2 id="food-modal-title" class="food-modal__title">
              Taste of Thailand
            </h2>
            <p class="food-modal__text">
              The best Thai food in town!
            </p>
  
            <div class="food-modal__actions">
              <button
                type="button"
                class="food-modal__button food-modal__button--ghost"
                data-food-close
              >
                Stay here
              </button>
  
              <a
                href="#"
                class="food-modal__button food-modal__button--primary"
                data-food-confirm
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
