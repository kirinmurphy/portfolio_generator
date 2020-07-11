import css from 'styled-jsx/css';

import { breakpointMaxWidth } from '../../portfolioData/cssVariables';

export const cssProjectDetail = css`        
  .project-wrapper {
    padding:var(--gutter-active-project);
  }

  header { 
    padding-top:.5rem; 
  }

  h3 { 
    font-size:var(--fontSize-title-medium); 
  }

  section:not(:last-of-type) { 
    padding-bottom:var(--project-detail-desc-gutter); 
  }

  .tagline { 
    font-weight: bold;
    font-size:var(--fontSize-bump);
  }

  .description :global(p:not(:last-of-type)) {
    margin-bottom:1rem;
  }

  .languages-and-tools {
    padding-top:var(--project-detail-desc-gutter);
    border-top:1px solid #ccc;
  }

  .external-links :global(.fa-github-alt) {
    margin-left:.25rem;
  }

  .expando-panel {
    padding-top:1.5rem;
  }

  @media(min-width:${breakpointMaxWidth}) {
    [data-has-marquee="true"][data-fullscreen-marquee="false"] {
      display:flex;
    }

    [data-has-marquee="true"][data-fullscreen-marquee="false"] > header,
    [data-has-marquee="true"][data-fullscreen-marquee="false"] :global(.marquee) {
      flex-basis:48%;
    }

    [data-has-marquee="true"][data-fullscreen-marquee="false"] > :global(.marquee) {
      margin-right:4%;
      padding-bottom:32%;
    }
  } 
`;