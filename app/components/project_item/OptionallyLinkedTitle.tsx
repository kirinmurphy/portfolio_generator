import React from 'react';

import { ProjectName, ProjectUrl } from '../types/project';

interface Props {
  url?: ProjectUrl;
  name: ProjectName;
}

export function OptionallyLinkedTitle ({ url, name }: Props): JSX.Element {
  return !!url
    ? <a href={url}>{name}</a>
    : <span>{name}</span>;
}
