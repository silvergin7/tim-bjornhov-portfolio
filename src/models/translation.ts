export type Language = 'en' | 'sv';

export type TranslationKey =
  | 'siteTitle'
  | 'navHome'
  | 'navWork'
  | 'navSkills'
  | 'navContact'
  | 'homeEyebrow'
  | 'homeRole'
  | 'homeIntroShort'
  | 'homeIntroLong'
  | 'homeInterestsShort'
  | 'homeInterestsLong'
  | 'showMore'
  | 'showLess'
  | 'externalLinkEyebrow'
  | 'externalLinkTitle'
  | 'externalLinkText'
  | 'stayHere'
  | 'continue'
  | 'homeProtocolsBridge'
  | 'tauNetEyebrow'
  | 'tauNetTitle'
  | 'tauNetText'
  | 'bittensorEyebrow'
  | 'bittensorTitle'
  | 'bittensorText'
  | 'workEyebrow'
  | 'workSubtitle'
  | 'skillsEyebrow'
  | 'skillsSubtitle';

export type TranslationSet = Record<TranslationKey, string>;

export type TranslationMap = Record<Language, TranslationSet>;
