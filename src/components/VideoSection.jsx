import React from "react";
import video from "../assets/video1.mp4"
const VideoSection = () => {
  return (
    <div className="w-full h-full flex justify-center items-center   ">
      <video 
        src={video}
        controls
        autoPlay
        muted
        loop
        className="w-full h-full shadow-lg object-cover"
      />
    </div>
  );
};

export default VideoSection;
