import React, { useState, useEffect } from "react";
import axios from "../../data/axios";
import requests from "../../data/requests";
import Navbar from "./Navbar";
import Banner from "./Banner";
import style from "./Header.module.css";

function Header() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header
      className={style.header}
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(37,37,37,0.61) 10%, transparent 30%, rgba(37,37,37,0.61) 80%, rgba(17,17,17,1) 100%), url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <Navbar />
      <Banner movie={movie} />
    </header>
  );
}

export default Header;
