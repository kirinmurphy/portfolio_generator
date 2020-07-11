import React from 'react';

import { MSG_ALL_PROJECTS_KEY } from '../utils/dictionary';
import { ProjectSummaryProps } from '../types/project';

import { ProjectWorkSummary } from '../project_item/ProjectWorkSummary';

interface Props {
  projects: ProjectSummaryProps[];
  activeCategory: string;
  title: string;
};

export const ProjectList: React.FC<Props> = ({ projects, activeCategory, title }) => {
  return hasActiveItems(activeCategory, projects) ? (
    <>
      <header>
        <h3>{title}</h3>
      </header>

      {projects.map((project, index) => (
        <article key={index} 
          data-is-active={`${showProject(activeCategory, project)}`}>
          
          <ProjectWorkSummary project={project} />          
        </article>
      ))}

      <style jsx>{`
        header {
          padding:.5rem 1rem; 
          background:var(--bg-panel-light);
          border-bottom:1px solid #e4e4e4;
        }

        h3 {
          font-size:var(--fontSize-highlight);
          font-weight:bold;
        }

        article:not(:last-of-type) { 
          border-bottom:1px solid #ddd; 
        }

        article[data-is-active="false"] { 
          display:none; 
        }
      `}</style>
    </>
  ) : <></>;  
};

function showProject (activeCategory: string, project: ProjectSummaryProps) {
  const showAll = activeCategory === MSG_ALL_PROJECTS_KEY;
  const matchesActiveCategory = project.categories?.includes(activeCategory);
  return showAll || matchesActiveCategory;
};

function hasActiveItems (activeCategory: string, projects: ProjectSummaryProps[]) {
  return projects.filter(project => {
    return showProject(activeCategory, project);
  }).length > 0;
};
