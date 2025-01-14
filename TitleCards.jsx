import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { YOUTUBE_API_KEY, YOUTUBE_BASE_URL } from './config';
import Player from './Player';
import './TitleCards.css';

const TitleCards = ({ title, image }) => {
  const [videoId, setVideoId] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);

  const fetchTrailer = async () => {
    try {
      const response = await axios.get(`${YOUTUBE_BASE_URL}/search`, {
        params: {
          key: YOUTUBE_API_KEY,
          q: `${title} trailer`,
          part: 'snippet',
          maxResults: 1,
          type: 'video'
        }
      });
      setVideoId(response.data.items[0].id.videoId);
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  const handlePlay = () => {
    if (!videoId) {
      fetchTrailer();
    }
    setShowPlayer(true);
  };

  return (
    <div className="title-card">
      <img src={image} alt={title} onClick={handlePlay} />
      <div className="title-info">
        <h3>{title}</h3>
        <button onClick={handlePlay}>Play Trailer</button>
      </div>
      {showPlayer && videoId && (
        <Player 
          videoId={videoId} 
          onClose={() => setShowPlayer(false)} 
        />
      )}
    </div>
  );
};

export default TitleCards;


export default TitleCards;
