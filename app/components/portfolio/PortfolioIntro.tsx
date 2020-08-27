import React from 'react';

import { PersonalInfoProps } from '../types/portfolio';

import { breakpointMiddle } from '../../portfolioData/cssVariables';

import { PortfolioMarkdownizer } from './PortfolioMarkdownizer';
import { ContactLinks } from './ContactLinks';

export function PortfolioIntro ({ name, title, introduction, links }: PersonalInfoProps): JSX.Element {
  return (
    <>
      <header>
        <h1>{name}</h1>
        <ContactLinks links={links} />
      </header>

      <div className="title">
        {title}
      </div>

      <div className="introduction">
        <PortfolioMarkdownizer source={introduction} />
        <a className="portfolio-link" href="//portfolio.codethings.net">portfolio.codethings.net</a>
      </div>

      <style jsx>{`
        header {
          margin-bottom:.25rem;
        }

        .portfolio-link {
          display:none;
          font-size:var(--fontSize-base);
          margin-bottom:.2rem;
        }

        @media print {
          .portfolio-link { display:block; } 
        }

        header > * {
          display:inline-block;
          margin-right:1rem;
        }

        h1 {
          font-size:var(--fontSize-intro-name);
        }

        header :global(.contact-links) {
          transform:translateY(3px);
        }

        header :global(.svg-inline--fa) {
          width:var(--iconSize-intro-contactLinks); 
        }

        .title {
          margin-bottom: .5rem;
          font-size:var(--fontSize-highlight);
          font-weight:bold;
        }

        .introduction {
          font-size:var(--fontSize-intro-description);  
        }

        @media(min-width:${breakpointMiddle}) {
          header {
            margin-bottom:.25rem;
          }
        }
      `}</style>    
    </>    
  );
}
