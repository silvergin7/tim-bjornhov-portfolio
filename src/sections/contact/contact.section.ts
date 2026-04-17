import { languageService } from '@/services/language.instance';
import { getContactLinks, getWelcomeMessage } from '@/data/contact.data';

const sendIcon = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;

const copyIcon = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;

export const createContactSection = (): string => {
  const links = getContactLinks();
  const welcome = getWelcomeMessage();

  return `
    <section id="contact" class="page-section contact-section">
      <div class="page-section__inner contact-section__inner">
        <p class="eyebrow">${languageService.getText('contactEyebrow')}</p>
        <p class="contact-section__subtitle">${languageService.getText('contactSubtitle')}</p>

        <div class="contact-section__grid">
        <div class="chat" data-chat>
          <p class="chat__disclaimer">${languageService.getText('contactDisclaimer')}</p>
          <div class="chat__messages" data-chat-messages>
            <div class="chat__bubble chat__bubble--bot">${welcome}</div>
          </div>
          <form class="chat__input-bar" data-chat-form>
            <input
              class="chat__input"
              type="text"
              placeholder="${languageService.getText('chatPlaceholder')}"
              data-chat-input
              autocomplete="off"
            />
            <button class="chat__send" type="submit" aria-label="Send">${sendIcon}</button>
          </form>
        </div>

        <div class="contact-links">
          <div class="contact-link-row">
            <button class="contact-link contact-link--button" type="button" data-email-toggle>
              <span class="contact-link__icon">${links[0].icon}</span>
              <span class="contact-link__label">${links[0].label}</span>
            </button>
            ${links[0].copyValue ? `<span class="contact-link__value" data-copy-display hidden>${links[0].copyValue}</span>` : ''}
            ${links[0].copyValue ? `<button class="contact-link__copy" type="button" data-copy-value="${links[0].copyValue}" aria-label="Show ${links[0].label}">${copyIcon}</button>` : ''}
          </div>

          <form class="email-form" data-email-form hidden novalidate>
            <div class="email-form__group">
              <input class="email-form__field" type="text" name="name" placeholder="${languageService.getText('emailFormName')}" data-required />
              <span class="email-form__error" data-error hidden></span>
            </div>
            <div class="email-form__group">
              <input class="email-form__field" type="email" name="email" placeholder="${languageService.getText('emailFormEmail')}" data-email-field />
              <span class="email-form__error" data-error hidden></span>
            </div>
            <div class="email-form__group">
              <input class="email-form__field" type="tel" name="phone" placeholder="${languageService.getText('emailFormPhone')}" data-phone-field />
              <span class="email-form__error" data-error hidden></span>
            </div>
            <div class="email-form__group">
              <input class="email-form__field" type="text" name="subject" placeholder="${languageService.getText('emailFormSubject')}" />
            </div>
            <div class="email-form__group">
              <textarea class="email-form__field email-form__textarea" name="message" placeholder="${languageService.getText('emailFormMessage')}" rows="5" data-required></textarea>
              <span class="email-form__error" data-error hidden></span>
            </div>
            <button class="email-form__submit" type="submit">${languageService.getText('emailFormSend')}</button>
            <p class="email-form__status" data-email-status hidden></p>
          </form>

          ${links
            .slice(1)
            .map(
              (link) => `
            <div class="contact-link-row">
              <a class="contact-link" href="${link.href}" target="_blank" rel="noopener noreferrer">
                <span class="contact-link__icon">${link.icon}</span>
                <span class="contact-link__label">${link.label}</span>
              </a>
              ${link.copyValue ? `<span class="contact-link__value" data-copy-display hidden>${link.copyValue}</span>` : ''}
              ${link.copyValue ? `<button class="contact-link__copy" type="button" data-copy-value="${link.copyValue}" aria-label="Show ${link.label}">${copyIcon}</button>` : ''}
            </div>
          `
            )
            .join('')}
        </div>
        </div>
      </div>
    </section>
  `;
};
