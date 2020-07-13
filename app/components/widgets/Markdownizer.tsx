import React from 'react';
import ReactMarkdown, { NodeType } from "react-markdown";

import { returnMarkdownWithConvertedProjectLinks } from '../project_item/helperProjectId';

const markdownTypesAllowed: NodeType[] = [ 
  'text',
  'strong',
  'delete',
  'emphasis',
  'link'
];

interface Props {
  source: string;
  useAllowedTypes?: boolean;
}

interface OptionsProps {
  source: string;
  escapeHtml: boolean;
  allowedTypes?: NodeType[];
  unwrapDisallowed?: boolean;
}

export function Markdownizer ({ source, useAllowedTypes = false }: Props): JSX.Element {  
  const options: OptionsProps = {
    source: returnMarkdownWithConvertedProjectLinks(source),
    escapeHtml: false
  };

  if ( useAllowedTypes ) {
    options.allowedTypes = markdownTypesAllowed;
    options.unwrapDisallowed = true;
  }

  return (
    <ReactMarkdown {...options} />
  );
}
