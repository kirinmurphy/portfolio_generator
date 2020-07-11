import React, { useRef } from 'react';
import { VideoDisplayDataProps } from '../../../types/widgets';
import { GenericRefTypeUntilIFigureOutTheCommonDenominator } from '../../../utils/bindTriggerOverride';

interface Props {
  displayData: VideoDisplayDataProps;
  updatePlayerTime: (arg0: number) => void;
};


export const VideoProgressMeter:React.FC<Props> = ({ displayData, updatePlayerTime }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const percentViewed = displayData.currentTime / displayData.duration * 100;

  return (
    <>
      <div ref={progressRef} className="meter"
        onClick={event => { 
          const newTimeFromClick = getNewTimeFromClick(event, progressRef, displayData);
          if ( !!newTimeFromClick ) { updatePlayerTime(newTimeFromClick); }
        }}>

        <div className="meter__percent-complete"></div>
      </div>

      <style jsx>{`
        .meter {
          width:100%;
          height:10px;
          background-color:#59c2fd;
          cursor:pointer;
        }

        .meter__percent-complete {
          width: ${percentViewed}%;
          height: 100%;
          background:#1982bd;
          transition: width .3s var(--transition-swoop-easing);
        }
      `}</style>
    </>
  );
};


function getNewTimeFromClick (
  // TSTODO - why doesn't event:Event work here? 
  event: any, 
  ref: GenericRefTypeUntilIFigureOutTheCommonDenominator, 
  displayData:VideoDisplayDataProps): number | null {
  
  const progressMeter = ref.current;
  if ( !progressMeter ) { return null; }
  const containerOffset = progressMeter?.getBoundingClientRect().left;
  const clickedTargetPosition = event.pageX - containerOffset;
  const percentProgressOfClick = clickedTargetPosition / progressMeter?.offsetWidth;
  return Math.floor(displayData.duration * percentProgressOfClick);
};