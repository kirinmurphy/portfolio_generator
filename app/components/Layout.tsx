import React, { useEffect } from 'react';

import { cssDefaults } from './css/cssDefaults';
import { cssLinks } from './css/cssLinks';
import { globalVariables } from '../portfolioData/cssVariables';
import { cssProjectOverrides } from '../portfolioData/cssProjectOverrides';
import { redirectIfOldIE } from './utils/redirectIfOldIE';

interface Props {
  children: JSX.Element;
}

export function Layout ({ children }: Props): JSX.Element {

  useEffect(() => { redirectIfOldIE(window); }, []);

  return (
    <>
      <style jsx global>{globalVariables}</style>
      <style jsx global>{cssDefaults}</style>
      <style jsx global>{cssLinks}</style>
      <style jsx global>{cssProjectOverrides}</style>

      <div className="body-wrap">
        {children}
      </div>  
    </>
  );
}
