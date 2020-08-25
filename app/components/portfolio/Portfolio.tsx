import React from 'react';

import { PortfolioProps } from '../types/portfolio';

import { cssPorfolioPrintView } from '../css/cssPortfolioPrintView';

import { PortfolioIntro  } from './PortfolioIntro';
import { WorkHistory } from './WorkHistory';
import { PortfolioFooter } from './PortfolioFooter';
import { ProjectActive } from './ProjectActive';
import { breakpointMobile } from '../../portfolioData/cssVariables';

interface Props {
  portfolioData: PortfolioProps;
}

export function Portfolio ({ portfolioData }: Props): JSX.Element {
  return (
    <>
      <section id="portfolio-intro">
        <div className="inner">
          <PortfolioIntro {...portfolioData.personalInfo} />
        </div>
      </section>
      <section id="projects">
        <div className="inner">
          <WorkHistory workHistory={portfolioData?.workHistory} />
        </div>
      </section>
      <footer id="page-footer" className="panel panel--inverted">
        <div className="inner">
          <PortfolioFooter 
            links={portfolioData.personalInfo?.links}
            footerCallToAction={portfolioData.personalInfo?.footerCallToAction} 
          />
        </div>
      </footer>

      <ProjectActive allProjects={portfolioData.allProjects} />

      <style jsx>{`
        body {
          background:var(--bg-panel-footer);
        }

        .inner {
          max-width: var(--body-max-width);
          padding: 0 var(--gutter-page-section); 
          margin-left:auto;
          margin-right:auto;
        }

        #portfolio-intro {
          padding:2rem 0 1rem 0;
        }

        #projects {
          padding: 1rem 0 2rem 0;
        }

        #page-footer {
          padding:4rem 1rem;
          background:var(--bg-panel-footer);
          color:#fff;
        }

        @media(max-width:${breakpointMobile}) {
          #projects > .inner {
            padding:0;
          }

          #projects > .inner :global(.subset-wrapper > header),
          #projects > .inner :global(.subset-wrapper > article) {
            padding-left:var(--gutter-page-section);
            padding-right:var(--gutter-page-section);
          }

          #projects > .inner :global(.subset-wrapper) {
            margin-bottom:0;
          }

          #projects > .inner :global(.subset-wrapper > header) {
            padding-top:.3rem;
            border-bottom:0;
            background:#eee;
          }
        }
      `}
      </style>

      <style jsx global>{cssPorfolioPrintView}</style>      
    </>
  );
}
