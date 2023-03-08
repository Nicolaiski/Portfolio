import React from "react";
import ReactPlayer from "react-player";
import styles from '../CONSTANT/style';

const VideoPlayer = () => {
  return (

    <div >
    < ReactPlayer 
 
    
    url="https://www.dropbox.com/s/uzdljooxt2rkfsa/StopMotion2.MP4?dl=0"
      width="100%"
      height="100%"
      controls
    
      
    />
    </div>
  );
};

export default VideoPlayer;