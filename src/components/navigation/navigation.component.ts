import { navigationLinks } from '@/data/navigation.data';

export const createNavigation = (): string => {
  const linksMarkup = navigationLinks
    .map((link) => {
      return `
        <li class="mobile-nav__item">
          <a class="mobile-nav__link" href="${link.href}">
            ${link.label}
          </a>
        </li>
      `;
    })
    .join('');

  return `
    <aside class="mobile-menu" data-mobile-menu>
      <div class="mobile-menu__inner">
        <div class="mobile-menu__top">
          <button class="mobile-menu__brand" type="button" aria-label="Tim Björnhov logo">
            <span class="mobile-menu__brand-mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" class="brand-logo" role="img">
                <path d="M10 16H40" />
                <path d="M25 16V48" />
                <path d="M10 30H30" />
                <path d="M42 16V48" />
                <path d="M42 16H54C58 16 60 18 60 22V24C60 29 57 31 52 31H42" />
                <path d="M42 31H53C58 31 60 33 60 38V41C60 45 57 48 52 48H42" />
              </svg>
            </span>
            <span class="mobile-menu__brand-text">Tim Björnhov</span>
          </button>

          <button
            class="mobile-menu__close"
            type="button"
            aria-label="Close navigation menu"
            data-menu-close
          >
            ✕
          </button>
        </div>

        <nav class="mobile-nav" aria-label="Mobile navigation">
          <ul class="mobile-nav__list">
            ${linksMarkup}
          </ul>
        </nav>
      </div>
    </aside>
  `;
};
