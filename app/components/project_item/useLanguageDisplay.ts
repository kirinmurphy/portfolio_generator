import { useUrlParam } from 'codethings-nextjs-router-addons';
import { useFocusFilter } from '../utils/useFocusFilter';

const SHOW_LANGUAGES_PARAM = 'languages';

const FOCUS_FILTER_TYPE_TECHNOLOGY = 'technology';

export function useLanguageDisplay (): [boolean] {
  const { activeFocusId } = useFocusFilter();

  const { paramValue } = useUrlParam(SHOW_LANGUAGES_PARAM);

  const showLanguagesOnDefaultView = (paramValue === 'true' && !activeFocusId);

  const hasTechnologyFocus = activeFocusId === FOCUS_FILTER_TYPE_TECHNOLOGY;

  return [showLanguagesOnDefaultView || hasTechnologyFocus];  
}
