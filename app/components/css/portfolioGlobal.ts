import css from 'styled-jsx/css';

export const portfolioGlobal = css.global`
  h1, h2, h3 {
    font-weight:normal;
  }

  h4 { 
    font-size:var(--fontSize-highlight);
  }

  .text__small {
    font-size: var(--fontSize-small);
    line-height:1.3rem;
    color:var(--textcolor-light);
  }  
`;
