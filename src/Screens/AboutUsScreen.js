import React from "react";
import whitecupheroimage from "../assets/about/desktop/image-hero-whitecup.jpg";

const AboutUsScreen = () => {
  return (
    <div>
      <div
        className="about-container"
        style={{ backgroundImage: `url(${whitecupheroimage})` }}
      >
        <div className="about-container__content">
          <h1> About us</h1>
          <div className="about-container__micro-copy">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
