import { languageService } from '@/services/language.instance';
import { getProjects } from '@/data/projects.data';
import type { Project } from '@/models/project';

const githubIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"/></svg>`;

const createProjectCard = (project: Project): string => `
  <article class="project-card">
    ${
      project.imageSrc
        ? `<a class="project-card__image-link" href="${project.imageSrc}" target="_blank" rel="noopener noreferrer">
            <img class="project-card__image" src="${project.imageSrc}" alt="${project.imageAlt ?? ''}" />
          </a>`
        : ''
    }
    <div class="project-card__body">
      <h2 class="project-card__title">${project.title}</h2>
      <p class="project-card__description">${project.description}</p>
      <div class="project-card__footer">
        <ul class="project-card__tags">
          ${project.tags.map((tag) => `<li class="project-card__tag">${tag}</li>`).join('')}
        </ul>
        ${
          project.repoUrl
            ? `<a class="project-card__repo" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">${githubIcon}</a>`
            : ''
        }
      </div>
    </div>
  </article>
`;

export const createWorkSection = (): string => {
  const projects = getProjects();

  return `
    <section id="work" class="page-section work-section">
      <div class="page-section__inner work-section__inner">
        <p class="eyebrow">${languageService.getText('workEyebrow')}</p>
        <p class="work-section__subtitle">${languageService.getText('workSubtitle')}</p>

        <div class="work-section__projects">
          ${projects.map(createProjectCard).join('')}
        </div>
      </div>
    </section>
  `;
};
