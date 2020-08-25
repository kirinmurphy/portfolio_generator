
import React from 'react';

import { ProjectHighlightsProps } from '../types/project';

import { ProjectHighlight } from './ProjectHighlight';

export function ProjectHighlights ({ title, list }: ProjectHighlightsProps): JSX.Element {
  return !!list ? (
    <>
      {!!title && <h2 className="name">{title}</h2>}

      <ul>
        {list.map((highlight, index) => (
          <li key={index}> 
            <ProjectHighlight highlight={highlight} />        
          </li>
        ))} 
      </ul>

      <style jsx>{`
        .name {
          margin-bottom:1rem;
          padding-bottom:.5rem;
          border-bottom:1px solid #ccc;
        }

        ul {
          list-style-type:none; /* TODO - move this to library */
          max-width:900px;
        }


        li:not(:last-of-type) {
          margin-bottom:1.5rem; 
        }
      `}</style>
    </>
  ) : <></>;
}
