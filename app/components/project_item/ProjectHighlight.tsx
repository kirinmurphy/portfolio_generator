import React from 'react';

import { ProjectHighlightProps } from '../types/project';

import { OptionallyLinkedTitle } from './OptionallyLinkedTitle';
import { Timeframe } from '../widgets/Timeframe';
import { Markdownizer } from '../widgets/Markdownizer';
import { getProjectPath } from './helperProjectId';

interface Props {
  highlight: ProjectHighlightProps;
}

export function ProjectHighlight ({ highlight }: Props): JSX.Element {
  const {
    projectId,
    url,
    name,
    timeframe,
    description
  } = highlight;

  const possibleProjectIdPath = !!projectId ? getProjectPath(projectId) : null;
  const possibleLinkUrl = url || possibleProjectIdPath;

  return (
    <>
      {!!name && (
        <header>
          <h4>
            {!!possibleLinkUrl && <OptionallyLinkedTitle name={name} url={possibleLinkUrl} />}
            {!possibleLinkUrl && <Markdownizer source={name} />}
          </h4>

          {!!timeframe && (
            <span className="date text text__small">
              <Timeframe timeframe={timeframe} />
            </span>          
          )}
        </header>
      )}
      
      <div className="highlight-desc">
        <Markdownizer source={description || ''} />
      </div>

      <style jsx>{`
        header > * { 
          display:inline-block; 
        }

        h4 { 
          margin-right:.5rem; 
        }

        .highlight-desc :global(a) { display:inline-block; }

        .highlight-desc :global(img) {
          max-width:100%;
        }
      `}</style>
    </>
  );
}
