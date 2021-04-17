import React from "react";
import coffeeheroimage from "../assets/home/desktop/image-hero-coffeepress.jpg";

const HomeScreen = () => {
  return (
    <div
      className="intro-container"
      style={{ backgroundImage: `url(${coffeeheroimage})` }}
    >
      <div className="intro-container__content">
        <h1> Great Coffee made simple.</h1>
        <div className="intro-container__micro-copy">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </div>
        <a href="/subscribe">
          <button className="btn">Create your plan</button>
        </a>
      </div>
    </div>
  );
};

export default HomeScreen;
