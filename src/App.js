import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import Playlist from './components/Playlist';
import Player from './components/Player';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [playlist, setPlaylist] = useState(() => {
    const saved = localStorage.getItem('playlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentVideo, setCurrentVideo] = useState(null);

  const searchVideos = async (term) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: term,
          key: API_KEY,
          maxResults: 20,
          type: 'video',
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error('YouTube API error:', error);
    }
  };

  const addToPlaylist = (video) => {
    if (!playlist.some((v) => v.id.videoId === video.id.videoId)) {
      const updated = [...playlist, video];
      setPlaylist(updated);
      localStorage.setItem('playlist', JSON.stringify(updated));
    }
  };

  const removeFromPlaylist = (videoId) => {
    const updated = playlist.filter((v) => v.id.videoId !== videoId);
    setPlaylist(updated);
    localStorage.setItem('playlist', JSON.stringify(updated));
    if (currentVideo?.id.videoId === videoId) {
      setCurrentVideo(null);
    }
  };

  const playVideo = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="container-fluid bg-light p-5" style={{ height: '100vh', overflow: 'hidden' }}>
      <div className="row h-100">

        {/* Left side */}
        <div className="col-md-5 d-flex flex-column h-100">
          <SearchBar onSearch={searchVideos} />
          <div
            className="border rounded p-3 bg-white mt-2"
            style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}
          >
            <VideoList videos={videos} onAdd={addToPlaylist} />
          </div>
        </div>

        {/* Right side */}
        <div className="col-md-7 d-flex flex-column h-100">
          <div
            className="mb-3 border rounded p-3 bg-white"
            style={{ height: '1000px', overflow: 'hidden' }}
          >
            {currentVideo ? (
              <>
                <h3 className='py-2'>Now Playing</h3>
                <Player video={currentVideo} />
              </>
            ) : (
              <div className="text-center text-muted my-5">
                Select a video to play from playlist!
              </div>
            )}
          </div>
          <div>
            <h3 className='py-2 sticky-top'>Your Playlist</h3>
          </div>
          <div
            className="flex-grow-1 overflow-auto border rounded p-3 bg-white"
            style={{ minHeight: 0 }}
          >
            <Playlist playlist={playlist} onRemove={removeFromPlaylist} onPlay={playVideo} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;