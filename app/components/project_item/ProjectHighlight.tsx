import React from 'react';

import { ProjectHighlightProps } from '../types/project';

import { OptionallyLinkedTitle } from '../widgets/OptionallyLinkedTitle';
import { Timeframe } from '../widgets/Timeframe';

import { PortfolioMarkdownizer } from '../portfolio/PortfolioMarkdownizer';
import { getProjectPath } from './helperProjectId';
import { ContentWithThumbnail } from '../widgets/ContentWithThumbnail';

interface Props {
  highlight: ProjectHighlightProps;
}

export function ProjectHighlight (
  { 
    id,
    projectId,
    url,
    name,
    timeframe,
    description,
    thumb
  }: ProjectHighlightProps): JSX.Element {

  const possibleProjectIdPath = !!projectId ? getProjectPath(projectId) : null;
  const possibleLinkUrl = url || possibleProjectIdPath;

  return (
    <div data-id={id || projectId}>
      <ContentWithThumbnail thumb={thumb}>
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
        </>
      </ContentWithThumbnail>

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
    </div>
  );
}
