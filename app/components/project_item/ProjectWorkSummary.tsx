import React from 'react';

import { ProjectSummaryProps } from '../types/project';

import { Timeframe } from '../widgets/Timeframe';
import { ContentWithThumbnail } from '../widgets/ContentWithThumbnail';

import { getProjectPath } from './helperProjectId';
import { Markdownizer } from 'codethings-react-ui';
// import { MSG_LANGUAGES_TITLE } from '../utils/dictionary';

interface Props {
  project: ProjectSummaryProps;
}

export function ProjectWorkSummary ({ project }: Props): JSX.Element {
  const { 
    id, 
    workType,
    name, 
    timeframe, 
    role,
    description,
    thumb,
    detailOverrideUrl
  } = project;

  const showRole = (workType === 'job' || workType === 'contract') && role;

  const linkUrl = detailOverrideUrl ? detailOverrideUrl : getProjectPath(id);   

  return !!id ? (
    <>
      <a className="project-work-summary panel panel--default"
        data-id={id} 
        href={linkUrl}>
        <ContentWithThumbnail thumb={thumb}>
          <h3>
            <span className="link">{name}</span>

            <span className="text text__small">
              <Timeframe timeframe={timeframe} />{showRole && <span>, <span className="role">{role}</span></span>}
            </span>
          </h3>

          <div className="description">
            <Markdownizer source={description} />&nbsp; <span className="link">more</span>
          </div>

          {/* <div className="languages">
            <span className="text text__small">
              <CommaSeparatedList name={MSG_LANGUAGES_TITLE} collection={languages} />
            </span>
          </div> */}
        </ContentWithThumbnail>
      </a>

      <style jsx>{`
        a {
          display:block;
          padding:.8rem .15rem;
          background-color:#fff;
          transform:background-color 2s var(--transition-swoop-easing);
          color:inherit;
        }

        a:hover {
          text-decoration:none;
        }

        a:hover .link {
          color:var(--color-link);
          text-decoration:underline;
          font-weight:bold;
        }

        a :global(.content) {
          padding-bottom:.5rem;
        }

        h3 { 
          padding:.5rem 0 .35rem 0;
          font-size:var(--fontSize-highlight); 
          line-height:1;
        }

        h3 .link { 
          margin-right:.5rem; 
        }

        h3 .role {
          display:inline-block;
        }

        .description :global(> *) {
          display:inline;
        }

        .languages {
          padding-top:.35rem;
          line-height:1.5;
        }

        .languages :global(strong) {
          color:var(--textcolor-dark);
        }

      `}</style>
    </>
  ) : <></>;
}
