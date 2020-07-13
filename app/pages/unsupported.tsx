import React from 'react'; 

function UnsupportedBrowserView (): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div>
        WHY ARE YOU STILL USING THIS BROWSER?!? IT&apos;S {currentYear}!!!
        <br/>
        <a href="https://brave.com/">Brave</a>
        <br/>
        <a href="https://firefox.com/">Firefox</a>
      </div>

      <style jsx>{`
        div {
          padding:20px;
          font-weight:2rem;
          font-family: Helvetica, Arial, sans-serif;
        }
        
        a { color:#35487b; }
      `}</style>
    </>
  );
}

export default UnsupportedBrowserView;
