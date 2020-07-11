import React from 'react';

import '../../../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  show: boolean;
  updatePlayerTime: (arg0: any) => void;
  triggerStartTime : number | null;
  icon: IconProp;
};

const JumpIconTrigger:React.FC<IconProps> = (props) => {
  const { triggerStartTime, show, updatePlayerTime, icon } = props;
  return show ? (
    <span 
      onClick={() => {
        if ( triggerStartTime !== undefined ) { updatePlayerTime(triggerStartTime); }
      }}>
      
      <FontAwesomeIcon icon={icon} />
    <style jsx>{`
      span { cursor:pointer; }
    `}</style>
    </span>
  ): <></>;
};

export const JumpForwardIconTrigger:React.FC<IconProps> = JumpIconTrigger;

interface BackIconProps extends IconProps {
  triggerStartTime: number;
};

export const JumpBackIconTrigger:React.FC<BackIconProps> = (props) => {
  return ( <JumpIconTrigger {...props} />);
};
