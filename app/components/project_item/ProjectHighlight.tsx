import React from 'react';

import { ProjectHighlightProps } from '../types/project';

import { OptionallyLinkedTitle } from '../widgets/OptionallyLinkedTitle';
import { Timeframe } from '../widgets/Timeframe';

import { PortfolioMarkdownizer } from '../portfolio/PortfolioMarkdownizer';
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
            {!possibleLinkUrl && <PortfolioMarkdownizer source={name} />}
          </h4>

          {!!timeframe && (
            <span className="date text text__small">
              <Timeframe timeframe={timeframe} />
            </span>          
          )}
        </header>
      )}
      
      <div className="highlight-desc">
        <PortfolioMarkdownizer source={description || ''} />
      </div>

      <style jsx>{`
        header > * { 
          display:inline-block; 
        }

        h4 { 
          margin-right:.5rem; 
        }

        .highlight-desc :global(a) { 
          display:inline-block; 
        }

        .highlight-desc :global(img) {
          max-width:100%;
        }
      `}</style>
    </>
  );
}
