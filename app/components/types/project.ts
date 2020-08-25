import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { 
  CommaSeparatedListCollectionType,
  MultimediaizerProps } from 'codethings-react-ui';

export type ProjectIdType = string;
export type ProjectName = string;
export type ProjectUrl = string;
export type WorkType = 'job' | 'contract' | 'solo' | 'multi_project';
export type Categories = string[];

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
  id: string;
  description?: Description;
  name?: string;
  url?: string;
  projectId?: ProjectIdType;
  timeframe?: TimeframeProps;
  thumb: string;
}

export interface ProjectHighlightsProps {
  title?: string;
  list: ProjectHighlightProps[];
}

export interface ProjectSummaryProps {
  id: ProjectIdType;
  name: ProjectName;
  timeframe: TimeframeProps;
  description: Description;
  thumb: string;
  role: Role;
  workType: WorkType;
  categories?: Categories;
  languages: CommaSeparatedListCollectionType;
  detailOverrideUrl: string;
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
  description?: Description;
  url?: ProjectUrl;
  workType: WorkType;
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
