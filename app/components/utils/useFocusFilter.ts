import { 
  useUrlParamCategoryFilter,
  FilterContextType, 
  ParamFilterType, 
  UpdateParamType, 
  ClearParamType 
} from 'codethings-nextjs-router-addons';

interface UseFocusFilterReturnProps {
  activeFocusId: ParamFilterType;
  activeFocusName: string;
  focusCategories: FilterContextType;
  updateFocus: UpdateParamType;
  clearFocus: ClearParamType;
}

const FOCUS_FILTER_PARAM = 'focus';

export function useFocusFilter (): UseFocusFilterReturnProps {
 
  const { 
    filterCategories: focusCategories,
    activeFilterId: activeFocusId,
    activeFilterName: activeFocusName, 
    updateFilter: updateFocus, 
    clearFilter: clearFocus 
  } = useUrlParamCategoryFilter(FOCUS_FILTER_PARAM);

  return { 
    focusCategories,
    activeFocusId,
    activeFocusName, 
    updateFocus, 
    clearFocus
  };
}
