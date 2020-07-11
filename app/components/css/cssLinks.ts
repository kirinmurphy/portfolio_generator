import css from 'styled-jsx/css';

export const cssLinks = css.global`
  a,
  .link { 
    color:inherit;
    text-decoration:none;
    cursor:pointer;
  }

  .panel--default a,
  .panel--default .link {
    text-decoration:none; 
    color: var(--textcolor-link);
  }

  .panel--default a:hover,
  .panel--default .link:hover {
    text-decoration:underline;
    color: var(--textcolor-link-hover);
  }

  .panel--inverted a,
  .panel--inverted .link {
    color:var(--textcolor-link-inverted); 
    text-decoration:underline;       
  }

  .panel--inverted a:hover,
  .panel--inverted .link:hover {
    color:var(--textcolor-link-inverted-hover);
  }
`;
