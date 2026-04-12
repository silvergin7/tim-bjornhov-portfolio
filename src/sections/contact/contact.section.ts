import { languageService } from '@/services/language.instance';

export const createContactSection = (): string => {
  return `
    <section id="contact" class="page-section contact-section">
      <div class="page-section__inner contact-section__inner">
        <p class="eyebrow">${languageService.getText('contactEyebrow')}</p>
        <h2 class="contact-section__title">
          ${languageService.getText('contactTitle')}
        </h2>
        <p class="contact-section__text">
          ${languageService.getText('contactText')}
        </p>

        <div class="contact-section__links">
          <a
            class="contact-section__link"
            href="mailto:tim@bjornhov.com"
          >
            ${languageService.getText('contactEmail')}
          </a>
          <a
            class="contact-section__link"
            href="https://github.com/timbjornhov"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${languageService.getText('contactGithub')}
          </a>
        </div>
      </div>
    </section>
  `;
};
