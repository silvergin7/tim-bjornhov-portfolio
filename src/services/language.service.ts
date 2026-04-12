import { translations } from '@/data/translations.data';
import type {
  Language,
  TranslationKey,
  TranslationSet,
} from '@/models/translation';

type LanguageChangeCallback = (language: Language) => void;

export default class LanguageService {
  private currentLanguage: Language;
  private listeners: LanguageChangeCallback[] = [];

  constructor(defaultLanguage: Language = 'en') {
    this.currentLanguage = defaultLanguage;
  }

  public getLanguage(): Language {
    return this.currentLanguage;
  }

  public toggleLanguage(): Language {
    this.currentLanguage = this.currentLanguage === 'en' ? 'sv' : 'en';
    this.listeners.forEach((cb) => cb(this.currentLanguage));
    return this.currentLanguage;
  }

  public onChange(callback: LanguageChangeCallback): void {
    this.listeners.push(callback);
  }

  public getTranslations(): TranslationSet {
    return translations[this.currentLanguage];
  }

  public getText(key: TranslationKey): string {
    return translations[this.currentLanguage][key];
  }
}
