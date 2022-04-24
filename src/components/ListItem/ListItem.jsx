import React, { useState } from "react";
import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/516291142.sd.mp4?s=e3bdc478ae17512102dab118c7c6c712a42dbe00&profile_id=139&oauth2_token_id=57447761";
  return (
    <Link to="/VideoPlayer">
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
          alt=""
        />
        {isHovered && (
          <div>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Jumanji: Welcome to the Jungle is a 2017 American fantasy
                adventure comedy film directed by Jake Kasdan and starring
                Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan, Nick
                Jonas, and Bobby Cannavale.
              </div>
              <div className="genre">Action</div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default ListItem;
