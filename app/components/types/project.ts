import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { 
  TimeframeProps,
  CommaSeparatedListProps,
  MarqueeProps
} from './widgets';

export type ProjectIdType = string;
export type ProjectName = string;
export type ProjectUrl = string;
export type Tagline = string;
export type WorkType = 'job' | 'solo' | 'multi_project';
export type FeaturesType = string[];
export type Categories = string[];

type Jobtype = string;
type Role = string;
type Description = string;

export interface ExternalLinkProps {
  name: string;
  url: string;
  icon: IconProp;
};

export interface ProjectHighlightProps {
  description: Description;
  name?: string;
  url?: string;
  projectId?: ProjectIdType;
  timeframe?: TimeframeProps;
};

export interface ProjectHighlightsProps {
  title?: string;
  list: ProjectHighlightProps[];
};

export interface ProjectSummaryProps {
  id: ProjectIdType;
  name: ProjectName;
  timeframe: TimeframeProps;
  jobtype: Jobtype;
  tagline:Tagline;
  workType: WorkType;
  categories?: Categories;
};

export interface ProjectDetailProps {
  id: ProjectIdType;
  name: ProjectName;
  workType: WorkType;
  timeframe: TimeframeProps;
  marquee: MarqueeProps;
  tagline: Tagline;
  description?: Description;
  url?: ProjectUrl;
  jobtype?: Jobtype;
  parentProjectId?: ProjectIdType;
  parentProjectName?: ProjectName;
  role?: Role;
  languages?: CommaSeparatedListProps;
  tools?: CommaSeparatedListProps;
  links?: ExternalLinkProps[],
  highlights?: ProjectHighlightsProps;
  features?: FeaturesType;
};

export interface ProjectsObjectProps {
  [key: string]: ProjectDetailProps;
};
