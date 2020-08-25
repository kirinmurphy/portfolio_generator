import personalInfo from '../portfolioData/personalInfo.json';
import allProjects from '../portfolioData/projects.json';
import workHistory from '../portfolioData/workHistory.json';

import { joinProjectDataToWorkHistory } from './joinWorkHistoryProjects';
import { formatAndJoinProjectData } from './joinLinkedProjectData';

const joinedProjectData = formatAndJoinProjectData(allProjects);

export default {
  personalInfo: personalInfo,
  allProjects: joinedProjectData,
  workHistory: {
    projectList: workHistory.projectList.map((projectId) => { 
      return joinProjectDataToWorkHistory(joinedProjectData, projectId);
    })
  }
};
