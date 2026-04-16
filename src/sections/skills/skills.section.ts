import { languageService } from '@/services/language.instance';
import { getSkillGroups } from '@/data/skills.data';
import type { SkillGroup, SkillSubgroup } from '@/models/skill';

const createPillsGroup = (group: SkillGroup): string => `
  <div class="skill-group skill-group--pills">
    <h2 class="skill-group__title">${group.title}</h2>
    ${group.intro ? `<p class="skill-group__intro">${group.intro}</p>` : ''}
    <div class="skill-group__columns">
      ${group.subgroups
        .map(
          (sub, i) => `
        <div class="skill-group__column">
          <span class="skill-group__label">${sub.label}</span>
          <ul class="skill-group__tags">
            ${(sub.tags ?? []).map((tag) => `<li class="skill-tag${i > 0 ? ' skill-tag--outline' : ''}">${tag}</li>`).join('')}
          </ul>
        </div>
      `
        )
        .join('')}
    </div>
  </div>
`;

const createNarrativeBlock = (sub: SkillSubgroup): string => `
  <div class="skill-narrative">
    <h3 class="skill-narrative__label">${sub.label}</h3>
    <p class="skill-narrative__text">${sub.description ?? ''}</p>
  </div>
`;

const createNarrativeGroup = (group: SkillGroup): string => `
  <div class="skill-group skill-group--narrative">
    <h2 class="skill-group__title">${group.title}</h2>
    ${group.subgroups.map(createNarrativeBlock).join('')}
  </div>
`;

const createCompactGroup = (group: SkillGroup): string => `
  <div class="skill-group skill-group--compact">
    <h2 class="skill-group__title">${group.title}</h2>
    ${group.intro ? `<p class="skill-group__intro">${group.intro}</p>` : ''}
    <ul class="skill-group__labels">
      ${group.subgroups.map((sub) => `<li class="skill-label">${sub.label}</li>`).join('')}
    </ul>
  </div>
`;

const renderGroup = (group: SkillGroup): string => {
  switch (group.variant) {
    case 'pills':
      return createPillsGroup(group);
    case 'narrative':
      return createNarrativeGroup(group);
    case 'compact':
      return createCompactGroup(group);
  }
};

export const createSkillsSection = (): string => {
  const groups = getSkillGroups();

  return `
    <section id="skills" class="page-section skills-section">
      <div class="page-section__inner skills-section__inner">
        <p class="eyebrow">${languageService.getText('skillsEyebrow')}</p>
        <p class="skills-section__subtitle">${languageService.getText('skillsSubtitle')}</p>
        ${groups.map(renderGroup).join('')}
      </div>
    </section>
  `;
};
