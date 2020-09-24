import React, { useState, useEffect, useRef } from 'react';

import { ProjectIdType, ProjectsObjectProps } from '../types/project';

import { useUrlParam } from 'codethings-nextjs-router-addons';

import { triggeredLinkIncludesProjectId, PROJECT_ID_PARAM } from '../project_item/helperProjectId';

import { useTriggerOverride, Popupizer } from 'codethings-react-ui';

import { ProjectDetail } from '../project_item/ProjectDetail';
import { AssetActive } from '../widgets/AssetActive';

interface Props {
  allProjects: ProjectsObjectProps;
}

export function ProjectActive ({ allProjects }: Props): JSX.Element {
  const { 
    paramValue, 
    clearParam: clearActiveProject, 
    updateParam
  } = useUrlParam(PROJECT_ID_PARAM);

  const [activeProjectId, setActiveProjectId] = useState<ProjectIdType>('');
  const activeProject = allProjects[activeProjectId];
  const activeProjectRef = useRef<HTMLDivElement>(null);

  function updateActiveProject (linkHref: string) {
    const projectId = linkHref.split('=')[1];
    updateParam(projectId);
  }

  useEffect(() => {
    const paramValueExists = !!paramValue && !!allProjects[paramValue];
    setActiveProjectId(paramValueExists ? paramValue as string: '');  
  }, [paramValue, activeProjectId, allProjects]);

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
