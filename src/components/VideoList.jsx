import React from 'react';

const VideoList = ({ videos, onAdd }) => {
  if (videos.length === 0) return <p>No videos found. Search something!</p>;

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId} className="card mb-2">
          <div className="row g-0 align-items-center">
            <div className="col-4">
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-8">
              <div className="card-body p-2">
                <h6 className="card-title text-truncate" title={video.snippet.title}>
                  {video.snippet.title}
                </h6>
                <button
                  onClick={() => onAdd(video)}
                  className="btn btn-sm btn-outline-primary"
                >
                  Add to Playlist
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
