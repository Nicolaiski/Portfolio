import React from "react";
import ReactPlayer from "react-player";
import styles from '../CONSTANT/style';

const VideoPlayer= () => {
  return (

    <div className=" flex mt-[-500px] ml-[-0px]">
    < ReactPlayer 
 
    
    url="https://www.dropbox.com/s/ywkxnthj77heyf2/POLPO.mp4?dl=0"
      width="50%"
      height="50%"
      controls
    
      
    />
    </div>
  );
};

export default VideoPlayer;