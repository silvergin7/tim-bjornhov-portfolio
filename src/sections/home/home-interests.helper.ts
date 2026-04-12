import { languageService } from '@/services/language.instance';

type InterestKey =
  | 'training'
  | 'mma'
  | 'anime'
  | 'dance'
  | 'music'
  | 'gaming'
  | 'food';

type InterestItem = {
  key: InterestKey;
  label: string;
};

const interestItems: InterestItem[] = [
  { key: 'training', label: 'training,' },
  { key: 'mma', label: 'MMA,' },
  { key: 'anime', label: 'anime,' },
  { key: 'dance', label: 'dance,' },
  { key: 'music', label: 'music,' },
  { key: 'gaming', label: 'gaming,' },
  { key: 'food', label: 'food' },
];

export const renderInterestsText = (): string => {
  let text = languageService.getText('homeInterestsLong');

  interestItems.forEach((item) => {
    const token = `{{${item.key}}}`;

    text = text.replace(
      token,
      `<button class="interest-inline" type="button" data-interest="${item.key}">${item.label}</button>`,
    );
  });

  return text;
};
