export type ModalVariant = 'image' | 'link' | 'player';

export type ModalConfig = {
  key: string;
  variant: ModalVariant;
  eyebrow: string;
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
};
