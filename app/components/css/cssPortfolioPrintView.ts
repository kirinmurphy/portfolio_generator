import css from 'styled-jsx/css';

export const cssPorfolioPrintView = css.global`
  @media print {
    * { 
      background:#fff !important;
    }

    svg,
    .svg-inline--fa {
      color:var(--textcolor-link) !important;
    }

    .loading-message, 
    .filter-wrapper,
    footer {
      display:none !important;
    }
   
    section .inner  {
      padding:.5rem !important;
    }

    section:not(#projects) {
      color:#000 !important;
    }

    #portfolio-intro { 
      padding:0 !important; 
    }

    #portfolio-intro header {
      margin-bottom:.5rem;
    }

    #portfolio-intro h1 {
      font-size:var(--fontSize-title-big) !important;
    }

    #portfolio-intro p:not(:last-of-type) {
      margin-bottom:.5rem !important;
    }

    .skillset .intro,
    #portfolio-intro .introduction {
      font-size:var(--fontSize-small) !important;
    }

    #skillsets {
      box-shadow:none !important;
    }

    .skillsets-list__item {
      margin-bottom:.5rem !important;
    }
    
    .skillset:not(:last-of-type) {
      margin-bottom:1rem !important;
    }

    .skillset h2 {
      font-size:var(--fontSize-title-small);
    }

    .skillset a {
      color:var(--textcolor-link) !important;
      text-decoration:none !important;
    }

    .skillset ul {
      display:block !important;
    }

    .skillset li {
      width: 100% !important;
      height:auto !important;
      margin:0 !important;
    }

    .skillset .intro {
      margin-bottom:.5rem !important;
    }

    .skillset-featured-projects .image-wrap {
      display:none !important;
    }

    .skillset-featured-projects .content {
      border:none;
      padding:0;
    }

    .skillset-featured-projects .content > * {
      display:inline-block !important;
      margin-right: .5rem;
      font-size:var(--fontSize-small) !important;
    }

    .skillset-featured-projects a:hover {
      transform:scale(1) !important;
    }

    #projects header {
      padding:.5rem 0 !important;
      border-bottom:1px solid #999;
    }

    #projects [data-show-all]:not(:last-of-type) {
     margin-bottom: 1rem !important;
    }

    #projects article .project-work-summary {
      padding:.3rem .5rem !important; 
    }

    #projects article h3 {
      margin-bottom:0;    
    }

    #projects article * {
      font-size: var(--fontSize-small) !important;  
    }
`;
