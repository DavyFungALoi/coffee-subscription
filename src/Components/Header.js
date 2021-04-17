import React from "react";
import logo from "../assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <div className="nav-container">
      <a href="/">
        <img className="logo" src={logo} alt={"logo"}></img>
      </a>
      <ul className="nav__list-container">
        <a href="/">
          <li>HOME</li>
        </a>
        <a href="/about">
          <li>ABOUT US</li>
        </a>
        <a href="/subscribe">
          <li>CREATE YOUR PLAN</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
