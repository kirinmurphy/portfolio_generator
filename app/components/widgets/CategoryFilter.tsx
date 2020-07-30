import React from 'react';

import { Dropdownizer } from 'codethings-react-ui';

export interface CategoryDisplayProps {
  name: string;
  count: number;
}

interface Props {
  categories: CategoryDisplayProps[];
  updateCallback: (arg0: string) => void;
  activeCategory: string;
}

export function CategoryFilter (props: Props): JSX.Element {
  const { categories, updateCallback, activeCategory } = props;
  
  return (
    <Dropdownizer
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
  );
}

function getActiveCategoryTitle (categories: CategoryDisplayProps[], activeCategory: string) {
  const activeIndex = categories.findIndex(category => category.name === activeCategory);
  const activeCategoryCount = categories[activeIndex].count;
  return `${activeCategory} (${activeCategoryCount})`;
}
