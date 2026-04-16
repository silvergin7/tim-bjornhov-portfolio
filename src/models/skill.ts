export type SkillSubgroup = {
  label: string;
  tags?: string[];
  description?: string;
};

export type SkillGroup = {
  title: string;
  intro?: string;
  variant: 'pills' | 'narrative' | 'compact';
  subgroups: SkillSubgroup[];
};
