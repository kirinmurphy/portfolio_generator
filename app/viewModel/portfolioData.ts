import personalInfo from '../portfolioData/personalInfo.json';
import allProjects from '../portfolioData/projects.json';
import skillsets from '../portfolioData/skillsets.json';
import workHistory from '../portfolioData/workHistory.json';

import { joinProjectDataToSkillsets } from './joinSkillsetFeaturedProjects';
import { joinProjectDataToWorkHistory } from './joinWorkHistoryProjects';
import { formatAndJoinProjectData } from './joinLinkedProjectData';

const joinedProjectData = formatAndJoinProjectData(allProjects);

export default {
  personalInfo: personalInfo,
  allProjects: joinedProjectData,
  workHistory: {
    maxProjectsOnInit: workHistory.maxProjectsOnInit,
    projectList: workHistory.projectList.map((projectId) => { 
      return joinProjectDataToWorkHistory(joinedProjectData, projectId);
    })
  },
  skillsets: skillsets.map((skillset) => {
    return joinProjectDataToSkillsets(joinedProjectData, skillset);
  })
};
