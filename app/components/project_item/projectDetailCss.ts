import css from 'styled-jsx/css';

import { breakpointMaxWidth } from '../../portfolioData/cssVariables';

export const cssProjectDetail = css`        
  .project-wrapper {
    padding:var(--gutter-active-project);
  }

  .project-wrapper :global(.back-link) {
    position:relative;
    top:-.75rem;
  }

  .project-wrapper :global(.back-link svg) {
    margin-bottom:-0.35rem;
  }

  .marquee {
    position:relative;
    padding-bottom:60%;
    margin-bottom:.8rem; 
    border:1px solid #ddd;
  }

  .main > header,
  section:not(:last-of-type) { 
    padding-bottom:var(--project-detail-desc-gutter); 
  }


  h3 { 
    padding:0;
    margin-bottom:.5rem;
    font-size:var(--fontSize-title-medium); 
  }

  .project-details {
    margin-bottom:.5rem;
  }

  .description :global(em) {
    display:inline-block;
    font-style:normal;
}

  .description :global(p:not(:last-of-type)) {
    margin-bottom:1rem;
  }

  .languages-and-tools {
    padding-top:var(--project-detail-desc-gutter);
    border-top:1px solid #ccc;
  }

  .languages-and-tools :global(.comma-separated-list) { 
    margin-bottom:.2rem;
  }
  
  .languages-and-tools :global(.comma-separated-list strong) { 
    color:var(--textcolor-dark); 
  }

  .external-links :global(.fa-npm),
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

    [data-has-marquee="true"][data-fullscreen-marquee="false"] .main,
    [data-has-marquee="true"][data-fullscreen-marquee="false"] :global(.marquee) {
      flex-basis:48%;
    }

    [data-has-marquee="true"][data-fullscreen-marquee="false"] > :global(.marquee) {
      margin-right:4%;
      padding-bottom:32%;
    }
  } 
`;