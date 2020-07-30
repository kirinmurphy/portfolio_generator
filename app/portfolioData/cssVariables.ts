import css from 'styled-jsx/css';

export const breakpointMobile = '550px';
export const breakpointMiddle = '750px';
export const breakpointDesktop = '870px';
export const breakpointMaxWidth = '1000px';

export const globalVariables = css.global`
  :root {
    /* -- COLORS --------------- */
    --color-light-blue: #1982bd;
    --color-dark-blue: #0a344b;
    --color-beige: #e6e4df;
    --color-bluegray-light: #eaeef3;
    --color-bluegray-lighter: #f5f9fc;

    --textcolor-link: var(--color-light-blue);
    --textcolor-link-hover: #000;
    --textcolor-link-inverted: var(--textcolor-inverted);
    --textcolor-link-inverted-hover: var(--color-beige);

    --page-bgColor: #25384b;
    --bg-panel-skillsets: #1b412e;
    --bg-panel-footer: #15283b;
    --bg-panel-light: var(--color-beige);
    --bg-panel-lighter: var(--color-bluegray-lighter);


    /* -- LAYOUT ------------------- */
    --body-max-width: 1050px;

    --paragraph-bottom-margin: 1rem;
    --gutter-page-section: 1rem;
    --gutter-project-list: 0rem;
    --intro-vertical-offset: 0rem;


    /* -- INTRO --------------- */
    --fontSize-intro-header: var(--fontSize-title-big);
    --fontSize-intro-text: var(----fontSize-highlight);

    --animationInitOpacity: 0;   
    --animationInitIntroLinksOffset: 30px;  
    --animationInitSkillsetsOffset: 1000px;
    --animationEasing: var(--transition-swoop-easing);
    --animationTransitionDelay1: .5s;
    --animationTransitionDelay2: .7s;
    --animationTransitionDelay3: .9s;

    /* -- SKILLSETS --------------- */
    --height-skillsetFeaturedItem-4: auto;
    --height-skillsetFeaturedItem-6: auto;
    --height-skillsetFeaturedItemImage: 0;


    /* -- PROJECT DETAIL ---------- */ 
    --marquee-desktop-width: 300px;
    --gutter-active-project: 1rem;
    --project-detail-desc-gutter: 1rem;
  }



  @media(min-width:${breakpointMobile}) {
    :root {
      --fontSize-intro-header: var(--fontSize-title-huge);
      --fontSize-intro-text: var(--fontSize-title-small);

      --height-skillsetFeaturedItem-4: 330px;
      --height-skillsetFeaturedItem-6: 330px;
      --height-skillsetFeaturedItemImage: 60%;

      --gutter-active-project: 2rem;
    }          
  }

  @media(min-width:${breakpointMiddle}) {
    :root {
      --fontSize-intro-text: var(--fontSize-title-medium);

      --gutter-page-section: 2rem;
      --gutter-project-list: 2rem;
      --intro-vertical-offset: 2rem;
      --project-detail-desc-gutter: 1.5rem;

    }  
  }

  @media(min-width:${breakpointDesktop}) {
    :root {
      --height-skillsetFeaturedItem-4: 290px;
      --height-skillsetFeaturedItem-6: 315px;  
      --height-skillsetFeaturedItemImage: 70%;
    }
  }
`;
