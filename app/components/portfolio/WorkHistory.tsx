import React, { useState } from 'react';

import { MSG_ALL_PROJECTS_KEY } from '../utils/dictionary';

import { getCategories } from './helperGetCategories'; 
import { CategoryFilter } from '../widgets/CategoryFilter';

import { WorkHistoryProps } from '../types/portfolio';
import { WorkHistorySubset } from './WorkHistorySubset';

interface Props {
  workHistory: WorkHistoryProps;
}

export function WorkHistory ({ workHistory }: Props): JSX.Element {
  const { projectList, maxProjectsOnInit } = workHistory;
  const {
    maxJobProjects,
    maxSoloProjects
  } = maxProjectsOnInit;

  const [activeCategory, setActiveCategory] = useState<string>(MSG_ALL_PROJECTS_KEY);
  const [showAll, toggleShowAll] = useState<boolean>(false);

  return (
    <>
      <div className="filter-wrapper">
        <div className="inner panel panel--default">
          <CategoryFilter
            categories={getCategories(projectList)}
            updateCallback={(categoryName) => { 
              setActiveCategory(categoryName); 
              toggleShowAll(true);            
            }}
            activeCategory={activeCategory}
          />
        </div>
      </div>

      <WorkHistorySubset
        workType="job"
        projectList={projectList}
        activeCategory={activeCategory}
        showAll={showAll}
        toggleShowAll={toggleShowAll}
        maxProjectsOnInit={maxJobProjects}
      />

      <WorkHistorySubset
        workType="solo"
        projectList={projectList}
        activeCategory={activeCategory}
        showAll={showAll}
        toggleShowAll={toggleShowAll}
        maxProjectsOnInit={maxSoloProjects}
      />

      <style jsx>{`
        .filter-wrapper {
          display:flex;
          justify-content: flex-end;
          background: var(--color-dark-blue);
        }

        .filter-wrapper :global(dt) {
          padding:.5rem 1rem;
          font-size:var(--fontSize-bump);
          color:var(--textcolor-inverted);
        }

        .filter-wrapper :global(dt:after) {
          color:var(--color-beige);
        }

        .filter-wrapper .inner {
          display:inline-block;
        }
      `}</style>
    </>    
  );
}
