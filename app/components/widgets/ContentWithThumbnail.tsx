import React from 'react';

import { breakpointMobile, breakpointMaxWidth } from '../../portfolioData/cssVariables';

interface Props {
  children: JSX.Element | JSX.Element[];
  thumb: string;
}

export function ContentWithThumbnail ({ children, thumb }: Props): JSX.Element {
  return (
    <div className="content-with-thumb-wrapper" data-show-thumb={!!thumb}>
      {thumb && (
        <div className="thumb">
          <picture>
            <source srcSet="data:,x" media={`(max-width: ${breakpointMobile})`} />
            <img src={`/images/thumbs/${thumb}`} />
          </picture>
        </div>
      )}
  
      <div className="content">
        {children}
      </div>

      <style jsx>{`
        @media(max-width:${breakpointMaxWidth}) {
          .thumb { display:none; }
        }

        @media(min-width:${breakpointMaxWidth}) {
          .content-with-thumb-wrapper {
            display:flex;
          }

          .thumb {
            flex: 0 0 220px;
            margin-right:1.5rem; 
          }

          .thumb picture {
            display:block;
            height:0;
            padding-bottom:65%;
            overflow:hidden;
            border:1px solid #ddd;
            box-shadow:0 0 4px #aaa;
            background:#000;
          }

          .thumb img {
            width:100%;
          }

          [data-show-thumb="true"] .content { 
          }
        }        
      `}</style>
    </div>
  );
}