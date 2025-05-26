import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Player = ({ video }) => {
  if (!video) return null;

  const url = `https://www.youtube.com/watch?v=${video.id.videoId}`;

  return (
    <div className="h-100">
      <ReactPlayer url={url} controls width="100%" height="100%" />
    </div>
  );
};

export default Player;
