import React from 'react';
import YouTube from 'react-youtube';
import './Player.css';

const Player = ({ videoId, onClose }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return (
    <div className="player-wrapper">
      <div className="player-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default Player;
