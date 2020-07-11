import React from 'react';

import { ContactLinksProps } from '../types/portfolio';

import { ContactLinks } from "./ContactLinks";
import { Markdownizer } from '../widgets/Markdownizer';

interface Props {
  links?: ContactLinksProps;
  footerCallToAction?: string;
};

export const PortfolioFooter:React.FC<Props> = ({ links, footerCallToAction }) => {
  return (
    <>
      <div className="footer-call-to-action">
        <Markdownizer source={footerCallToAction || ''} />
      </div>
      <div className="footer-contact-links-wrapper">
        <ContactLinks links={links} />
      </div>

      <style jsx>{`
        .footer-call-to-action {
          margin-bottom:2rem;
          font-size:var(--fontSize-highlight);
          text-align:center;
        }

        .footer-contact-links-wrapper :global(.contact-links) {
          display:inline-block;
          position:relative;
          left:50%;
          transform:translateX(-50%);
        }

        .footer-contact-links-wrapper :global(.svg-inline--fa) {
          width:2.5rem;
        }

      `}</style>
    </>
  );
};
