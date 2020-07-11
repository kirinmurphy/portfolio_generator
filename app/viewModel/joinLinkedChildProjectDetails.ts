import { ProjectsObjectProps, ProjectHighlightProps } from '../components/types/project';

export const joinLinkedChildProjectDetails = (
  allProjects: ProjectsObjectProps, 
  projectHighlight: ProjectHighlightProps) => {

  if ( !projectHighlight.projectId ) { return projectHighlight; }
  
  const childProject = allProjects[projectHighlight.projectId];
  
  return {
    projectId: projectHighlight.projectId,
    name: childProject.name,
    description: projectHighlight.description || childProject.description,
    timeframe: projectHighlight.timeframe || childProject.timeframe
  }
};
