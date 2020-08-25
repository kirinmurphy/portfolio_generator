import { ProjectsObjectProps, ProjectHighlightProps } from '../components/types/project';

export function joinLinkedChildProjectDetails (
  allProjects: ProjectsObjectProps, 
  projectHighlight: ProjectHighlightProps): ProjectHighlightProps {

  if ( !projectHighlight.projectId ) { return projectHighlight; }
  
  const childProject = allProjects[projectHighlight.projectId];
  
  return {
    ...projectHighlight,
    name: childProject.name,
    description: projectHighlight.description || childProject.description,
    timeframe: projectHighlight.timeframe || childProject.timeframe
  }
}
