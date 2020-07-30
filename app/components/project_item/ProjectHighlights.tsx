
import React from 'react';

import { ProjectHighlightsProps } from '../types/project';

import { ProjectHighlight } from './ProjectHighlight';

export function ProjectHighlights ({ title, list }: ProjectHighlightsProps): JSX.Element {
  return !!list ? (
    <>
      {!!title && <h2 className="name">{title}</h2>}

      <ul className="bulleted">
        {list.map((highlight, index) => (
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
}
