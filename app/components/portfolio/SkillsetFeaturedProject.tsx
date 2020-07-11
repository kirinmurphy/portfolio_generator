import React from 'react';

import { SkillsetFeaturedProjectProps } from '../types/portfolio';

import { breakpointMobile } from '../css/cssVariables';
import { Timeframe } from '../widgets/Timeframe';
import { getProjectPath } from '../project_item/helperProjectId';

interface Props {
  featured: SkillsetFeaturedProjectProps;
};

export const SkillsetFeaturedProject: React.FC<Props> = ({ featured }) => {
  const {
    url,
    projectId,
    workType,
    thumb,
    tagline,
    client,
    timeframe
  } = featured;

  const projectLink = url || getProjectPath(projectId);
  const isMultiProject = workType === 'multi_project';
  
  return (
    <>
      <a href={projectLink} data-featured-project={projectId}>
        <div className="image-wrap">
          {thumb && (
            <picture>
              <source srcSet="data:,x" 
                media={`(max-width: ${breakpointMobile})`} />
              <img src={`/images/thumbs/${thumb}`} />
            </picture>
          )}
        </div>
        <div className="content">
          <div className="project-desc">
            {tagline}
          </div>

          {/* TSTODO - can i use types to enforce optional only for other types? */}
          {!isMultiProject && (
            <div className="text__small">
              {client}, {timeframe && <Timeframe timeframe={timeframe} />}
            </div>
          )}
        </div>
      </a>
      <style jsx>{`
        a {
          display:block;
          height:100%;
          background:var(--color-beige);
          color:#000;
          transform:scale(1) translateZ(0);
          backface-visibility: hidden;
          transition:var(--transition-swoop);
          -webkit-font-smoothing: subpixel-antialiased;
          text-decoration:none;
        }

        a:hover {
          transform:scale(.9375) translateZ(0);  
          text-decoration:none;  
        }

        .image-wrap {
          height:0;
          padding-bottom:var(--height-skillsetFeaturedItemImage);
          overflow:hidden;
          background:#000;
        }

        .image-wrap img {
          display:block;
          width:100%;
        }

        .content {
          padding:.5rem 1rem;
          border-top:1px solid #aaa;
        }

        .project-desc {
          margin-bottom:.25rem;
        }
      `}</style>
    </>
  );
};
