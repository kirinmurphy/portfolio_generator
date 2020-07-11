import { LooseObject } from '../components/types/global';

export const joinProjectDataToWorkHistory = (
  allProjects: LooseObject, 
  projectId: string) => {
    
  return {
    id: projectId,
    ...allProjects[projectId]
  };
};
