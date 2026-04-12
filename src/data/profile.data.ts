import type { Profile } from '@/models/profile';
import { languageService } from '@/services/language.instance';

export const getProfile = (): Profile => ({
  name: 'Tim Björnhov',
  role: languageService.getText('homeRole'),
  introShort: languageService.getText('homeIntroShort'),
  introLong: languageService.getText('homeIntroLong'),
  interestsShort: languageService.getText('homeInterestsShort'),
  interestsLong: languageService.getText('homeInterestsLong'),
});
