import React from 'react';

import { CategoryDisplayProps } from '../types/widgets';

import { Dropdown } from './Dropdown';

interface CategoryFilterComponentProps {
  categories: CategoryDisplayProps[];
  updateCallback: (arg0: string) => void;
  activeCategory: string;
};

export const CategoryFilter:React.FC<CategoryFilterComponentProps> = (props) => {
  const { categories, updateCallback, activeCategory } = props;
  return (
    <>
      <Dropdown
        title={getActiveCategoryTitle(categories, activeCategory)}
        content={categories.map((category, index) => {
          const isActive = activeCategory === category.name;
          return !isActive ? (
            <div key={index} className="dropdown-item"
              onClick={() => { updateCallback(category.name); }}>

              {category.name} ({category.count})
            </div>
          ) : <React.Fragment key={index} />;
        })}
      />
    </>
  );
};

function getActiveCategoryTitle (categories: CategoryDisplayProps[], activeCategory: string) {
  const activeIndex = categories.findIndex(category => category.name === activeCategory);
  const activeCategoryCount = categories[activeIndex].count;
  return `${activeCategory} (${activeCategoryCount})`;
};
