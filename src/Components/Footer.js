import React from "react";
import logowhite from "../assets/shared/desktop/logo-white.svg";
import facebookicon from "../assets/shared/desktop/icon-facebook.svg";
import twittericon from "../assets/shared/desktop/icon-twitter.svg";
import instagramicon from "../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="/">
        <img className="logo" src={logowhite} alt={"logo"}></img>
      </a>
      <ul className="footer__list-container">
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
      <ul className="footer__social-media-container">
        <a href="/">
          <img className="logo" src={facebookicon} alt={"logo"}></img>
        </a>
        <a href="/">
          <img className="logo" src={twittericon} alt={"logo"}></img>
        </a>
        <a href="/">
          <img className="logo" src={instagramicon} alt={"logo"}></img>
        </a>
      </ul>
    </div>
  );
};

export default Footer;
