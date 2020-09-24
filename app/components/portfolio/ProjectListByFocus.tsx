import React from 'react';

import { ProjectSummaryProps } from '../types/project';
import { ProjectList } from './ProjectList';
import { useFocusFilter } from '../utils/useFocusFilter';

interface Props {
  projectList: ProjectSummaryProps[];
}

export function ProjectListByFocus ({ projectList }: Props): JSX.Element {

  const { activeFocusName, activeFocusId } = useFocusFilter();

  return !!activeFocusId ? (
    <div className="project-list-wrapper">
      <ProjectList 
        title={activeFocusName}
        projects={projectList.filter(project => {
          return project.categories?.includes(activeFocusId);
        })}
      />
    </div>
  ) : <></>;
}
