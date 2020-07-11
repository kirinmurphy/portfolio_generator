import React, { useState, useRef, useEffect, useReducer } from 'react';

import { MSG_OPEN_IN_NEW_WINDOW } from '../../../utils/dictionary';

import { 
  VideoProps, 
  VideoPlayerOptionsProps, 
  VideoDisplayDataProps, 
  VideoPlayerActionTypes 
} from '../../../types/widgets';

import { 
  playerStateReducer,
  PLAYER_STATE_LOADING,
  PLAYER_STATE_PLAYING,
  PLAYER_STATE_PAUSED,
  PLAYER_ACTION_ENABLE_CONTROLS,
  PLAYER_ACTION_JUMP_TO,
  PLAYER_ACTION_CLEAR_UPDATED_TIME
} from './helperPlayerStateReducer';

import { LoadingIcon } from '../../LoadingIcon';
import { VideoPlayerTime } from './VideoPlayerTime';
import { VideoProgressMeter } from './VideoProgressMeter';
import { PlayerStateTriggers } from './PlayerStateTriggers';
import { ChapterTriggers } from './ChapterTriggers';

interface Props {
  video: VideoProps;
};

export const VideoPlayer:React.FC<Props> = ({ video }) => {
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  const initialPlayerState = {
    playerState: PLAYER_STATE_LOADING,
    updatedTime: null
  };

  const initialDisplayData = {
    currentTime: 0,
    duration: 0
  };

  const [{ playerState, updatedTime }, dispatch] = useReducer(playerStateReducer, initialPlayerState);
  const [displayData, storeDisplayData] = useState<VideoDisplayDataProps>(initialDisplayData);

  useEffect(() => {
    const currentVideo = videoPlayerRef.current;
    if ( !!currentVideo ) {
      switch (playerState) {
        case PLAYER_STATE_LOADING: 
          currentVideo.addEventListener('loadedmetadata', () => {
            dispatch({ type: PLAYER_ACTION_ENABLE_CONTROLS });
          });
          return;
        case PLAYER_STATE_PLAYING: currentVideo.play(); return;
        case PLAYER_STATE_PAUSED: currentVideo.pause(); return;
      }
    }
  }, [playerState]);

  useEffect(() => {
    const currentVideo = videoPlayerRef.current;
    if ( !!currentVideo && updatedTime !== null ) {
      // TSTODO - why do I need that as number at the end? 
      currentVideo.currentTime = updatedTime as number; 
      dispatch({ type:PLAYER_ACTION_CLEAR_UPDATED_TIME });
    }
  }, [updatedTime]);

  useEffect(() => {
    const currentVideo = videoPlayerRef.current;
    if ( !!currentVideo ) {
      if ( currentVideo.ended ) { currentVideo.load(); }
      const timeout = setTimeout(() => {
        storeDisplayData({ 
          currentTime: currentVideo.currentTime,
          duration: currentVideo.duration 
        });
      }, 500);
      return () => { clearTimeout(timeout); }
    }
  }, [playerState, displayData]);

  const options: VideoPlayerOptionsProps = {
    src: video.src,
    autoPlay: video.autoPlay || false,
    poster: video.poster || ''
  };

  return (
    <>
      <video ref={videoPlayerRef} preload="auto" {...options} />

      <div className="cpanel">
        {playerState === PLAYER_STATE_LOADING && <LoadingIcon />}

        {playerState !== PLAYER_STATE_LOADING && (
          <>
            <VideoProgressMeter 
              displayData={displayData}
              updatePlayerTime={(updatedTime) => {
                dispatch({ type: PLAYER_ACTION_JUMP_TO, updatedTime:updatedTime });
              }}
            />

            <div className="control-bar">
              <span className="primary-controls">
                <PlayerStateTriggers
                  playerState={playerState}
                  updatePlayerState={(newPlayerState: VideoPlayerActionTypes) => {
                    dispatch({ type: newPlayerState });
                  }}
                />            

                <VideoPlayerTime videoRef={videoPlayerRef} />
              </span>

              {!!video.chapters && (
                <span className="chapter-triggers-wrapper">
                  <ChapterTriggers 
                    chapters={video.chapters}
                    currentTime={displayData.currentTime}
                    updatePlayerTime={(updatedTime) => {
                      dispatch({ type: PLAYER_ACTION_JUMP_TO, updatedTime:updatedTime });
                    }}
                  />
                </span>
              )}
            </div>
          </>
        )}
      </div>

      <div className="new-window-trigger">
        <span className="link" 
          onClick={() => { window.location.href = video.src; }}>
          {MSG_OPEN_IN_NEW_WINDOW}
        </span>
      </div>
      
      <style jsx global>{`
        :root {
          --video-icon-trigger-size: 1.5rem;
          --video-chapter-icon-triggers-width: 80px;
          --video-control-bar-spacer: 1rem;

          --video-cpanel-height: 3.75rem;
          --video-chapter-display-width: 200px;
          --video-chapter-flex-direction: row-reverse;
        }

        @media(max-width:630px) {
          :root {
            --video-cpanel-height: 6.5rem;
            --video-chapter-display-width: calc(100% - 30px);
            --video-chapter-flex-direction: column;  
          }
        }
      `}</style>

      <style jsx>{`
        video {
          width:100%;
          height:calc(100% - var(--video-cpanel-height));
          background:#000;
        }

        .cpanel {
          height:var(--video-cpanel-height);
          border-top:1px solid #ddd;
          transform:translateY(-6px);
          background:var(--color-dark-blue);
          color:var(--textcolor-inverted);
        }

        .cpanel :global(.loading-icon) {
          color:var(--textcolor-inverted);
        }

        .control-bar {
          display:flex;
          justify-content:space-between;
          padding:0 var(--video-control-bar-spacer);
        }

        .control-bar :global(.video-time),
        .control-bar :global(.dropdown dt) {
          font-size:var(--fontSize-bump);          
        }

        .control-bar :global(.player-controls) {
          display:inline-block;
          transform:translateY(.65rem);
        }

        .control-bar :global(.player-controls > span),
        .control-bar :global(.trigger-icon > span),
        .control-bar :global(.svg-inline--fa) {
          width:var(--video-icon-trigger-size);
          height:var(--video-icon-triggr-size);
          color:var(--textcolor-link);
        }

        .control-bar :global(.svg-inline--fa:hover) {
          color:var(--textcolor-inverted);
        }

        .primary-controls :global(.video-time) {
          display:inline-block;
          width:130px;
          transform:translateY(.2rem);
        }

        .primary-controls :global(> *:not(:last-child)) {
          margin-right:var(--video-control-bar-spacer);
        }

        .chapter-triggers-wrapper {
          display:flex;
          flex-direction:var(--video-chapter-flex-direction);
          align-items: flex-end;
          transform:translateY(.2rem);
        }

        .chapter-triggers-wrapper :global(.dropdown > dt) {
          text-align:right;
        }

        .chapter-triggers-wrapper :global(.dropdown dt span) {
          display:inline-block;
          width:var(--video-chapter-display-width);
          transform:translateY(.2rem);
        }

        .chapter-triggers-wrapper :global(.dropdown > dd) { 
          width:320px;
          box-shadow:0 0 10px #333;
          text-align:right;
        }
        
        .new-window-trigger {
          text-align:right;
          cursor:pointer;
        }

        @media(max-width:630px) {
          .control-bar {
            position:relative;
          }

          .primary-controls {
            position:absolute;
            z-index:10;
          }

          .chapter-triggers-wrapper {
            position:relative;
            z-index:9;
            width:100%;
            transform:translateY(.7rem);
          }

          .chapter-triggers-wrapper :global(.dropdown),
          .chapter-triggers-wrapper :global(.dropdown dt) {
            width:100%;
          }

          .chapter-triggers-wrapper :global(.dropdown) {
            transform:translateY(.4rem);
            border-top:1px solid #aaa;
          }
        }
      `}</style>
    </>
  );
};
