import React from 'react';

import { ProjectSummaryProps } from '../types/project';

import { Timeframe } from '../widgets/Timeframe';
import { ContentWithThumbnail } from '../widgets/ContentWithThumbnail';

import { getProjectPath } from './helperProjectId';
import { Markdownizer, CommaSeparatedList } from 'codethings-react-ui';
import { MSG_LANGUAGES_TITLE, MSG_SOLO_PROJECT } from '../utils/dictionary';
import { useFocusFilter } from '../utils/useFocusFilter';
import { useLanguageDisplay } from './useLanguageDisplay';
  
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
    languages,
    detailOverrideUrl
  } = project;

  const { activeFocusType } = useFocusFilter();

  const [showLanguages] = useLanguageDisplay();

  const showRole = (workType === 'job' || workType === 'contract') && role;

  const linkUrl = detailOverrideUrl ? detailOverrideUrl : getProjectPath(id);   

  const isSoloProjectWithActiveFocus = workType === 'solo' && !!activeFocusType;

  return !!id ? (
    <>
      <a className="project-work-summary panel panel--default"
        data-id={id} 
        href={linkUrl}>
        <ContentWithThumbnail thumb={thumb}>
          <>
            <h3>
              <span className="link">{name}</span>

              <span className="text text__small">
                <Timeframe timeframe={timeframe} />{showRole && <span>,&nbsp;
                  <span className="role">{role}</span></span> 
                }
                
                {isSoloProjectWithActiveFocus &&  (
                  <span className="solo-project">{MSG_SOLO_PROJECT}</span>
                )}
              </span>
            </h3>

            <div className="description">
              <Markdownizer source={description} />&nbsp; <span className="link">more...</span>
            </div>

            {showLanguages && (
              <div className="languages">
                <span className="text text__small">
                  <CommaSeparatedList name={MSG_LANGUAGES_TITLE} collection={languages} />
                </span>
              </div>
            )} 
          </>
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
          line-height:1;
        }

        h3 .link { 
          margin-right:.5rem; 
          font-weight:bold;
          font-size:var(--fontSize-highlight); 
        }

        h3 .role {
          display:inline-block;
          color:var(--textColor-dark);
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

        .solo-project {
          display:inline-block;
          padding:.15rem .45rem;
          margin-left:.5rem;
          background:#eee;
          border-radius:3px;
          color:var(--textcolor-base);
        }

      `}</style>
    </>
  ) : <></>;
}

