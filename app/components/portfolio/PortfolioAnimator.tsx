
// This little unnecessary animation thing only needs to run on the first visit
// It will be annoying to happen if someone is navigating back and forth with other links
// I coulda target="_blank"ed 'em, but kinda been re-thinking forcing new tabs and trying without 
// Considered checking the scrollY position, but that wasn't as reliable
// So this is an ad-hoc cache action that will only show the animation after a new-ish session (10 min)

// Initially ran into difficulty with using anything from sessionStorage to update the template. 
// I started with setting a dynamic html attribute based on some sessionStorage data but that blew up.
// nextJs's SSR expects templates to match exactly on server & client, & sessionStorage obvi is just client
// You CAN turn off SSR per component, but it's the whole page!  Didn't wanna give up that sweet SSR just yet.
// But just before giving up I realized I could just change the  values in JS directly with CSS VARIABLES!! 
// WHICH YOU CAN MODIFIY AT RUNTIME WITH JAVASCRIPT!!  YES, I AM SERIOUS!!  
// CSS VARIABLES ARE AWESOME AND I HATE CSS! 

// Definitely overkill, but sometimes you just don't know how deep that rabbit hole goes until you're in it.

import React, { useState, useEffect } from 'react';

import { MSG_PORTFOLIO_LOADING } from '../utils/dictionary';

import { 
  wasLastVisitEarlierThan, 
  storeCurrentVisitTimestamp 
} from './helperLastViewed';

import { 
  resetScrollPosition, 
  setAnimationDelay, 
  turnOffAnimation 
} from './helperIntroAnimationState';

const tenMinutes =  1000 * 60 * 10;
const ANIMATOR_CACHE_RESET_IN_SECONDS = tenMinutes;

interface Props {
  children: JSX.Element;
};

export const PortfolioAnimator:React.FC<Props> = ({ children }) => {

  const [isReady, setIsReady] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof(Window) !== "undefined") {
      const showIntroAnimation = wasLastVisitEarlierThan(window.sessionStorage, ANIMATOR_CACHE_RESET_IN_SECONDS);      
      storeCurrentVisitTimestamp(window.sessionStorage);

      if ( showIntroAnimation ) { 
        resetScrollPosition(window);
        // returning method for garbage collection to clear the timeout
        return setAnimationDelay(setIsReady);
      } else {
        turnOffAnimation(window);
        setIsReady(true);
      }
    }
  }, []);

  return (
    <>
      <div data-ready={isReady}>
        {!isReady && (
          <div className="loading-message">
            {MSG_PORTFOLIO_LOADING}
          </div>
        )}
        {children}
      </div>

      <style jsx>{`
        [data-ready="false"] {
          height:100vh;
          overflow:hidden;
        }

        [data-ready="false"] .loading-message {
          position:absolute; 
          left:50%;
          top:50%;
          transform:translate3d(-50%, -50%, 0);
          color:#fff;
          font-size:var(--fontSize-title-small);
        }
      `}</style>
      <style jsx global>{`
        #skillset {
          position:relative;
          z-index:0;
        }

        #projects,
        #page-footer {
          position:relative;
          z-index:1;
        }

        #portfolio-intro h1,
        #portfolio-intro .introduction,
        #portfolio-intro .contact-links a,
        #skillsets {
          opacity:var(--animationInitOpacity);
          transition:opacity 1.2s var(--animationEasing), transform 0.8s var(--animationEasing);
          -webkit-backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        #portfolio-intro .contact-links a {
          transform:translate3d(0, var(--animationInitIntroLinksOffset), 0);
        }

        #skillsets {
          transform:translate3d(0, var(--animationInitSkillsetsOffset), 0);
        }

        #portfolio-intro h1 { transition-delay:0; }
        #portfolio-intro .introduction { transition-delay:var(--animationTransitionDelay2); }
        #portfolio-intro .contact-links a:nth-of-type(1) { transition-delay:var(--animationTransitionDelay1); }
        #portfolio-intro .contact-links a:nth-of-type(2) { transition-delay:var(--animationTransitionDelay2); }
        #portfolio-intro .contact-links a:nth-of-type(3) { transition-delay:var(--animationTransitionDelay3); }
        #skillsets { transition-delay:var(--animationTransitionDelay2); }

        [data-ready="true"] #portfolio-intro h1,
        [data-ready="true"] #portfolio-intro .introduction,
        [data-ready="true"] #portfolio-intro .contact-links a,
        [data-ready="true"] #skillsets {
          opacity:1;
        }

        [data-ready="true"] #portfolio-intro .contact-links a,
        [data-ready="true"] #skillsets {
          transform:translate3d(0, 0, 0);
        }
      `}</style>
    </>
  );
};
