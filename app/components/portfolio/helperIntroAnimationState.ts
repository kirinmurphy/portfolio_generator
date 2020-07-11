const ANIMATION_DELAY = 2000;

export const resetScrollPosition = (window: Window) => {
  window.scroll(0,0); 
  window.history.scrollRestoration = 'manual';
};

export const turnOffAnimation = (window: Window) => {
  window.history.scrollRestoration = 'auto';
  const html = window.document.querySelector(`html`) as HTMLElement;
  html.style.setProperty('--animationTransitionDelay1', '0');
  html.style.setProperty('--animationTransitionDelay2', '0');
  html.style.setProperty('--animationTransitionDelay3', '0');
  html.style.setProperty('--animationInitIntroLinksOffset', '0');
  html.style.setProperty('--animationInitSkillsetsOffset', '0');
  html.style.setProperty('--animationInitOpacity', '1');
  html.style.setProperty('--animationEasing', 'none');
};

export const setAnimationDelay = (setIsReady: (arg0: boolean) => void) => {
  setIsReady(false); 
  const timeout = setTimeout(() => { setIsReady(true); }, ANIMATION_DELAY); 
  return () => { clearTimeout(timeout); };
};