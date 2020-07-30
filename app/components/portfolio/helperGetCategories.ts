import { MSG_ALL_PROJECTS_KEY } from '../utils/dictionary';

import { Categories, ProjectSummaryProps } from '../types/project';
import { CategoryDisplayProps } from '../widgets/CategoryFilter';

interface CategoryCountsProps {
  [key: string]: number;
}

export function getCategories (projects: ProjectSummaryProps[]): CategoryDisplayProps[] {
  const categoryTotals = projects
    .map(project => project.categories || [])
    .reduce(categoryCountReducer, {});
  
  return Object.keys(categoryTotals)
    .map(category => {
      return { 
        count: categoryTotals[category],
        name: category
      }
    })
    .sort((a,b) => b.count - a.count);
}

function categoryCountReducer (
  categoryCounts: CategoryCountsProps, 
  categoryGroup: Categories): CategoryCountsProps {
  
  categoryCounts[MSG_ALL_PROJECTS_KEY] = increment(categoryCounts, MSG_ALL_PROJECTS_KEY);
  categoryGroup.forEach((category) => { 
    categoryCounts[category] = increment(categoryCounts, category);
  });
  return categoryCounts;
}

function increment (categoryCounts: CategoryCountsProps, category: string): number {
  const currentCount = categoryCounts[category];
  return !!currentCount ? currentCount + 1 : 1;
}
