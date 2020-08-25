import React from 'react';

import { 
  MSG_WORK_HISTORY_TYPE
} from '../utils/dictionary';

import { WorkType, ProjectSummaryProps } from '../types/project';
import { ProjectList } from './ProjectList';

interface Props {
  workType: WorkType;
  projectList: ProjectSummaryProps[];
}

export function WorkHistorySubset (props: Props): JSX.Element {
  const {
    workType,
    projectList,
  } = props;

  const filteredList = getSubset(projectList, workType);

  return (
    <ProjectList
      title={MSG_WORK_HISTORY_TYPE[workType]} 
      projects={filteredList}
    />
  );
}

function getSubset (
  projectList: ProjectSummaryProps[], 
  workType:string) {
  return projectList.filter(project => project.workType == workType);
}
