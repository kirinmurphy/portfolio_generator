import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import { ProjectIdType, ProjectsObjectProps } from '../types/project';

import { bindTriggerOverride } from '../utils/bindTriggerOverride';

import { Popup } from '../widgets/Popup';
import { ProjectDetail } from '../project_item/ProjectDetail';
import { AssetActive } from './AssetActive';
import { 
  triggeredLinkIncludesProjectId, 
  PROJECT_ID_PARAM, 
} from '../project_item/helperProjectId';

interface Props {
  allProjects: ProjectsObjectProps;
}

export const ProjectActive: React.FC<Props> = ({ allProjects }) => {
  const router = useRouter();
  const projectIdFromUrl = router.query[PROJECT_ID_PARAM] as string;

  const [activeProjectId, setActiveProjectId] = useState<ProjectIdType>('');
  const activeProject = allProjects[activeProjectId];

  const activeProjectRef = useRef<HTMLDivElement>(null);

  const clearActiveProject = () => {
    router.push('/');
  };

  const updateActiveProject = (linkHref: string) => {
    router.push(`/${linkHref}`);
  };

  useEffect(() => {
    const projectIdFromUrlExists = !!allProjects[projectIdFromUrl];
    setActiveProjectId(projectIdFromUrlExists ? projectIdFromUrl : '');
  }, [projectIdFromUrl, activeProjectId]);

  // Hijack links that include a projectId
  bindTriggerOverride({ 
    eventType: 'click', 
    ref: activeProjectRef, 
    condition: ({ eventData }) => {
      const isLinkToProjectId = triggeredLinkIncludesProjectId(eventData.triggeredHref);
      return isLinkToProjectId;
    },
    conditionalCallback: (eventData) => {
      updateActiveProject(eventData.triggeredHref);      
    }
  });

  return (
    <div ref={activeProjectRef}>
      {!!activeProjectId && (
        <Popup closeAction={clearActiveProject}>
          <ProjectDetail project={activeProject} /> 
          <AssetActive /> 
        </Popup>
      )}
    </div>
  );
};
