import { MSG_BACK_LINK } from '../utils/dictionary';

import '../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BackLink = () => {
  return (
    <>
      <a className="back-link" 
        onClick={() => { window.history.back(); }}>
          <FontAwesomeIcon icon={['fas', 'angle-left']} />{MSG_BACK_LINK}
      </a>    
      <style jsx>{`
        .back-link {
          display:inline-block;
          position:relative;
          top:-.75rem;
          font-size:var(--fontSize-highlight);
        }

        .back-link :global(svg) {
          width:.8rem;
          margin-right:.5rem;
          margin-bottom:-0.35rem;
        }
      `}</style>
    </>
  );
};
