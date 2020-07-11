
import { LooseObject } from '../components/types/global';
import { ProjectHighlightProps } from '../components/types/project';

import { joinLinkedChildProjectDetails } from './joinLinkedChildProjectDetails';
import { getFormattedChapters } from '../components/widgets/marquee/videoPlayer/helperGetFormattedChapters';

// TSTODO - this breaks when bind it to the view model stuff
// beceause the required/optional fields are different btw raw and joined data
// guess I need separate raw/joined interfaces and somehow extend one onto the other? 
export const formatAndJoinProjectData = (allProjects: LooseObject) => {
  return Object.keys(allProjects).map((projectId) => {
    const project = allProjects[projectId];

    if ( !!project.parentProjectId ) {
      project.parentProjectName = allProjects[project.parentProjectId].name;
    }
  
    const projectHighlights = project.highlights;
    if ( !!projectHighlights ) {
      projectHighlights.list = projectHighlights.list
        .map((projectHighlight: ProjectHighlightProps) => { 
          return joinLinkedChildProjectDetails(allProjects, projectHighlight); 
        });
    }

    const video = project.marquee?.video;
    if ( !!video && !!video.chapters ) {
      video.chapters = getFormattedChapters(video.chapters);
    }

    return { 
      id: projectId, 
      ...project 
    };
  }).reduce((transformedObject, project) => {
    transformedObject[project.id] = project;    
    return transformedObject;
  }, {});
}
