import React, { useEffect, useState, useContext } from 'react';

import { CategoryProps } from "../types/portfolio";
import { useUrlParam, UpdateParamType, ClearParamType } from './useUrlParam';

type FocusContextType = Partial<CategoryProps[]>

type FocusFilterType = string | null;

interface UseFocusFilterReturnProps {
  activeFocusType: FocusFilterType;
  activeFocusName: string;
  focusCategories: FocusContextType;
  updateFocus: UpdateParamType;
  clearFocus: ClearParamType;
}

const FOCUS_FILTER_PARAM = 'focus';

export const FocusCategoriesContext = React.createContext<FocusContextType>([]);

export function useFocusFilter (): UseFocusFilterReturnProps {

  const { 
    paramValueFromUrl, 
    updateParam: updateFocus, 
    clearParam: clearFocus, 
  } = useUrlParam(FOCUS_FILTER_PARAM);
  
  const focusCategories = useContext(FocusCategoriesContext) || [];

  const focusTypes = focusCategories.map(category => category?.id);

  const [activeFocusType, setActiveFocusType] = useState<FocusFilterType>(null);

  const activeFocusName = focusCategories
    .filter(category => category?.id === activeFocusType)[0]?.name || '';

  useEffect(() => {
    const hasFocusFilter = !!paramValueFromUrl && focusTypes.includes(paramValueFromUrl); 
    setActiveFocusType(hasFocusFilter ? paramValueFromUrl : null);   
  }, [paramValueFromUrl, focusTypes]);

  return { 
    focusCategories,
    activeFocusType,
    activeFocusName, 
    updateFocus, 
    clearFocus
  };
}
