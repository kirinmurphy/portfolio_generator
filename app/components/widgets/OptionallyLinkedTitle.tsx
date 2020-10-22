import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { ProjectName, ProjectUrl } from '../types/project';

interface PropsDefault {
  name: ProjectName;
  showExternal?: boolean;
}

interface LinkedTitleProps extends PropsDefault {
  url: ProjectUrl;
}

interface OptionallyLinkedTitleProps extends PropsDefault {
  url?: ProjectUrl;
}

function LinkedTitle (props: LinkedTitleProps): JSX.Element {
  const { url, name, showExternal } = props;

  const isExternal = url.startsWith('http') || url?.startsWith('//');
  const showIcon = showExternal && isExternal;
  return (
    <a href={url}>
      {name} {showIcon && <FontAwesomeIcon icon={faExternalLinkAlt} />}
      <style jsx>{`
        a :global(.svg-inline--fa) {          
          width:1rem;
          margin-left: .25rem;
          transform:translateY(1px);
        }
      `}</style>
    </a>    
  );
}

export function OptionallyLinkedTitle (props: OptionallyLinkedTitleProps): JSX.Element {
  const { url, name } = props;

  return !!url
    ? <LinkedTitle {...props as LinkedTitleProps} />
    : <span>{name}</span>;
}
