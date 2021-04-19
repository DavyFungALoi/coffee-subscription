import React from "react";
import blackcupheroimage from "../assets/plan/desktop/image-hero-blackcup.jpg";
import HowItworks from "../Components/HowItworks";

const SubscribeScreen = () => {
  return (
    <div>
      <div
        className="about-top-container"
        style={{ backgroundImage: `url(${blackcupheroimage})` }}
      >
        <div className="about-top-container__content">
          <h1> Create Plan</h1>
          <div className="about-top-container__micro-copy">
            Coffee the way you wanted it to be. For coffee delivered tomorrow,
            or next week. For whatever brew method you use. For choice, for
            convenience, for quality.
          </div>
        </div>
      </div>
      <div className="how-it-works-subscribe-container">
        <HowItworks screen="how-it-works-subscribeScreen"></HowItworks>
      </div>
    </div>
  );
};

export default SubscribeScreen;
