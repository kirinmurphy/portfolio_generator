import React from 'react';

import { ProjectName, ProjectUrl } from '../types/project';

interface Props {
  url?: ProjectUrl;
  name: ProjectName;
}

export const OptionallyLinkedTitle: React.FC<Props> = ({ url, name }) => {
  return !!url
    ? <a href={url}>{name}</a>
    : <span>{name}</span>;
};
