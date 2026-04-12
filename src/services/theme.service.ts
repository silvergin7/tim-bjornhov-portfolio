export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

export default class ThemeService {
  private currentTheme: Theme;

  constructor() {
    this.currentTheme = this.resolveInitialTheme();
  }

  public init(): void {
    this.applyTheme(this.currentTheme);
  }

  public getTheme(): Theme {
    return this.currentTheme;
  }

  public toggleTheme(): Theme {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, this.currentTheme);
    this.applyTheme(this.currentTheme);
    return this.currentTheme;
  }

  private resolveInitialTheme(): Theme {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
