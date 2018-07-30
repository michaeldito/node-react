import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;

/* This component does not have a need for state, as it will not record user
 * interaction or render itself in any fashion, so we can just make it a functional
 * component.
 * 
 * props: the data passed down from VideoList's parent, App.
 * key: make sure react can update the appropriate record with it's unqiue id.
 */