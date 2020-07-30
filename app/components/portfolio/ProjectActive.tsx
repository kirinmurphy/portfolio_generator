import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import { ProjectIdType, ProjectsObjectProps } from '../types/project';

import { useTriggerOverride, Popupizer } from 'codethings-react-ui';

import { ProjectDetail } from '../project_item/ProjectDetail';
import { AssetActive } from '../widgets/AssetActive';
import { 
  triggeredLinkIncludesProjectId, 
  PROJECT_ID_PARAM, 
} from '../project_item/helperProjectId';

interface Props {
  allProjects: ProjectsObjectProps;
}

export function ProjectActive ({ allProjects }: Props): JSX.Element {
  const router = useRouter();
  const projectIdFromUrl = router.query[PROJECT_ID_PARAM] as string;

  const [activeProjectId, setActiveProjectId] = useState<ProjectIdType>('');
  const activeProject = allProjects[activeProjectId];
  const activeProjectRef = useRef<HTMLDivElement>(null);

  const clearActiveProject = () => router.push('/');
  const updateActiveProject = (linkHref: string) =>  router.push(`/${linkHref}`);

  useEffect(() => {
    const projectIdFromUrlExists = !!allProjects[projectIdFromUrl];
    setActiveProjectId(projectIdFromUrlExists ? projectIdFromUrl : '');
  }, [projectIdFromUrl, activeProjectId, allProjects]);

  // Hijack links that include a projectId
  useTriggerOverride({ 
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
        <Popupizer closeAction={clearActiveProject}>
          <ProjectDetail project={activeProject} /> 
          <AssetActive /> 
        </Popupizer>
      )}
    </div>
  );
}