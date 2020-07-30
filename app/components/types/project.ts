import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { 
  CommaSeparatedListCollectionType,
  MultimediaizerProps } from 'codethings-react-ui';

export type ProjectIdType = string;
export type ProjectName = string;
export type ProjectUrl = string;
export type Tagline = string;
export type WorkType = 'job' | 'solo' | 'multi_project';
export type Categories = string[];

type Jobtype = string;
type Role = string;
type Description = string;

export interface TimeframeProps {
  end: number | string;
  start: number | string;
}

export interface ExternalLinkProps {
  name: string;
  url: string;
  icon: IconProp;
}

export interface ProjectHighlightProps {
  description?: Description;
  name?: string;
  url?: string;
  projectId?: ProjectIdType;
  timeframe?: TimeframeProps;
}

export interface ProjectHighlightsProps {
  title?: string;
  list: ProjectHighlightProps[];
}

export interface ProjectSummaryProps {
  id: ProjectIdType;
  name: ProjectName;
  timeframe: TimeframeProps;
  jobtype: Jobtype;
  tagline:Tagline;
  workType: WorkType;
  categories?: Categories;
}

// TODO - figure out the path file paths to gitlab & bitbucket raw files
export interface ReadmeFileProps {
  site: 'github' | 'gitlab' | 'bitbucket';
  source: string;
  imageFolderPrefix: string;
}

export interface ProjectDetailProps {
  id: ProjectIdType;
  name: ProjectName;
  marquee: MultimediaizerProps;
  timeframe: TimeframeProps;
  tagline: Tagline;
  description?: Description;
  url?: ProjectUrl;
  workType: WorkType;
  jobtype?: Jobtype;
  parentProjectId?: ProjectIdType;
  parentProjectName?: ProjectName;
  role?: Role;
  languages?: CommaSeparatedListCollectionType;
  tools?: CommaSeparatedListCollectionType;
  links?: ExternalLinkProps[],
  highlights?: ProjectHighlightsProps;
  repoReadmeFile?: ReadmeFileProps;
}

export interface ProjectsObjectProps {
  [key: string]: ProjectDetailProps;
}
