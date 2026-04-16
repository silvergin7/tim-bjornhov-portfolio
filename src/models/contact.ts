export type ChatMessage = {
  role: 'user' | 'bot';
  text: string;
};

export type ContactLink = {
  label: string;
  href: string;
  icon: string;
  copyValue?: string;
};
