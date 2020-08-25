import React from 'react';

import { ProjectSummaryProps } from '../types/project';

import { ProjectWorkSummary } from '../project_item/ProjectWorkSummary';

interface Props {
  projects: ProjectSummaryProps[];
  title: string;
}

export function ProjectList ({ projects, title }: Props): JSX.Element {
  return (
    <>
      <header>
        <h3>{title}</h3>
      </header>

      {projects.map((project, index) => (
        <article key={index}>
          <ProjectWorkSummary project={project} />          
        </article>
      ))}

      <style jsx>{`
        header {
          padding-bottom:.25rem; 
          border-bottom:1px solid #bbb;
        }

        h3 {
          font-size:var(--fontSize-title-small);
          font-weight:bold;
          color:#444;
        }

        article:not(:last-of-type) { 
          border-bottom:1px solid #ddd; 
        }

        article[data-is-active="false"] { 
          display:none; 
        }
      `}</style>
    </>
  );  
}
