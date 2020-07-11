import React from 'react';

import { ProjectSummaryProps } from '../types/project';

import { Timeframe } from '../widgets/Timeframe';
import { Markdownizer } from '../widgets/Markdownizer';
import { getProjectPath } from './helperProjectId';

interface Props {
  project: ProjectSummaryProps;
}

export const ProjectWorkSummary: React.FC<Props> = ({ project }) => {
  const { 
    id, 
    name, 
    timeframe, 
    workType, 
    jobtype, 
    tagline 
  } = project;

  return !!id ? (
    <>
      <a className="project-work-summary panel panel--default" 
        href={getProjectPath(id)}>
        <h3>
          <span className="link">{name}</span>

          <span className="text text__small">
            <Timeframe timeframe={timeframe} />
            {workType !== 'solo' && `, ${jobtype}`}
          </span>

        </h3>

        <section className="tagline">
          <Markdownizer source={tagline} />
        </section>
      </a>

      <style jsx>{`
        a {
          display:block;
          padding:.75rem 1rem;
          background-color:#fff;
          transform:background-color 2s var(--transition-swoop-easing);
        }

        a:hover {
          background-color:var(--bg-panel-lighter);
        }

        a:hover .link {
          color:var(--color-link);
          text-decoration:none;
          font-weight:bold;
        }

        h3 { 
          font-size:var(--fontSize-bump); 
        }

        h3 .link { 
          margin-right:.5rem; 
        }
      `}</style>
    </>
  ) : <></>;
};
