import React, { useState, useEffect } from "react";
// because is a default export can rename it
import axios from "../../data/axios";
import style from "./Row.module.css";
import movieTrailer from "movie-trailer";
import Trailer from "./Trailer";

const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // snippet of code witch runs based on specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  // console.log(movies);
  // console.table(movies);

  const playTrailerHandler = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // console.log(movie);
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={style.row}>
      <h2 className={style.row__title}>{title}</h2>
      <div className={style.row__posters}>
        {movies.map((movie) => {
          return (
            <img
              onClick={() => {
                playTrailerHandler(movie);
              }}
              key={movie.id}
              className={style.row__poster}
              src={`${base_url}${movie.backdrop_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
      <Trailer trailerUrl={trailerUrl} />
    </div>
  );
}

export default Row;
