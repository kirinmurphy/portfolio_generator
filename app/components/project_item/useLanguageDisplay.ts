import { useFocusFilter } from '../utils/useFocusFilter';

const FOCUS_FILTER_TYPE_DESIGN = 'desig';

export function useLanguageDisplay (): [boolean] {
  const { activeFocusId } = useFocusFilter();

  const hasDesingFocus = activeFocusId !== FOCUS_FILTER_TYPE_DESIGN;

  return [!activeFocusId || hasDesingFocus];  
}
