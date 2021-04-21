import React, { useState, useLayoutEffect } from "react";
import logo from "../assets/shared/desktop/logo.svg";
import hamBurgerMenu from "../assets/shared/mobile/icon-hamburger.svg";
import closeMenu from "../assets/shared/mobile/icon-close.svg";
import MobileMenuHandler from "./ScrollBlockHandler";
import ScrollBlockHandler from "./ScrollBlockHandler";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const openHamburgerHandler = () => {
    setMenuState((prevDisplayState) => !prevDisplayState);
  };

  const displayState = {
    display: "flex",
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

      <ul style={menuState ? displayState : {}} className="nav__list-container">
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
      {menuState ? <ScrollBlockHandler /> : <></>}
    </div>
  );
};

export default Header;
