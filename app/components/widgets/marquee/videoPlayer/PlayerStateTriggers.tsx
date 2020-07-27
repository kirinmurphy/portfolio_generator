import React from 'react';

import { PlayerStateTrigger } from './PlayerStateTrigger';
import { VideoPlayerActionTypes, PlayerStateType } from '../../../types/widgets';
import { 
  PLAYER_STATE_PLAYING, 
  PLAYER_ACTION_PLAY,
  PLAYER_ACTION_PAUSE,
} from './helperPlayerStateReducer';

interface Props {
  playerState: PlayerStateType;
  updatePlayerState: (arg0: VideoPlayerActionTypes) => void;
}

export function PlayerStateTriggers ({ playerState, updatePlayerState }: Props): JSX.Element {
  return (
    <span className="player-controls">
      {playerState !== PLAYER_STATE_PLAYING && (
        <PlayerStateTrigger 
          trigger={() => { updatePlayerState(PLAYER_ACTION_PLAY); }}
          icon={['fas', 'play']}
        />
      )}

      {playerState === PLAYER_STATE_PLAYING && (
        <PlayerStateTrigger 
          trigger={() => { updatePlayerState(PLAYER_ACTION_PAUSE); }} 
          icon={['fas', 'pause']}
        />
      )}
    </span>
  );
}
