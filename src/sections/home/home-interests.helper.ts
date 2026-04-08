import { profile } from '@/data/profile.data';

type InterestKey =
  | 'training'
  | 'mma'
  | 'anime'
  | 'dance'
  | 'music'
  | 'gaming'
  | 'food';

type InterestLink = {
  key: InterestKey;
  label: string;
  href?: string;
};

const interestLinks: InterestLink[] = [
  {
    key: 'training',
    label: 'training,',
  },
  {
    key: 'mma',
    label: 'MMA,',
  },
  {
    key: 'anime',
    label: 'anime,',
  },
  {
    key: 'dance',
    label: 'dance,',
    href: 'https://www.youtube.com/@metalspalace/',
  },
  {
    key: 'music',
    label: 'music,',
  },
  {
    key: 'gaming',
    label: 'gaming,',
  },
  {
    key: 'food',
    label: 'food',
    href: 'https://www.tasteofthailand.nu/',
  },
];

export const renderInterestsText = (): string => {
  let text = profile.interestsLong;

  interestLinks.forEach((item) => {
    const token = `{{${item.key}}}`;

    if (
      item.key === 'training' ||
      item.key === 'anime' ||
      item.key === 'mma' ||
      item.key === 'dance' ||
      item.key === 'music' ||
      item.key === 'gaming' ||
      item.key === 'food'
    ) {
      text = text.replace(
        token,
        `<button class="interest-inline" type="button" data-interest="${item.key}" data-href="${item.href ?? ''}">${item.label}</button>`,
      );

      return;
    }

    text = text.replace(
      token,
      `<a class="interest-inline" href="${item.href}" target="_blank" rel="noopener noreferrer">${item.label}</a>`,
    );
  });

  return text;
};
