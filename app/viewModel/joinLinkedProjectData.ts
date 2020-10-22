import { LooseObject } from '../components/types/global';
import { ProjectHighlightProps, ProjectsObjectProps } from '../components/types/project';

import { joinLinkedChildProjectDetails } from './joinLinkedChildProjectDetails';

// TSTODO - these io typings break when made too specific 
// beceause the required/optional fields are different btw raw and joined data
// guess I need separate raw/joined interfaces and somehow extend one onto the other? 
export function formatAndJoinProjectData (allProjects: LooseObject): ProjectsObjectProps {
  return Object.keys(allProjects).map((projectId) => {
    const project = allProjects[projectId];

    const { 
      highlights, 
      url, 
      marquee, 
      parentProjectId 
    } = project;

    if ( marquee?.type === 'iframe' && !marquee.iframeUrl ) { marquee.iframeUrl = url; }

    return { 
      ...project,
      id: projectId,
      parentProjectName: allProjects[parentProjectId]?.name || null,
      highlights: !highlights ? null : {
        ...highlights,
        list: highlights?.list.map((projectHighlight: ProjectHighlightProps) => { 
          return joinLinkedChildProjectDetails(allProjects, projectHighlight); 
        }) || null
      }
    };
  }).reduce((transformedObject, project) => {
    transformedObject[project.id] = project;    
    return transformedObject;
  }, {});
}
