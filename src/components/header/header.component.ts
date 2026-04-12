import { createNavigation } from '@/components/navigation/navigation.component';
import { getNavigationLinks } from '@/data/navigation.data';
import { languageService } from '@/services/language.instance';

const createDesktopNav = (): string => {
  const links = getNavigationLinks()
    .map(
      (link) =>
        `<a class="desktop-nav__link" href="${link.href}">${link.label}</a>`,
    )
    .join('');

  return `<nav class="desktop-nav" aria-label="Desktop navigation">${links}</nav>`;
};

export const createHeader = (): string => {
  const otherLang = languageService.getLanguage() === 'en' ? 'SV' : 'EN';

  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="site-header__brand" href="#home" aria-label="Go to home section">
          <span class="site-header__brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" class="brand-logo" role="img">
              <path d="M10 16H40" />
              <path d="M25 16V48" />
              <path d="M10 30H30" />
              <path d="M42 16V48" />
              <path d="M42 16H54C58 16 60 18 60 22V24C60 29 57 31 52 31H42" />
              <path d="M42 31H53C58 31 60 33 60 38V41C60 45 57 48 52 48H42" />
            </svg>
          </span>
          <span class="site-header__brand-text">Tim Björnhov</span>
        </a>

        ${createDesktopNav()}

        <div class="site-header__actions">
          <button
            class="site-header__lang-toggle"
            type="button"
            aria-label="Switch language"
            data-lang-toggle
          >
            ${otherLang}
          </button>

          <button
            class="site-header__menu-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded="false"
            data-menu-toggle
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      ${createNavigation()}
    </header>
  `;
};
