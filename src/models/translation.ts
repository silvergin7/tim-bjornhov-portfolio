export type Language = 'en' | 'sv';

export type TranslationKey = 'siteTitle' | 'loadingText';

export type TranslationSet = Record<TranslationKey, string>;

export type TranslationMap = Record<Language, TranslationSet>;
