import React from 'react';

import { 
  MSG_LANGUAGES_TITLE,
  MSG_TOOLS_TITLE
 } from '../utils/dictionary';

import { ProjectDetailProps } from '../types/project';

import { Markdownizer } from '../widgets/Markdownizer';
import { BackLink } from '../widgets/BackLink';
import { Marquee, hasMarqueeContent } from '../widgets/marquee/Marquee';
import { CommaSeparatedList } from '../widgets/CommaSeparatedList';
import { Timeframe } from '../widgets/Timeframe';

import { OptionallyLinkedTitle } from './OptionallyLinkedTitle';
import { ExternalLinks } from './ExternalLinks';
import { ProjectHighlights } from './ProjectHighlights';
import { Features } from './Features';
import { getProjectPath } from './helperProjectId';
import { cssProjectDetail } from './projectDetailCss';

interface Props {
  project: ProjectDetailProps;
};

const ProjectMarquee: React.FC<Props> = ({ project }) => {
  return (
    <div className="marquee" data-project-id={project.id}>
      <Marquee 
        marquee={project.marquee}
        iframeUrl={project.url}
      />
      <style jsx>{`
        .marquee {
          position:relative;
          padding-bottom:60%;
          margin-bottom:.8rem; 
          border:1px solid #ddd;
        }
      `}</style>
    </div>
  );  
};

export const ProjectDetail: React.FC<Props> = ({ project }) => {
  const {
    marquee,
    url,
    name,
    timeframe,
    jobtype,
    parentProjectId,
    parentProjectName,
    role,
    tagline,
    description,
    languages,
    tools,
    links,
    highlights,
    features
  } = project;

  const hasMarquee = hasMarqueeContent(marquee, url);

  return (
    <>
      <div className="project-wrapper panel panel--default">
        <BackLink />
        
        <div className="main-content" 
          data-has-marquee={hasMarquee}
          data-fullscreen-marquee={marquee?.fullscreen || false}>
          
          {hasMarquee && <ProjectMarquee project={project} />}

          <header>
            <h3>
              <OptionallyLinkedTitle name={name} url={url} />
            </h3>

            <section className="text text__small">
              <div>
                <Timeframe timeframe={timeframe} />

                {jobtype && (<span>, {jobtype}</span>)}
                
                {!!parentProjectId && (
                  <span>, <a href={getProjectPath(parentProjectId)}>{parentProjectName}</a></span>
                )}
              </div>
              {role && <div>{role}</div>}
            </section>

            <section className="description">
              <div className="tagline">
                <Markdownizer source={tagline} />
              </div>

              {!!description && <Markdownizer source={description} />}
            </section>

            {(!!languages || !!tools) && (
              <section className="languages-and-tools text text__small">
                <CommaSeparatedList name={MSG_LANGUAGES_TITLE} collection={languages} />
                <CommaSeparatedList name={MSG_TOOLS_TITLE} collection={tools} />
              </section>
            )}

            {!!links && (
              <section className="external-links">
                <ExternalLinks links={links} />
              </section>
            )}
          </header>
        </div>

        {(highlights || features) && (
          <div className="expando-panel">
            <ProjectHighlights highlights={highlights} />
            <Features features={features} />
          </div>
        )}
      </div>

      <style jsx>{cssProjectDetail}</style>
    </>
  );
};
