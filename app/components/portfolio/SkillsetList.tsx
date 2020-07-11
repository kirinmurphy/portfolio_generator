import React from 'react';

import { SkillsetProps } from '../types/portfolio';

import { Skillset } from './Skillset';

interface Props {
  skillsets: SkillsetProps[];
};

export const SkillsetList: React.FC<Props> = ({ skillsets }) => {
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
};
