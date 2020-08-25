import css from 'styled-jsx/css';

export const cssPorfolioPrintView = css.global`
  @media print {


    svg,
    .svg-inline--fa {
      color:var(--textcolor-link) !important;
    }

    .loading-message, 
    footer {
      display:none !important;
    }
   
    section .inner  {
      padding:.5rem !important;
    }

    #portfolio-intro { 
      padding:0 !important; 
    }

    #portfolio-intro h1 {
      font-size:var(--fontSize-title-big) !important;
    }

    #portfolio-intro .introduction {
      font-size:var(--fontSize-base) !important;
    }

    #portfolio-intro p:not(:last-of-type) {
      margin-bottom:0rem !important;
    }
    
    // TODO - this can be incorportated into the panel BEM
    // #portfolio-intro a {
    //   color:var(--textcolor-link) !important;
    //   text-decoration:none !important;
    // }

    #projects {
      padding-top:0 !important;
    }

    .subset-wrapper:not(:last-of-type) {
      margin-bottom:.75rem !important;
    }

    .subset-wrapper > header {
      padding:0 0 .3rem 0 !important;
      border-bottom:1px solid #999;
    }

    .subset-wrapper > header > h3 {
      font-size:var(--fontSize-highlight);
    }

    .project-work-summary {
      padding:.3rem 0 .5rem 0 !important; 
    }

    .project-work-summary .thumb {
      display:none;
    }

    .project-work-summary h3 {
      padding-bottom:0 !important;    
      font-size: var(--fontSize-small) !important;  
    }

    .text__small,
    .project-work-summary .description {
      font-size: .7rem !important;  
    }
  }
`;
