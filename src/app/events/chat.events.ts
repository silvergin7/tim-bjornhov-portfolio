import { getFallbackReply } from '@/data/contact.data';
import { languageService } from '@/services/language.instance';

const WEB3FORMS_KEY = 'dbf2d68b-1d0a-4640-b8c8-911dfcda6b64';

const createBubble = (text: string, role: 'user' | 'bot'): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = `chat__bubble chat__bubble--${role}`;
  el.textContent = text;
  return el;
};

const scrollToBottom = (container: HTMLElement): void => {
  container.scrollTop = container.scrollHeight;
};

const setupCopyButtons = (): void => {
  document.querySelectorAll<HTMLButtonElement>('[data-copy-value]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.dataset.copyValue ?? '';
      const row = btn.closest('.contact-link-row');
      const display = row?.querySelector<HTMLSpanElement>('[data-copy-display]');
      if (!display) return;

      navigator.clipboard.writeText(value);
      display.hidden = !display.hidden;
    });
  });
};

const showFieldError = (field: HTMLElement, message: string): void => {
  field.classList.add('email-form__field--invalid');
  const error = field.parentElement?.querySelector<HTMLSpanElement>('[data-error]');
  if (!error) return;
  error.textContent = message;
  error.hidden = false;
};

const clearFieldError = (field: HTMLElement): void => {
  field.classList.remove('email-form__field--invalid');
  const error = field.parentElement?.querySelector<HTMLSpanElement>('[data-error]');
  if (error) error.hidden = true;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-]+$/;

const validateForm = (form: HTMLFormElement): boolean => {
  let valid = true;

  form.querySelectorAll<HTMLElement>('[data-required]').forEach((field) => {
    const value = (field as HTMLInputElement | HTMLTextAreaElement).value.trim();
    if (!value) {
      showFieldError(field, languageService.getText('validationRequired'));
      valid = false;
    } else {
      clearFieldError(field);
    }
  });

  const emailField = form.querySelector<HTMLInputElement>('[data-email-field]');
  const phoneField = form.querySelector<HTMLInputElement>('[data-phone-field]');
  const emailVal = emailField?.value.trim() ?? '';
  const phoneVal = phoneField?.value.trim() ?? '';

  if (!emailVal && !phoneVal) {
    if (emailField) showFieldError(emailField, languageService.getText('validationContact'));
    valid = false;
  } else {
    if (emailField) clearFieldError(emailField);
    if (phoneField) clearFieldError(phoneField);
  }

  if (emailVal && !EMAIL_RE.test(emailVal)) {
    if (emailField) showFieldError(emailField, languageService.getText('validationEmail'));
    valid = false;
  }

  if (phoneVal && !PHONE_RE.test(phoneVal)) {
    if (phoneField) showFieldError(phoneField, languageService.getText('validationPhone'));
    valid = false;
  }

  return valid;
};

const setupEmailForm = (): void => {
  const toggle = document.querySelector<HTMLButtonElement>('[data-email-toggle]');
  const form = document.querySelector<HTMLFormElement>('[data-email-form]');
  if (!toggle || !form) return;

  toggle.addEventListener('click', () => {
    form.hidden = !form.hidden;
  });

  form.querySelectorAll<HTMLElement>('.email-form__field').forEach((field) => {
    field.addEventListener('input', () => clearFieldError(field));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const status = form.querySelector<HTMLParagraphElement>('[data-email-status]');
    const submit = form.querySelector<HTMLButtonElement>('.email-form__submit');
    if (!status || !submit) return;

    submit.disabled = true;
    status.hidden = true;

    const data = new FormData(form);
    data.append('access_key', WEB3FORMS_KEY);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        status.textContent = languageService.getText('emailFormSuccess');
        status.className = 'email-form__status email-form__status--success';
        form.reset();
      } else {
        status.textContent = languageService.getText('emailFormError');
        status.className = 'email-form__status email-form__status--error';
      }
    } catch {
      status.textContent = languageService.getText('emailFormError');
      status.className = 'email-form__status email-form__status--error';
    }

    status.hidden = false;
    submit.disabled = false;
  });
};

export const setupChatEvents = (): void => {
  const form = document.querySelector<HTMLFormElement>('[data-chat-form]');
  const input = document.querySelector<HTMLInputElement>('[data-chat-input]');
  const messages = document.querySelector<HTMLDivElement>('[data-chat-messages]');

  setupCopyButtons();
  setupEmailForm();

  if (!form || !input || !messages) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    messages.appendChild(createBubble(text, 'user'));
    input.value = '';
    scrollToBottom(messages);

    setTimeout(() => {
      messages.appendChild(createBubble(getFallbackReply(), 'bot'));
      scrollToBottom(messages);
    }, 600);
  });
};
