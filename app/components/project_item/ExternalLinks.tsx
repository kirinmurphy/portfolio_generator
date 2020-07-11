import React from 'react';

import { ExternalLinkProps } from '../types/project';

import '../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  links: ExternalLinkProps[];
};

export const ExternalLinks:React.FC<Props> = ({ links }) => {
  return (
    <>
      {links && links.map(({ name, url, icon }, index: number) => (
        <a key={index} href={url} className="link link__project-external">
          <FontAwesomeIcon icon={icon} />
          {name}
        </a>
      ))}
      <style jsx>{`
        .link__project-external {
          display:inline-block;
          margin-right:1.5rem;
          font-size:var(--fontSize-highlight);
        }

        .link__project-external :global(.svg-inline--fa) {
          width:1.25rem;
          margin-right:.5rem;
          transform:translateY(2px);
        }

        .link__project-external :global(.svg-inline--fa[data-icon="mobile-alt"]) {
          transform:translateY(8px);
        }

        .link__project-external :global(.svg-inline--fa[data-icon="github-alt"]) {
          transform:scale(1.3) translateY(3px);
          margin-right:.8rem;
        }
      `}</style>
    </>
  );
}
