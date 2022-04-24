import { ArrowBack } from "@mui/icons-material";
import React from "react";
import "./videoplayer.scss";
import { Link } from "react-router-dom";

function VideoPlayer() {
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBack className="arrow" />
          Home
        </div>
      </Link>
      <video
        autoPlay
        progress
        controls
        className="video"
        src="https://player.vimeo.com/external/463981947.sd.mp4?s=d26b6d57e51f8ac891e39776ed5c524308b18ce7&profile_id=139&oauth2_token_id=57447761"
      />
    </div>
  );
}

export default VideoPlayer;
