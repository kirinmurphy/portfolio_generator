import React from 'react';

import { ProjectSummaryProps } from '../types/project';

import { Timeframe } from '../widgets/Timeframe';

import { getProjectPath } from './helperProjectId';
import { Markdownizer, CommaSeparatedList, Multimediaizer, hasMultimediaContent } from 'codethings-react-ui';
import { MSG_LANGUAGES_TITLE, MSG_SOLO_PROJECT } from '../utils/dictionary';
import { useFocusFilter } from '../utils/useFocusFilter';
import { useLanguageDisplay } from './useLanguageDisplay';
  
interface Props {
  project: ProjectSummaryProps;
}

export const projectSummaryBreakpointMax = 950;
export const projectSummaryBreakpointMid = 660;
export const projectSummaryBreakpointMobile = 450;

export function ProjectWorkSummary ({ project }: Props): JSX.Element {
  const { 
    id, 
    workType,
    name, 
    timeframe, 
    role,
    description,
    languages,
    detailOverrideUrl,
    marquee,
    thumb
  } = project;

  const { activeFocusId } = useFocusFilter();

  const [showLanguages] = useLanguageDisplay();

  const showRole = (workType === 'job' || workType === 'contract') && role;

  const linkUrl = detailOverrideUrl ? detailOverrideUrl : getProjectPath(id);   

  const isSoloProjectWithActiveFocus = workType === 'solo' && !!activeFocusId;

  const hasMarquee = hasMultimediaContent(marquee);

  return !!id ? (
    <>
      <div className="project-work-summary panel panel--default"
        data-has-marquee={hasMarquee}
        data-id={id}>
        {hasMarquee && (
          <div className="marquee" data-project-id={project.id}>
            <Multimediaizer {...marquee} />
          </div>
        )}

        <a className="project-link" href={linkUrl}>
          <div className="mobile-thumbnail">
            <img src={`/images/thumbs/${thumb}`} />
          </div>
          
          <div className="project-details">
            <h3>
              <span className="link">{name}</span>

              <span className="text text__small">
                <span className="timeframe">
                  <Timeframe timeframe={timeframe} />
                </span>{showRole && <span>,&nbsp;&nbsp;
                  <span className="role">{role}</span></span> 
                }
                
                {isSoloProjectWithActiveFocus &&  (
                  <span className="solo-project">{MSG_SOLO_PROJECT}</span>
                )}
              </span>
            </h3>

            <div className="summary-content">
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
            </div>
            
          </div>
        </a>
      </div>

      <style jsx>{`
        .project-work-summary {
          display:block;
          background-color:#fff;
          transform:background-color 2s var(--transition-swoop-easing);
          color:inherit;
        }

        .marquee {
          position:relative;
          border:1px solid #ddd;
        }

        .project-link {
          display:block;
          color:var(--textcolor-base);
        }

        .project-link:hover {
          text-decoration:none;
        }

        .project-link:hover .link {
          color:var(--color-link);
          text-decoration:underline;
          font-weight:bold;
        }

        h3 { 
          padding-bottom:.3rem; 
        }

        h3 > * { 
          padding-bottom:.2rem;
          line-height:1.5;
        }

        h3 .link { 
          margin-right:.5rem; 
          font-weight:bold;
          font-size:var(--fontSize-title-small); 
        }

        h3 .role {
          display:inline-block;
          color:var(--textColor-dark);
        }

        .timeframe {
          color:var(--textcolor-dark);
          font-weight:bold;
        }

        .description :global(> *) {
          display:inline;
        }

        .description :global(em) {
          display:inline-block;
          font-style:normal;
        }

        .languages {
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

        .mobile-thumbnail {
          display:none;
        }

        @media screen and (min-width:${projectSummaryBreakpointMax}px) {
          [data-has-marquee="true"] {
            display:flex;
          }

          [data-has-marquee="true"] :global(.marquee) {
            flex-basis:56%;
            margin-right:4%;
            padding-bottom:35%;
          }

          [data-has-marquee="true"] .project-link {
            flex-basis: 40%;          
            padding-top:.5rem;
          }        
        } 

        @media screen and (max-width:${projectSummaryBreakpointMax - 1}px) {
          [data-has-marquee="true"] :global(.marquee) {
            padding-bottom:60%;
          }

          .project-details {
            padding-top:1rem;
          }         
        }

        @media screen and (min-width:${projectSummaryBreakpointMid}px) {
          .project-work-summary {
            padding:1rem .15rem;
          }

          .languages {
            padding-top:.75rem;
          }
        }

        @media screen and (max-width:${projectSummaryBreakpointMid - 1}px) {
          .project-work-summary {
            box-shadow:0 0 4px #aaa;
          }
          
          .project-details {
            padding:.75rem 1rem 1rem 1rem;
            background:#f4f4f4;
          }

          h3 .link {
            font-size:var(--fontSize-highlight);
          }

          .description {
            display:none;
          }
        }

        @media screen and (max-width:${projectSummaryBreakpointMobile - 1}px) {
          .marquee { display:none; }
          
          .mobile-thumbnail {
            display:block;
            height:0;
            padding-bottom:50%;
            overflow:hidden;
            border:1px solid #ddd;
            background:#000;
          }

          .mobile-thumbnail img {
            width:100%;
          } 
        }
      `}</style>
    </>
  ) : <></>;
}

