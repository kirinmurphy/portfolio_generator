import css from 'styled-jsx/css';

export const cssDefaults = css.global`
  * {  
    box-sizing: border-box;
  }

  body,
  p,
  dl, dt, dd,
  h1, h2, h3, h4,
  ul, ol, li {
    margin: 0; 
    padding: 0;
    line-height:1.6;
  }


  body { 
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: var(--textcolor-base);
    background:var(--bg-page);
  }

  h1, h2, h3 {
    font-weight:normal;
  }

  h4 { 
    font-size:var(--fontSize-highlight);
    font-weight:bold;
  }

  button {
    border: none;
    cursor:pointer;
    font-size:inherit;
  }

  .text__small {
    font-size: var(--fontSize-small);
    line-height:1.2rem;
    color:var(--textcolor-light);
  }  

  ul.bulleted,
  ol.bulleted {
    margin-left:1.5rem;
  }  
`;
