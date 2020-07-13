import React, { useState } from 'react';
import fetch from 'isomorphic-fetch';

import { ReadmeFileProps } from '../types/project';

import { Markdownizer } from './Markdownizer';

export function MarkdownFile ({ 
  site, 
  source, 
  imageFolderPrefix }: ReadmeFileProps): JSX.Element {

  const [mdText, setMdText] = useState<string>('');

  const url = `files/${site}/${source}`;

  fetch(url)
    .then((response) => {
      if (response.ok) return response.text();
      else return Promise.reject("Didn't fetch text correctly");
    })
    .then((text) => {
      const imageFilePrefixMatcher = new RegExp(imageFolderPrefix, "gi");
      const newText = text.replace(imageFilePrefixMatcher, 'samples/');
      setMdText(newText);
    })
    .catch((error) => console.error(error));

  return !!mdText ? (
    <div>
      <span>Readme.md</span>
      <Markdownizer source={mdText} />
      <style jsx>{`
        div {
          background:#f6f6f6;
          padding:1rem 1.5rem; 
          border-radius:.25rem;
        }

        span {
          font-weight:bold;
        }

        div :global(pre) {
          padding:1rem 2rem;
          background:#ddd;
          border-radius: .5rem;
          overflow-x: auto;
        }

        div :global(h1, h2, h3, h4) {
          padding:1rem 0 0 0;
          font-weight:bold;
        }

        div :global(code) {
          background:#ddd;
          padding:0 .25rem;
        }

        div :global(ul) {
          margin-left:2rem;
        }

        div :global(p:empty) {
          display:none;
        }

        div :global(img) {
          box-shadow:5px 5px 10px #999;
        }
      `}</style>
    </div>
  ) : <></>;
}

