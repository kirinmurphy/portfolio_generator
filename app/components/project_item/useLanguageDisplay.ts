import { useUrlParam } from '../utils/useUrlParam';
import { useFocusFilter } from '../utils/useFocusFilter';

const SHOW_LANGUAGES_PARAM = 'languages';

const FOCUS_FILTER_TYPE_TECHNOLOGY = 'technology';

export function useLanguageDisplay (): [boolean] {
  const { activeFocusType } = useFocusFilter();

  const { paramValueFromUrl } = useUrlParam(SHOW_LANGUAGES_PARAM);

  const showLanguagesOnDefaultView = (paramValueFromUrl === 'true' && !activeFocusType);

  const hasTechnologyFocus = activeFocusType === FOCUS_FILTER_TYPE_TECHNOLOGY;

  return [showLanguagesOnDefaultView || hasTechnologyFocus];  
}
