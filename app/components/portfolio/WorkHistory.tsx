import React from 'react';

import { WorkHistoryProps } from '../types/portfolio';
import { WorkHistorySubset } from './WorkHistorySubset';
import { WorkType } from '../types/project';

interface Props {
  workHistory: WorkHistoryProps;
}

export function WorkHistory ({ workHistory }: Props): JSX.Element {
  const { projectList } = workHistory;

  const workTypes = ['job', 'contract', 'solo'] as WorkType[];

  return (
    <>
      {workTypes.map((workType, index) => (
        <div className="subset-wrapper" key={index}>
          <WorkHistorySubset
            workType={workType}
            projectList={projectList}
          />
        </div>
      ))}

      <style jsx>{`
        .subset-wrapper:not(:last-of-type) {
          margin-bottom:2rem;
        }
      `}</style>
    </>    
  );
}
