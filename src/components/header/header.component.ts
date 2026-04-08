import { createNavigation } from '@/components/navigation/navigation.component';

export const createHeader = (): string => {
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

      ${createNavigation()}
    </header>
  `;
};
