import React from 'react';

import { 
  MSG_WORK_HISTORY_TYPE, 
  MSG_SHOW_ALL_IN_LIST_TRIGGER 
} from '../utils/dictionary';

import { WorkType, ProjectSummaryProps } from '../types/project';

import '../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProjectList } from './ProjectList';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

interface Props {
  workType: WorkType;
  projectList: ProjectSummaryProps[];
  activeCategory: string;
  maxProjectsOnInit: number | null;
  showAll: boolean;
  toggleShowAll: (arg0: boolean) => void;
}

export function WorkHistorySubset (props: Props): JSX.Element {
  const {
    workType,
    projectList,
    activeCategory,
    maxProjectsOnInit,
    showAll,
    toggleShowAll
  } = props;

  const filteredList = getSubset(projectList, workType);

  const someProjectsHiddenOnInit = !!maxProjectsOnInit && filteredList.length > maxProjectsOnInit;
  const displayShowAllTrigger = someProjectsHiddenOnInit && !showAll;  
  const indexToHideProjects = !!maxProjectsOnInit ? maxProjectsOnInit+1 : 1000000;

  return (
    <div data-show-all={showAll}>
      <ProjectList
        title={MSG_WORK_HISTORY_TYPE[workType]} 
        projects={filteredList}
        activeCategory={activeCategory}
      />

      {displayShowAllTrigger && (
        <div className="show-all" onClick={() => toggleShowAll(true)}>
          <span>
            {MSG_SHOW_ALL_IN_LIST_TRIGGER}
            <FontAwesomeIcon icon={faArrowsAltV} />
          </span>
        </div>      
      )}

      <style jsx>{`
        .show-all {
          padding:.5rem 1.5rem;    
          text-align:right;
          cursor:pointer;
          background: var(--color-bluegray-light);
        }

        .show-all:hover {
          font-weight:bold;
          background: var(--color-bluegray-lighter);
        }

        .show-all > span {
          font-size:var(--fontSize-bump);
        }

        .show-all > span :global(.svg-inline--fa) {
          width:.45rem;
          margin-left:.6rem;
          transform:translateY(1px);
        }

        .show-all:hover > span :global(.svg-inline--fa) {
          color:var(--textcolor-base);
        }

        @media screen {
          [data-show-all="false"] :global(article:nth-of-type(n+${indexToHideProjects})) { 
            display:none; 
          }
        }

        @media print {
          .show-all { display:none; }
        }
      `}</style>
    </div>
  );
}

function getSubset (
  projectList: ProjectSummaryProps[], 
  workType:string) {
  return projectList.filter(project => project.workType == workType);
}
