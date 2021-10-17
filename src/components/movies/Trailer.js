import React from "react";
import Youtube from "react-youtube";
import style from "./Trailer.module.css";

function Trailer({ trailerUrl }) {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className={style.container}>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Trailer;
