import React from "react";
import VideoCard from "./VideoCard.js";
import "../styles/Videos.css";
const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((item, index) => (
        <VideoCard index={index} image={item.image} key={item.image} />
      ))}
    </div>
  );
};

export default Videos;
