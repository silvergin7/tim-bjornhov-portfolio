import { createNavigation } from '@/components/navigation/navigation.component';
import { getDesktopNavLinks } from '@/data/navigation.data';
import { languageService } from '@/services/language.instance';
import { themeService } from '@/services/theme.instance';

const sunIcon = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

const moonIcon = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;

export const createHeader = (): string => {
  const otherLang = languageService.getLanguage() === 'en' ? 'SV' : 'EN';
  const isDark = themeService.getTheme() === 'dark';
  const themeIcon = isDark ? sunIcon : moonIcon;
  const themeLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';

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

        <nav class="desktop-nav" aria-label="Main navigation">
          ${getDesktopNavLinks()
            .map((link) => `<a class="desktop-nav__link" href="${link.href}">${link.label}</a>`)
            .join('')}
        </nav>

        <div class="site-header__actions">
          <button
            class="site-header__theme-toggle"
            type="button"
            aria-label="${themeLabel}"
            data-theme-toggle
          >
            ${themeIcon}
          </button>

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
