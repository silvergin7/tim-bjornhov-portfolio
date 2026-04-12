import { languageService } from '@/services/language.instance';
import { technologies, learning } from '@/data/skills.data';

const createTagList = (items: string[]): string =>
  items
    .map((item) => `<span class="skills-section__tag">${item}</span>`)
    .join('');

export const createSkillsSection = (): string => {
  return `
    <section id="skills" class="page-section skills-section">
      <div class="page-section__inner skills-section__inner">
        <p class="eyebrow">${languageService.getText('skillsEyebrow')}</p>
        <h2 class="skills-section__title">
          ${languageService.getText('skillsTitle')}
        </h2>

        <div class="skills-section__group">
          <h3 class="skills-section__subtitle">
            ${languageService.getText('skillsTechTitle')}
          </h3>
          <div class="skills-section__tags">
            ${createTagList(technologies)}
          </div>
        </div>

        <div class="skills-section__group">
          <h3 class="skills-section__subtitle">
            ${languageService.getText('skillsLearningTitle')}
          </h3>
          <div class="skills-section__tags">
            ${createTagList(learning)}
          </div>
        </div>

        <div class="skills-section__group">
          <h3 class="skills-section__subtitle">
            ${languageService.getText('skillsEducationTitle')}
          </h3>
          <p class="skills-section__text">
            ${languageService.getText('skillsEducationText')}
          </p>
        </div>
      </div>
    </section>
  `;
};
