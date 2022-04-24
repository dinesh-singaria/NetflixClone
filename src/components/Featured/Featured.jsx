import React from "react";
import "./featured.scss";
import PlayArrow from "@mui/icons-material/PlayArrow";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img src="https://images4.alphacoders.com/888/888349.jpg" alt=" " />

      <div className="info">
        <img
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-47fe/k2-_342aaa48-af19-42fe-9e49-011640e63ddb.v1.jpg?odnWidth=1360&odnHeight=410&odnBg=ffffff"
          alt=""
        />
        <span className="desc">
          Jumanji: Welcome to the Jungle is a 2017 American fantasy adventure
          comedy film directed by Jake Kasdan, co-written by Chris McKenna, Erik
          Sommers, Scott Rosenberg, and Jeff Pinkner, and starring Dwayne
          Johnson, Jack Black, Kevin Hart, Karen Gillan, Nick Jonas, and Bobby
          Cannavale.
        </span>
        <div className="buttons">
          <Link to="/VideoPlayer" className="link">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>

          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
