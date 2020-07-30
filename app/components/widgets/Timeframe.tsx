import React from 'react';

import { TimeframeProps } from '../types/project';

interface Props {
  timeframe: TimeframeProps;
}

export function Timeframe ({ timeframe }: Props): JSX.Element {
  if ( !timeframe || !timeframe.start ) { return <></>; }
  const differentEnding = !!timeframe.end && timeframe.start !== timeframe.end;
  const possibleEnd = differentEnding ? <span> - {timeframe.end}</span> : '';
  return  <span>{timeframe.start}{possibleEnd}</span>;
}
