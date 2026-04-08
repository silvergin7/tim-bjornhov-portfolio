import { translations } from '@/data/translations.data';
import type {
  Language,
  TranslationKey,
  TranslationSet,
} from '@/models/translation';

export default class LanguageService {
  private currentLanguage: Language;

  constructor(defaultLanguage: Language = 'en') {
    this.currentLanguage = defaultLanguage;
  }

  public getLanguage(): Language {
    return this.currentLanguage;
  }

  public toggleLanguage(): Language {
    this.currentLanguage = this.currentLanguage === 'en' ? 'sv' : 'en';
    return this.currentLanguage;
  }

  public getTranslations(): TranslationSet {
    return translations[this.currentLanguage];
  }

  public getText(key: TranslationKey): string {
    return translations[this.currentLanguage][key];
  }
}
