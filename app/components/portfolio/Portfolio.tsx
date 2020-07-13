import React from 'react';

import { PortfolioProps } from '../types/portfolio';

import { cssPorfolioPrintView } from '../css/cssPortfolioPrintView';

import { PortfolioIntro  } from './PortfolioIntro';
import { SkillsetList } from './SkillsetList';
import { WorkHistory } from './WorkHistory';
import { PortfolioFooter } from './PortfolioFooter';
import { ProjectActive } from './ProjectActive';

interface Props {
  portfolioData: PortfolioProps;
}

export function Portfolio ({ portfolioData }: Props): JSX.Element {
  return (
    <>
      <section id="portfolio-intro" className="panel panel--inverted">
        <div className="inner">
          <PortfolioIntro introContent={portfolioData.personalInfo} />
        </div>
      </section>
      <section id="skillsets">
        <div className="inner">
          <SkillsetList skillsets={portfolioData.skillsets} />
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
        .inner {
          max-width: var(--body-max-width);
          padding: var(--gutter-page-section); 
          margin-left:auto;
          margin-right:auto;
        }

        #portfolio-intro {
          padding:var(--intro-vertical-offset) 0;
          color:#fff;
        }

        #skillsets {
          color:#fff;
          background:var(--bg-panel-skillsets);
          box-shadow: 0 0 20px rgba(30, 30, 30, .4);
        }

        #projects {
          background:#fff;
        }

        #projects .inner {
          padding: var(--gutter-project-list);
        }

        #page-footer {
          padding:2rem 1rem 4rem 1rem;
          background:var(--bg-panel-footer);
          color:#fff;
        }
      `}
      </style>

      <style jsx global>{cssPorfolioPrintView}</style>      
    </>
  );
}
