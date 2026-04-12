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
  | 'workEyebrow'
  | 'workTitle'
  | 'workProjectsTitle'
  | 'workExperimentTitle'
  | 'workExperimentText'
  | 'viewProject'
  | 'skillsEyebrow'
  | 'skillsTitle'
  | 'skillsTechTitle'
  | 'skillsLearningTitle'
  | 'skillsEducationTitle'
  | 'skillsEducationText'
  | 'contactEyebrow'
  | 'contactTitle'
  | 'contactText'
  | 'contactEmail'
  | 'contactGithub';

export type TranslationSet = Record<TranslationKey, string>;

export type TranslationMap = Record<Language, TranslationSet>;
