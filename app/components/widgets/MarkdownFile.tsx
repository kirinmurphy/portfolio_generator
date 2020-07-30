import React, { useState } from 'react';
import fetch from 'isomorphic-fetch';

import { ReadmeFileProps } from '../types/project';

import { Markdownizer } from 'codethings-react-ui';

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
      setMdText(!!imageFolderPrefix ? newText : text);
    })
    .catch((error) => console.error(error));

  return !!mdText ? (
    <div>
      <header>
        <strong>Readme.md</strong>
      </header>
      <Markdownizer source={mdText} />
      <style jsx>{`
        div {
          background:#fafafa;
          padding:1rem 1.5rem; 
          border-radius:.25rem;
        }

        div :global(p) {
          margin-bottom:1rem;
        }

        div :global(code) {
          background:#ddd;
          padding:0 .25rem;
        }

        div :global(pre) {
          padding:1rem 2rem;
          border-radius: .5rem;
          overflow-x: auto;
        }

        div :global(pre),
        div :global(pre code) {
          background:#111118;
          color:#f8f8f8;
        }

        div :global(h1, h2, h3, h4) {
          padding:1rem 0 0 0;
          font-weight:bold;
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

