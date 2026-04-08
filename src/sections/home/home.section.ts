import { profile } from '@/data/profile.data';
import { renderInterestsText } from './home-interests.helper';

export const createHomeSection = (): string => {
  return `
    <section id="home" class="page-section home-section">
      <div class="page-section__inner home-section__inner">
        <p class="eyebrow">Home</p>
        <p class="home-section__role">${profile.role}</p>
        <h1 class="home-section__title">${profile.name}</h1>

        <div class="home-section__block" data-expandable>
          <p class="home-section__intro">
            ${profile.introShort}
          </p>
          <p class="home-section__extra" data-extra="intro">
            ${profile.introLong}
          </p>
          <button
            class="home-section__toggle"
            type="button"
            data-toggle="intro"
          >
            Show more
          </button>
        </div>

        <div class="home-section__block" data-expandable>
          <p class="home-section__interests">
            ${profile.interestsShort}
          </p>
          <p class="home-section__extra" data-extra="interests">
  ${renderInterestsText()}
</p>
          <button
            class="home-section__toggle"
            type="button"
            data-toggle="interests"
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  `;
};
