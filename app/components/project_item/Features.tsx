import React from 'react';

import { MSG_FEATURES_TITLE } from '../utils/dictionary';

import { FeaturesType } from '../types/project';

import { Markdownizer } from '../widgets/Markdownizer';

interface Props {
  features?: FeaturesType;
}

export function Features ({ features }: Props): JSX.Element {
  return !!features ? (
    <>
      <h2>{MSG_FEATURES_TITLE}</h2>
      {features && features.length && ( 
        <ul className="bulleted">
          {features.map((feature, index) => 
            <li key={index}>
              <Markdownizer source={feature} />
            </li>
          )}
        </ul>
      )}
    </>
  ) : <></>;
}
