import { 
  ProjectSummaryProps,
  ProjectsObjectProps,
} from './project';

export interface PortfolioProps {
  personalInfo: PersonalInfoProps;
  workHistory: WorkHistoryProps;
  allProjects: ProjectsObjectProps;
}

export interface PersonalInfoProps {
  name: string;
  title: string;
  introduction: string;
  links?: ContactLinksProps;
  footerCallToAction?: string;
}

export interface ContactLinksProps {
  email?: string;
  github?: string;
  linkedIn?: string;
}

export interface CategoryProps {
  id: string;
  name: string;
}

export interface WorkHistoryProps {
  projectList: ProjectSummaryProps[];
  categories?: CategoryProps[];
}
