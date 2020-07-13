import { MSG_SOLO_PROJECT } from '../components/utils/dictionary';

import { ProjectDetailProps, ProjectsObjectProps } from '../components/types/project'; 
import { SkillsetProps } from '../components/types/portfolio';

export function joinProjectDataToSkillsets (
  projects:ProjectsObjectProps, 
  skillset: SkillsetProps): SkillsetProps {
    
  return {
    ...skillset,
    featured: skillset.featured.map((featured) => {
      const project = projects[featured.projectId];
  
      return {
        ...featured,
        tagline: featured.tagline || project.tagline,
        workType: project.workType,
        timeframe: project.timeframe,
        client: getClientName(project)
      };
    })
  };
}

function getClientName (project: ProjectDetailProps) {
  const nonSoloProjectName = project.parentProjectName || project.name;
  return project.workType === 'solo' ? MSG_SOLO_PROJECT : nonSoloProjectName; 
}
