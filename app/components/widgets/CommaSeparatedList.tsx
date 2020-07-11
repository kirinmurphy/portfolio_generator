import React from 'react';

import { CommaSeparatedListProps } from '../types/widgets';
import { Markdownizer } from './Markdownizer';

interface Props {
  name: string;
  collection?: CommaSeparatedListProps;
};

export const CommaSeparatedList:React.FC<Props> = ({ name, collection }) => {
  return collection && collection.length ? (
    <>
      <div>
        <strong>{name}: </strong>
        <span>{collection.map((item, index, array) => {
          
          const possibleComma = index < array.length - 1 ? ', ' : '';
          const content = `${item}${possibleComma}`;
          
          return <span key={item}>
            <Markdownizer source={content} useAllowedTypes={true} />
          </span>
        })}</span>
      </div>

      <style jsx>{`
        div { 
          margin-bottom:.2rem;
        }

        strong { 
          color:var(--textcolor-dark); 
        }
      `}</style>
    </>
  ) 
  : <></>;
};
