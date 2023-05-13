import React, { ReactNode, useEffect, useRef } from 'react';
import { useMusicPlayerState, useMusicPlayerDispatch } from '../../context/MusicPlayerContext';

interface MusicPlayerProps {
  children: ReactNode;
}

const MusicPlayer = ({ children }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isPlaying, progress } = useMusicPlayerState();
  const dispatch = useMusicPlayerDispatch();

  const togglePlay = () => {
    if (isPlaying) {
      dispatch({ type: 'PAUSE' });
    } else {
      dispatch({ type: 'PLAY' });
    }
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  useEffect(() => {
    dispatch({ type: 'PLAY' });
  }, [dispatch]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    console.log("am i operating?")
    const interval = setInterval(() => {
      if (audioRef.current) {
        const newProgress = audioRef.current.currentTime / audioRef.current.duration;
        dispatch({ type: 'SET_PROGRESS', payload: isNaN(newProgress) ? 0 : newProgress });
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="wrapper_ea" tabIndex={0} style={{position: 'fixed', width: '100%', zIndex: 1000}}>
      <audio 
        ref={audioRef} 
        id="mytrack" 
        src='/audio/03_Lil_9ap,_nowimyoung,_SUDO_BEAM_!_BEAM_!_Mastered.mp3'
        onCanPlay={() => dispatch({ type: 'PLAY' })}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            const newProgress = audioRef.current.currentTime / audioRef.current.duration;
            dispatch({ type: 'SET_PROGRESS', payload: isNaN(newProgress) ? 0 : newProgress });
          }
        }}
      >
        <strong>Your browser does not support the audio element.</strong>
      </audio>
      <nav id="navbar_ea" dir="ltr" tabIndex={-1} role="tabpanel">
        <div id="deafultBar" role="application" tabIndex={-1}>
          <div id="progressBar" role="application" tabIndex={-1} style={{ width: `${progress * 100}%` }} />
        </div>
        <div id="buttons" role="tabpanel" tabIndex={0}>
          <button type="button" id="playButton" aria-label="Play/pause" tabIndex={0} role="button" onClick={togglePlay}></button>
          <button type="button" id="muteButton" aria-label="mute/unmute" tabIndex={0} role="button" onClick={toggleMute}></button>
          <div id="songInfo">
          <a href="https://www.youtube.com/watch?v=pSqzpokGoug" target="_blank" rel="noopener noreferrer" style={{color: 'blue', textDecoration: 'underline'}}>
              <p>Lil 9ap x NOWIMYOUNG x SUDO - BEAM!</p>
            </a>
          </div>
        </div>
      </nav>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
      }
      body{
          background-color: #101010;
      }
      #wrapper_ea{
          max-width: auto;
          margin: 0px;
      }
      #navbar_ea {
          --color-buttons-background: white;
          --height-button: 32;
          --width-button: 32;
          --padding-navbar_ea: 3px;
          --bar-time-size-font: 20 px;
          --max-width-img-audio: 520px;
          --height-img-audio: 280px;
          --height-deafultBar: 15;
          --height-top-buttons: 2;
          --height-navbar_ea: calc(var(--height-button) + var(--height-deafultBar));
          --height-navbar_ea_px: 47px;

          background-color: var(--color-buttons-background);
          padding-bottom: var(--padding-navbar_ea);
          opacity: 1;
          height: var(--height-navbar_ea_px);
          transition-property: all;
          transition-duration: 1.5s;
      }

      #deafultBar{
          max-width: auto;
          position: relative; 
          background-color: #606060;
          height: 15px;
      }

      #progressBar{
          position: absolute;
          height: 15px;
          
          background-color: blue;
          width: 0px;
      }

      #muteButton {
        border: none;
        height: calc(var(--height-button)*1px);
        width: calc(var(--width-button)*1px);
        background-color: var(--color-buttons-background);
        background-repeat: no-repeat;
        background-position: center;
        margin-left: 5px; /* 이 줄을 추가하세요. 원하는 간격으로 조정하세요. */
     }

      #fullscreennormal,

      #playButton {
          border: none;
          height: calc(var(--height-button)*1px);
          width: calc(var(--width-button)*1px);
          background-color: var(--color-buttons-background);
          background-repeat: no-repeat;
          background-position: center;
      }

      #muteButton:active,
      #fullscreennormal:active,
      #playButton:active {
          position: relative;
          top: calc(var(--height-top-buttons) * 1px);
      }

      #muteButton:hover,
      #fullscreennormal:hover,
      #playButton:hover {
          box-shadow: 0 0 10px blue;
      }

      #playButton {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26'%3E%3Cpolygon class='div_play' points='4,22 4,4 22,14 ' id='div_play'/%3E play %3C/svg%3E%0A");
      }

      #muteButton {
          background-image: url('data:image/svg+xml,%3C%3Fxml version="1.0" encoding="UTF-8"%3F%3E%3C!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"%3E%3Csvg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="26px" height="26px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"%0AviewBox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink"%3E%3Cg%3E%3Crect fill="black" stroke="black" stroke-width="0.999273" x="2" y="8" width="3.00018" height="10.001"/%3E%3Cpath fill="black" fill-rule="nonzero" stroke="black" stroke-width="1.00045" d="M8 19l0 -11 7 -5 0 21 -7 -5zm0 -6m3 -8m4 8m-4 8"/%3E%3Cpath fill="black" fill-rule="nonzero" d="M19 6c3,1 5,4 5,7 0,4 -3,8 -6,8 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 3,-1 5,-3 5,-7 0,-3 -2,-5 -4,-6 0,-1 0,-1 0,-1 0,0 0,0 0,0z"/%3E%3Cpath fill="black" fill-rule="nonzero" stroke="black" stroke-width="1.00045" d="M19 11c1,0 2,1 2,2 0,2 -1,3 -3,3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 2,-1 2,-3 0,-1 0,-1 -1,-2 0,0 0,0 0,0 0,0 0,0 0,0z"/%3E%3C/g%3E%3C/svg%3E%0A');
      }
      #buttons {
          display: flex;
          flex-wrap: wrap;
      }
      .bar_start{
          display: flex;
      }
      .pbaslidecontainer {
          width: 60px;
          display: flex;
          align-items: center;
      }

      .pbaSlider:hover{
          box-shadow: 0 0 10px blue; 
      }

      .pbaSlider {
          -webkit-appearance: none;
          width: 100%;
          height: 15px;
          border-radius: 5px;
          background: #d3d3d3;
          outline: none;
          opacity: 0.7;
          -webkit-transition: .2s;
          transition: opacity .2s;
      }

      .pbaSlider:hover {
          opacity: 1;
      }

      .pbaSlider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
      }

      .pbaSlider::-moz-range-thumb {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
      }
      .pbaslidecontainer {
          width: 60px;
          display: flex;
          align-items: center;
      }

      .pbaSlider:hover{
          box-shadow: 0 0 10px blue; 
      }
      .time-audio {
          font-family: "Times New Roman", Times, serif;
          text-align: center;
          vertical-align: middle;
          line-height: normal;
          font-size: 20px;
          display: -webkit-flex; /* Safari */
          -webkit-align-items: center; /* Safari 7.0+ */
          display: flex;
          align-items: center;
          padding-left: 10px;
      }
      #songInfo {
        margin-left: 10px; /* 간격을 원하는대로 조정하세요. */
        display: flex;
        flex-direction: column;
        justify-content: center;
        color : black;
      }
      #songInfo p {
        margin: 0;
      }

      `}</style>
            {children}
    </div>
  );
};

export default MusicPlayer
