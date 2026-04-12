import { getProfile } from '@/data/profile.data';
import { languageService } from '@/services/language.instance';
import { renderInterestsText } from './home-interests.helper';

export const createHomeSection = (): string => {
  const profile = getProfile();

  return `
    <section id="home" class="page-section home-section">
      <div class="page-section__inner home-section__inner">
        <p class="eyebrow">${languageService.getText('homeEyebrow')}</p>
        <p class="home-section__role">${profile.role}</p>
        <h1 class="home-section__title">${profile.name}</h1>

        <figure class="home-section__portrait">
          <img
            class="home-section__portrait-image"
            src="/images/jag.jpg"
            alt="Portrait of Tim Björnhov"
          />
        </figure>

        <div class="home-section__block" data-expandable>
          <p class="home-section__intro">
            ${profile.introShort}
          </p>
          <p class="home-section__extra" data-extra="intro">
            ${profile.introLong}
          </p>
          <p class="home-section__extra home-section__protocols-bridge" data-extra="intro">
            ${languageService.getText('homeProtocolsBridge')}
          </p>
          <div class="home-section__extra home-section__protocols" data-extra="intro">
            <button class="protocol-icon" type="button" data-interest="tau-net">
              <img src="/images/Agoras.png" alt="Tau Net / Agoras" />
            </button>
            <button class="protocol-icon" type="button" data-interest="bittensor">
              <img src="/images/Bittensor.png" alt="Bittensor" />
            </button>
          </div>
          <button
            class="home-section__toggle"
            type="button"
            data-toggle="intro"
          >
            ${languageService.getText('showMore')}
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
            ${languageService.getText('showMore')}
          </button>
        </div>
      </div>
    </section>
  `;
};
