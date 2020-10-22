import React from 'react';

import { breakpointMobile } from '../../portfolioData/cssVariables';

import { MSG_WORK_HISTORY_TYPE } from '../utils/dictionary';

import { WorkType, ProjectSummaryProps } from '../types/project';

import { ProjectList } from './ProjectList';

interface Props {
  projectList: ProjectSummaryProps[];
}

export function ProjectListsByWorkType ({ projectList }: Props): JSX.Element {

  const workTypes = ['job', 'contract', 'solo'] as WorkType[];

  return (
    <>
      {workTypes.map((workType, index) => {
        const projects = projectList.filter(project => project.workType === workType);
        return projects?.length ? (
          <div className="project-list-wrapper" key={index}>
            <ProjectList 
              title={MSG_WORK_HISTORY_TYPE[workType]} 
              projects={projects}
            />
          </div>
        ) : <React.Fragment key={index}></React.Fragment>;
      })}
      
      <style jsx>{`
        @media(min-width:${breakpointMobile}) {
          .project-list-wrapper:not(:last-of-type) {
            margin-bottom:2rem;
          }
        }

      `}</style>
    </>
  );
}
