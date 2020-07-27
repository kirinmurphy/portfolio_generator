export type CommaSeparatedListProps = string[];

export interface TimeframeProps {
  end: number | string;
  start: number | string;
}

export interface CategoryDisplayProps {
  name: string;
  count: number;
}

// MARQUEE PROPS
export type MarqueeType = 'iframe' | 'slideshow' | 'video';

export interface MarqueeProps {
  type: MarqueeType;
  images: string[];
  video: VideoProps;
  fullscreen?: boolean;
}

// MARQUEE VIDEO PROPS
// json properties
export interface VideoSourceProps {
  src: string;
  type: string;
}

export interface VideoPlayerOptionsProps {
  autoPlay?: boolean;
  poster?: string;
}

export interface VideoChapterProps {
  startTime: string;  // 'HH:MM:SS' | 'MM:SS' | 'SS'
  title: string;
}

export interface VideoProps extends VideoPlayerOptionsProps {
  sources: VideoSourceProps[];
  chapters?: FormattedVideoChapterProps[];
}

// Formatted / computed props
export interface FormattedVideoChapterProps {
  title: string;
  startTime: number;
  nextChapterStartTime?: number;
}

export interface VideoDisplayDataProps {
  currentTime: number;
  duration: number;
}

// Reducer Actions and State
export type VideoPlayerActionTypes = 
  'play' | 
  'pause' | 
  'jumpTo' | 
  'enableControls' | 
  'resetUpdatedTime';

export interface VideoPlayerActionProps {
  type?: VideoPlayerActionTypes
  updatedTime?: number | null;
}
  
// TSTODO - ??? when I assign this type to playerState it blows up? 
// type PlayerStateType = 'loading' | 'ready' | 'playing' | 'paused';
export type PlayerStateType = string;

export interface VideoPlayerStateProps {
  playerState: PlayerStateType;
  updatedTime?: number | null;
}
