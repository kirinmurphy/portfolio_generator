import React, { useEffect, useRef } from 'react';

import { UrlParamCategoryFilterProvider } from 'codethings-nextjs-router-addons';

import { WorkHistoryProps } from '../types/portfolio';
import { useFocusFilter } from '../utils/useFocusFilter';
import { ProjectListsByWorkType } from './ProjectListsByWorkType';
import { ProjectListByFocus } from './ProjectListByFocus';
import { FocusFilterDropdown } from './FocusFilterDropdown';
import { breakpointMobile } from '../../portfolioData/cssVariables';

export function WorkHistory (props: WorkHistoryProps): JSX.Element {
  const { projectList, categories } = props;

  return (
    <UrlParamCategoryFilterProvider filterCategories={categories || []}>
      <WorkHistoryInner projectList={projectList} />
    </UrlParamCategoryFilterProvider> 
  );
}

function WorkHistoryInner ({ projectList }: WorkHistoryProps): JSX.Element {
  const { focusCategories, activeFocusId } = useFocusFilter();

  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ( typeof(Window) !== 'undefined' && filterRef.current ) {
      scrollToTopOfList(window, filterRef.current);
    }
  }, [activeFocusId]);

  return (
    <div className="work-history">
      {!!focusCategories.length && (
        <div className="focus-filter-wrapper" ref={filterRef}>
          <FocusFilterDropdown />
        </div>
      )}

      {!activeFocusId && (
        <ProjectListsByWorkType projectList={projectList} />
      )}

      {!!activeFocusId && ( 
        <ProjectListByFocus projectList={projectList} />
      )}

      <style jsx>{`

        .focus-filter-wrapper {
          margin-bottom:-2.6rem;
          text-align:right;
        }
        
        .focus-filter-wrapper :global(.dropdownizer__trigger:after) {
          position:relative;
          top:2px;
        }

        @media screen {
          .work-history {
            position:relative;
            min-height:70vh;
          }

          .focus-filter-wrapper {
            position: -webkit-sticky; /* Safari */
            position: sticky;
            top: 0;
            z-index:var(--zindex-sticky-filter);
          }
        }

        @media print {
          .focus-filter-wrapper { display:none; }
        }  

        @media(min-width:${breakpointMobile}) {
          .focus-filter-wrapper :global(.focus-filter > *) {
            background:#fff;
          }
        }

        @media(max-width:${breakpointMobile}) {
          .focus-filter-wrapper {
            padding-right:var(--gutter-page-section);
          }
        }

        @media(max-width:470px) {
          .focus-filter-wrapper {
            margin-bottom:0rem;
            padding-top:0;
            line-height:3;
            text-align:right;
            background:#15283b;
            color:var(--textcolor-inverted);
          }

          .focus-filter-wrapper :global(.link),
          .focus-filter-wrapper :global(.link:hover) {
            color:var(--textcolor-inverted)
          }
        }
      `}</style>
    </div>    
  );
}

function scrollToTopOfList (window:Window, element:HTMLDivElement) {
  const currentScroll = window.scrollY;
  const filterOffset = element.offsetTop;
  const newScrollPosition = currentScroll - filterOffset;
  window.scroll(0, newScrollPosition); 
  window.history.scrollRestoration = 'manual';  
}
