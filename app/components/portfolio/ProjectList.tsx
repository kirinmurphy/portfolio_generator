import React from 'react';

import { ProjectSummaryProps } from '../types/project';

import { ProjectWorkSummary } from '../project_item/ProjectWorkSummary';
import { breakpointMobile } from '../../portfolioData/cssVariables';

interface Props {
  projects: ProjectSummaryProps[];
  title: string | JSX.Element;
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
          position: -webkit-sticky; /* Safari */
          position: sticky;
          top: 0;
          z-index:var(--zindex-sticky-header);
          padding-bottom:.25rem; 
          border-bottom:1px solid #bbb;
          background: var(--page-bgColor);
        }

        h3 {
          font-size:var(--fontSize-title-small);
        }

        article {
          padding:0 2px;
        }

        article:not(:last-of-type) { 
          border-bottom:1px solid #ddd; 
        }

        article[data-is-active="false"] { 
          display:none; 
        }


        @media(max-width:${breakpointMobile}) {
          header,
          article {
            padding-left:var(--gutter-page-section);
            padding-right:var(--gutter-page-section);
          }

          header {
            padding-top:.3rem;
            border-bottom:0;
            background:#eee;
          }
        }

        @media(max-width:470px) {
          /* margin-top:2.6rem; */
        }
      `}</style>
    </>
  );  
}
