import React from 'react';

import { ContactLinksProps } from '../types/portfolio';

import '../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  links?: ContactLinksProps;
}

export const ContactLinks:React.FC<Props> = ({ links }) => {
  return !!links ? (
    <>
      <span className="contact-links">
        {links.email && <a href={'mailto:'+links.email}><FontAwesomeIcon icon={['fas', 'envelope-square']} /></a>}
        {links.github && <a href={links.github}><FontAwesomeIcon icon={['fab', 'github-square']} /></a>}
        {links.linkedIn && <a href={links.linkedIn}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>}
      </span>

      <style jsx>{`
        .contact-links {
          display:inline-block;
        }

        .contact-links a {
          display:inline-block;
          margin-right:1rem;
        }
      `}</style>    
    </>
  ) : <></>;
};
