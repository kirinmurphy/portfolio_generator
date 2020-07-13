import React from 'react';

import { SkillsetProps } from '../types/portfolio';

import { Skillset } from './Skillset';

interface Props {
  skillsets: SkillsetProps[];
}

export function SkillsetList ({ skillsets }: Props): JSX.Element {
  return (
    <>
      <div className="skillsets-list">
        {skillsets.map((skillset, index) => (
          <div key={index} className="skillsets-list__item">
            <Skillset skillset={skillset} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .skillsets-list__item {
          margin-bottom: 2rem;         
        }
      `}</style>    
    </>
  );  
}
