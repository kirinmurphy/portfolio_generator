import React from 'react';

import { globalVariables } from './css/cssVariables';
import { cssDefaults } from './css/cssDefaults';
import { cssLinks } from './css/cssLinks';
import { cssProjectOverrides } from '../portfolioData/cssProjectOverrides';

interface LayoutComponentProps {
  children: JSX.Element;
}

export const Layout:React.FC<LayoutComponentProps> = (props) => {
  return (
    <>
      <style jsx global>{globalVariables}</style>
      <style jsx global>{cssDefaults}</style>
      <style jsx global>{cssLinks}</style>
      <style jsx global>{cssProjectOverrides}</style>

      <div className="body-wrap">
        {props.children}
      </div>  
    </>
  );
}; 
