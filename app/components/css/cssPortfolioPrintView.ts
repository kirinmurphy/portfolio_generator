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

    #portfolio-intro .title {
      font-size:var(--fontSize-highlight) !important;
    }

    #portfolio-intro .introduction {
      font-size:var(--fontSize-small) !important;
    }

    #portfolio-intro p:not(:last-of-type) {
      margin-bottom:0rem !important;
    }

    #projects {
      padding-top:0 !important;
    }

    .project-list-wrapper:not(:last-of-type) {
      margin-bottom:1.5rem !important;
    }

    .project-list-wrapper > header {
      padding:0 0 .3rem 0 !important;
      border-bottom:1px solid #999;
    }

    .project-list-wrapper > header > h3 {
      font-size:var(--fontSize-bump);
    }

    .project-work-summary {
      padding:.5rem 0 .75rem 0 !important; 
    }

    .project-work-summary .thumb {
      display:none;
    }

    .project-work-summary h3 {
      padding-bottom:0 !important;    
    }

    .project-work-summary h3 .link {
      font-size: var(--fontSize-small) !important;  
    }

    .project-work-summary .marquee {
      display:none;
    }

    .project-work-summary .summary-content {
      display:flex;
      justify-content: space-between;
    }

    .project-work-summary .languages {
      flex:0 0 200px;
      margin-left:20px;
      padding-top: 0 !important;
      transform:translateY(-1px);
    }

    .text__small,
    .project-work-summary .description {
      font-size: .7rem !important;  
    }
  }
`;
