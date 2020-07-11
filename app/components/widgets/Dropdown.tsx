import { useState, useRef } from 'react';

import { bindOutsideTriggerListener } from '../utils/bindOutsideTriggerListener';

interface Props {
  title: string | JSX.Element;
  content: JSX.Element[];
  orientation?: 'above' | 'below';
}

export const Dropdown: React.FC<Props> = ({ title, content, orientation = 'below' }) => {
  const dropdownRef = useRef<HTMLDListElement>(null);
  const dropdownWindowRef = useRef<HTMLDListElement>(null);

  const [isActive, setActiveState] = useState<boolean>(false);

  const toggleDropdown = () => {
    setActiveState(!isActive);
  };

  const closeDropdown = () => {
    setActiveState(false);
  };

  bindOutsideTriggerListener(dropdownRef, closeDropdown);

  const dropdownParentHeight = dropdownRef.current?.offsetHeight;

  return (
    <>
      <dl className="dropdown" ref={dropdownRef} 
        data-is-active={isActive}
        data-orientation={orientation}>

        <dt onClick={toggleDropdown}>
          <span>{title}</span>
        </dt>

        {/* TODO:  this expects all dropdown interaction to be a single click 
        this wouldn't support a form submission or other interactions
        to fix, would have to limit the close to only specific elements in the child content 
        what's cleaner - passing props through the component chain 
        or doing another useRef on this element and seeing if the actual clicked element is of a certain type */}
        <dd ref={dropdownWindowRef} onClick={closeDropdown}>
          {content}
        </dd>
      </dl>

      <style jsx>{`
        dl { 
          position:relative; 
          z-index:100;
        }

        dt { 
          padding-bottom:.25rem;
          cursor:pointer; 
        }

        dt span {
          /* margin-right:.2rem; */
        }

        dt:after {
          display:inline-block;
          margin-left:.4rem;
          transform: scale(1, .5);
        } 

        dd {
          position:absolute;
          right:0;
          width:220px;
          background:rgba(241, 243, 248, 0.95);
          box-shadow:0 10px 10px #aaa;
          transition:top .1s linear;
        }

        [data-orientation="above"] dd {
          bottom:${dropdownParentHeight}px;
        }

        
        [data-is-active="false"] dt:after {
          content: "▼";
        }

        [data-is-active="false"] dd { 
          display:none; 
        }

        [data-is-active="true"] dt:after {
          content: "▲";
        }



        // optional dropdown theme
        dd :global(.dropdown-item) {
          padding:.5rem 1rem;
          cursor:pointer;
          color:var(--textcolor-link);
        }

        dd :global(.dropdown-item:not(:last-of-type)) {
          border-bottom:1px solid #ddd;
        }

        dd :global(.dropdown-item:hover) {
          background:var(--color-dark-blue);
          color:#fff;
          font-weight:bold;
        }
      `}</style>
    </>
  );
};
