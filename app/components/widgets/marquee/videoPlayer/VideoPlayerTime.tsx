import { getFormattedTime } from './helperGetFormattedTime';
import { GenericRefTypeUntilIFigureOutTheCommonDenominator } from '../../../utils/bindTriggerOverride';

interface Props {
  videoRef: GenericRefTypeUntilIFigureOutTheCommonDenominator;
};

export const VideoPlayerTime:React.FC<Props> = ({ videoRef }) => {
  return !!videoRef?.current ? (
    <span className="video-time">
      <span>{getFormattedTime(videoRef.current.currentTime)}</span> / 
      <span>{getFormattedTime(videoRef.current.duration)}</span>
    </span>
  ): <></>;
};
