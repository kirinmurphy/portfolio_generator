import '../../../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props { 
  trigger:() => void; 
  icon: IconProp;
};

export const PlayerStateTrigger:React.FC<Props> = ({ trigger, icon }) => {
  return (
    <span onClick={trigger}>
      <FontAwesomeIcon icon={icon} />
      <style jsx>{`
        span { cursor:pointer; }
      `}</style>
    </span>
  );
};
