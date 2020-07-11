import { TimeframeProps } from './widgets';

import { 
  ProjectIdType,
  ProjectSummaryProps,
  ProjectsObjectProps,
  Tagline,
  ProjectUrl,
  WorkType
} from './project';

export interface PortfolioProps {
  personalInfo: PersonalInfoProps;
  skillsets: SkillsetProps[];
  workHistory: WorkHistoryProps;
  allProjects: ProjectsObjectProps;
};

export interface PersonalInfoProps {
  name: string;
  introduction: string;
  links?: ContactLinksProps;
  footerCallToAction?: string;
};

export interface ContactLinksProps {
  email?: string;
  github?: string;
  linkedIn?: string;
};

export interface SkillsetProps {
  title: string;
  intro: string;
  featured: SkillsetFeaturedProjectProps[];
};

export interface SkillsetFeaturedProjectProps {
  projectId: ProjectIdType;
  thumb: string;
  tagline?: Tagline;
  url?: ProjectUrl;
  id?: ProjectIdType;
  workType?: WorkType;
  client?: string;
  timeframe?: TimeframeProps;
};

export interface WorkHistoryProps {
  maxProjectsOnInit: {
    maxSoloProjects: number | null;
    maxJobProjects: number | null;
  };
  projectList: ProjectSummaryProps[]
};
