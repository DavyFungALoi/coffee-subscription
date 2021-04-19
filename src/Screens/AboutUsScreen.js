import React from "react";
import whitecupheroimage from "../assets/about/desktop/image-hero-whitecup.jpg";
import barristaimage from "../assets/about/desktop/image-commitment.jpg";
const AboutUsScreen = () => {
  return (
    <div>
      <div
        className="about-top-container"
        style={{ backgroundImage: `url(${whitecupheroimage})` }}
      >
        <div className="about-top-container__content">
          <h1> About us</h1>
          <div className="about-top-container__micro-copy">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </div>
        </div>
        <div className="commitement-container">
          <img className="logo" src={barristaimage} alt={"barissta"}></img>
          <div>
            <h4>Our comittement</h4>
            <div>
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
