import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media" />
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
    </li>
  );
};

export default VideoListItem;

/* By passing {video} as an argument, it's equivalent to:
 * const video = props.video
 * It automatically declares a variable video, and assigns it props.video.
 * We can do it twice with onVideoSelect!
 */