// context/MusicPlayerContext.tsx
import React, { createContext, useReducer, useContext } from 'react';

type State = {
  isPlaying: boolean;
  progress: number;
  // Add any other states that you need
};

type Action = 
  | { type: 'PLAY' }
  | { type: 'PAUSE' }
  | { type: 'SET_PROGRESS', payload: number };

const MusicPlayerStateContext = createContext<State | undefined>(undefined);
const MusicPlayerDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

function musicPlayerReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'PLAY':
      return { ...state, isPlaying: true };
    case 'PAUSE':
      return { ...state, isPlaying: false };
    case 'SET_PROGRESS':
      return { ...state, progress: action.payload };
    default:
      throw new Error('Unhandled action');
  }
}

export function MusicPlayerProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(musicPlayerReducer, { isPlaying: false, progress: 0 });
  
  return (
    <MusicPlayerDispatchContext.Provider value={dispatch}>
      <MusicPlayerStateContext.Provider value={state}>
        {children}
      </MusicPlayerStateContext.Provider>
    </MusicPlayerDispatchContext.Provider>
  );
}

export function useMusicPlayerState() {
  const state = useContext(MusicPlayerStateContext);
  if (!state) throw new Error('MusicPlayerProvider not found');
  return state;
}

export function useMusicPlayerDispatch() {
  const dispatch = useContext(MusicPlayerDispatchContext);
  if (!dispatch) throw new Error('MusicPlayerProvider not found');
  return dispatch;
}
