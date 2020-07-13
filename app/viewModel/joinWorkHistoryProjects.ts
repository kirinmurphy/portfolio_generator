import { LooseObject } from '../components/types/global';
import { ProjectSummaryProps } from '../components/types/project';

export function joinProjectDataToWorkHistory (
  allProjects: LooseObject, 
  projectId: string): ProjectSummaryProps {
    
  return {
    id: projectId,
    ...allProjects[projectId]
  };
}
