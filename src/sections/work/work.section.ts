import { languageService } from '@/services/language.instance';
import { projects, experiment } from '@/data/projects.data';

const createProjectCard = (project: typeof projects[0]): string => {
  const linkMarkup = project.url
    ? `<a
        class="work-section__project-link interest-inline"
        href="${project.url}"
        target="_blank"
        rel="noopener noreferrer"
      >${languageService.getText('viewProject')}</a>`
    : '';

  return `
    <div class="work-section__project-card">
      <h3 class="work-section__project-title">${project.title}</h3>
      <p class="work-section__project-desc">${project.description}</p>
      <div class="work-section__project-stack">
        ${project.stack.map((t) => `<span class="work-section__tag">${t}</span>`).join('')}
      </div>
      ${linkMarkup}
    </div>
  `;
};

export const createWorkSection = (): string => {
  return `
    <section id="work" class="page-section work-section">
      <div class="page-section__inner work-section__inner">
        <p class="eyebrow">${languageService.getText('workEyebrow')}</p>
        <h2 class="work-section__title">${languageService.getText('workTitle')}</h2>

        <div class="work-section__projects">
          ${projects.map(createProjectCard).join('')}
        </div>

        <div class="work-section__experiment">
          <h3 class="work-section__subtitle">
            ${languageService.getText('workExperimentTitle')}
          </h3>
          <p class="work-section__experiment-text">
            ${languageService.getText('workExperimentText')}
          </p>
          <a
            class="work-section__experiment-link"
            href="${experiment.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${experiment.name}
          </a>
        </div>
      </div>
    </section>
  `;
};
