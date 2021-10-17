import React, { useState, useEffect } from "react";
import netflixLogo from "../../assets/Netflix_logo.svg";
import profileAvatar from "../../assets/avatar.png";
import style from "./Navbar.module.css";

function Navbar() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`${style.nav} ${showHeader && style.nav__dark}`}>
      <div className={style.nav__content}>
        <img className={style.nav__img} src={netflixLogo} alt="Logo" />
        <ul className={style.nav__list}>
          <li className={style.nav__link}>Home</li>
          <li className={style.nav__link}>Movies</li>
          <li className={style.nav__link}>New & popular</li>
          <li className={style.nav__link}>My List</li>
        </ul>
      </div>

      <div className={style.nav__content}>
        <img
          className={style.nav__img}
          src={profileAvatar}
          alt="Profile Avatar"
        />
      </div>
    </nav>
  );
}

export default Navbar;
