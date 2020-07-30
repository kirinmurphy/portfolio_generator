import React from 'react';

import { returnMarkdownWithConvertedProjectLinks } from '../project_item/helperProjectId';

import { Markdownizer, MarkdownizerProps } from 'codethings-react-ui';

export function PortfolioMarkdownizer ({ 
  source, 
  useAllowedTypes = false  }: MarkdownizerProps): JSX.Element {
    
  return (
    <Markdownizer 
      source={returnMarkdownWithConvertedProjectLinks(source)}
      useAllowedTypes={useAllowedTypes}
    />
  );
}
