import React from "react";
import ReactPlayer from "react-player";
import styles from '../CONSTANT/style';

const VideoPlayer= () => {
  return (

    <div >
    < ReactPlayer 
 
    
    url="https://www.dropbox.com/s/ywkxnthj77heyf2/POLPO.mp4?dl=0"
      width="100%"
      height="100%"
      controls
    
      
    />
    </div>
  );
};

export default VideoPlayer;