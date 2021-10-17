import React from "react";
import requests from "../../data/requests";
import Row from "../movies/Row";
import playBtn from "../../assets/play-solid.svg";

import style from "./Banner.module.css";

function Banner({ movie }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className={style.banner}>
      <div className={style.banner__contents}>
        <h1 className={style.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className={style.banner__description}>
          {truncate(movie?.overview, 150)}
        </p>
        <div className={style.banner__btns}>
          <button className={`${style.banner__btn} ${style.banner__btnPlay}`}>
            <img
              className={style.banner__btnIcon}
              src={playBtn}
              alt="Play button"
            />{" "}
            <span className={style.banner__btnText}>Play</span>
          </button>
          <button className={`${style.banner__btn} ${style.banner__btnInfo}`}>
            My List
          </button>
        </div>
        <div className={style.banner__row}>
          <Row title="New Releases" fetchURL={requests.fetchNetflixOriginals} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
