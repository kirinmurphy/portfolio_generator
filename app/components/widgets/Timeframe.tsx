import React from 'react';

import { TimeframeProps } from '../types/widgets';

interface TimeframeComponentProps {
  timeframe: TimeframeProps;
}

export const Timeframe: React.FC<TimeframeComponentProps> = ({ timeframe }) => {
  if ( !timeframe || !timeframe.start ) { return <></>; }
  const differentEnding = !!timeframe.end && timeframe.start !== timeframe.end;
  const possibleEnd = differentEnding ? <span> - {timeframe.end}</span> : '';
  return  <span>{timeframe.start}{possibleEnd}</span>;
};
