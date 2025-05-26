import React from 'react';

const Playlist = ({ playlist, onRemove, onPlay }) => {
  if (playlist.length === 0) return <p>Your playlist is empty. Add some videos!</p>;

  return (
    <ul className="list-group">
      {playlist.map((video) => (
        <li
          key={video.id.videoId}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            role="button"
            onClick={() => onPlay(video)}
            style={{ cursor: 'pointer', flex: 1 }}
            title={video.snippet.title}
          >
            ▶ {video.snippet.title}
          </span>
          <button
            onClick={() => onRemove(video.id.videoId)}
            className="btn btn-sm btn-danger ms-2"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Playlist;
