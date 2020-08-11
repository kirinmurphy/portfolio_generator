import React from 'react';

import { PersonalInfoProps } from '../types/portfolio';

import { breakpointMiddle } from '../../portfolioData/cssVariables';

import { PortfolioMarkdownizer } from './PortfolioMarkdownizer';
import { ContactLinks } from './ContactLinks';

interface Props {
  introContent: PersonalInfoProps;
}

export function PortfolioIntro ({ introContent }: Props): JSX.Element {
  const { name, introduction, links } = introContent;

  return (
    <>
      <header>
        <h1>{name}</h1>
        <ContactLinks links={links} />
      </header>

      <div className="introduction">
        <PortfolioMarkdownizer source={introduction} />
        <a className="portfolio-link" href="//portfolio.codethings.net">portfolio.codethings.net</a>
      </div>

      <style jsx>{`
        header {
          margin-bottom:.75rem;
        }

        .portfolio-link {
          display:none;
          font-size:var(--fontSize-bump);
        }

        @media print {
          .portfolio-link { display:block; } 
        }

        header > * {
          display:inline-block;
          margin-right:1rem;
        }

        h1 {
          font-weight:bold;
          font-size:var(--fontSize-intro-header);
        }

        header :global(.contact-links) {
          transform:translateY(3px);
        }

        header :global(.svg-inline--fa) {
          width:1.75rem; 
        }

        .introduction {
          font-size:var(--fontSize-intro-text);  
        }

        .introduction :global(p:not(:last-of-type)) {
          margin-bottom:1.5rem;
        }

        @media(min-width:${breakpointMiddle}) {
          header {
            margin-bottom:1.25rem;
          }
        }
      `}</style>    
    </>    
  );
}
