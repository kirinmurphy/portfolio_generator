
import React from 'react';

import { ProjectHighlightsProps } from '../types/project';

import { ProjectHighlight } from './ProjectHighlight';

interface Props {
  highlights?: ProjectHighlightsProps;
};

export const ProjectHighlights: React.FC<Props> = ({ highlights }) => {
  return !!highlights ? (
    <>
      {!!highlights.title && <h2 className="name">{highlights.title}</h2>}

      <ul className="bulleted">
        {highlights?.list.map((highlight, index) => (
          <li key={index}> 
            <ProjectHighlight highlight={highlight} />        
          </li>
        ))} 
      </ul>

      <style jsx>{`
        .name {
          margin-bottom:.5rem;
        }

        li { 
          max-width:900px;
          margin-bottom:var(--paragraph-bottom-margin); 
        }
      `}</style>
    </>
  ) : <></>;
};
