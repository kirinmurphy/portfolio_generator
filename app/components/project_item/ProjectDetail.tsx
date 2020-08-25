import React from 'react';

import { 
  MSG_LANGUAGES_TITLE,
  MSG_TOOLS_TITLE
} from '../utils/dictionary';

import { ProjectDetailProps } from '../types/project';

import { 
  CommaSeparatedList, 
  Multimediaizer,
  hasMultimediaContent,
  BackLink,
  Markdownizer
} from 'codethings-react-ui';

import { Timeframe } from '../widgets/Timeframe';
import { OptionallyLinkedTitle } from '../widgets/OptionallyLinkedTitle';
import { ExternalLinks } from './ExternalLinks';
import { MarkdownFile } from '../widgets/MarkdownFile';

import { ProjectHighlights } from './ProjectHighlights';
import { getProjectPath } from './helperProjectId';
import { cssProjectDetail } from './projectDetailCss';

interface Props {
  project: ProjectDetailProps;
}

export function ProjectDetail ({ project }: Props): JSX.Element {
  const {
    marquee,
    url,
    name,
    timeframe,
    parentProjectId,
    parentProjectName,
    role,
    description,
    languages,
    tools,
    links,
    highlights,
    repoReadmeFile
  } = project;

  const hasMarquee = hasMultimediaContent(marquee);

  return (
    <>
      <div className="project-wrapper panel panel--default">
        <BackLink />

        <div className="main-content" 
          data-has-marquee={hasMarquee}
          data-fullscreen-marquee={marquee?.fullscreen || false}>
          
          {hasMarquee && (
            <div className="marquee" data-project-id={project.id}>
              <Multimediaizer {...project.marquee} />
            </div>
          )}

          <div className="main">
            <header>
              <h3>
                <OptionallyLinkedTitle name={name} url={url} />
              </h3>

              <div className="project-meta text text__small">
                <Timeframe timeframe={timeframe} />
                
                {!!parentProjectId && (
                  <span>, <a href={getProjectPath(parentProjectId)}>{parentProjectName}</a></span>
                )}

                {!parentProjectId && role && <span>, {role}</span>}
              </div>

              <div className="description">
                <Markdownizer source={`${description}`}  />
              </div>
            </header>

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
          </div>
        </div>

        {(!!highlights || !!repoReadmeFile) && (
          <div className="expando-panel">
            {!!highlights && <ProjectHighlights {...highlights} />}
            {!!repoReadmeFile && <MarkdownFile {...repoReadmeFile} />}
          </div>
        )}
      </div>

      <style jsx>{cssProjectDetail}</style>
    </>
  );
}
