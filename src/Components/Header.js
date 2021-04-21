import React from "react";
import logo from "../assets/shared/desktop/logo.svg";
import hamBurgerMenu from "../assets/shared/mobile/icon-hamburger.svg";
import closeMenu from "../assets/shared/mobile/icon-close.svg";

const Header = () => {
  const openHamburgerHandler = () => {
    console.log("hamburger");
  };
  return (
    <div className="nav-container">
      <a href="/">
        <img className="logo" src={logo} alt={"logo"}></img>
      </a>
      <div
        className="nav-container__hamburger"
        onClick={() => {
          openHamburgerHandler();
        }}
      >
        <img className="menu" src={hamBurgerMenu} alt={"menu"}></img>
      </div>

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
