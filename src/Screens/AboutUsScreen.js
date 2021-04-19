import React from "react";
import whitecupheroimage from "../assets/about/desktop/image-hero-whitecup.jpg";
import barristaimage from "../assets/about/desktop/image-commitment.jpg";
import latteartimage from "../assets/about/desktop/image-quality.jpg";
import unitedkingdomsilhouette from "../assets/about/desktop/illustration-uk.svg";
import australiasilhouette from "../assets/about/desktop/illustration-australia.svg";
import canadasilhouette from "../assets/about/desktop/illustration-canada.svg";
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
      </div>
      <div className="commitement-container">
        <img src={barristaimage} alt={"barissta"}></img>
        <div>
          <h4>Our commitment</h4>
          <div className="commitement-container__content">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </div>
        </div>
      </div>
      <div className="quality-container">
        <div className="quality-container__content">
          <h4>Uncompromising quality</h4>
          <div className="quality-container__copy">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </div>
        </div>
        <img src={latteartimage} alt={"latte-art-quality"}></img>
      </div>

      <div className="location-container">
        <h4>Our headquarters</h4>
        <div className="location-container__location-list">
          <div className="location-container__location">
            <img
              src={unitedkingdomsilhouette}
              alt={"unitedkingdom-silhouette"}
            ></img>
            <h3>United Kingdom</h3>
            <div className="location-container__contactinfo">
              68 Asfordby Rd Alcaston SY6 1YA
              <div className="location-container__phone-number">
                +44 1241 918425
              </div>
            </div>
          </div>
          <div className="location-container__location">
            <img src={canadasilhouette} alt={"canada-silhouette"}></img>
            <h3>Canada</h3>
            <div className="location-container__contactinfo">
              1528 Eglinton Avenue Toronto Ontario M4P 1A6
              <div className="location-container__phone-number">
                +1 416 485 2997
              </div>
            </div>
          </div>
          <div className="location-container__location">
            <img src={australiasilhouette} alt={"australia-silhouette"}></img>
            <h3>Australia</h3>
            <div className="location-container__contactinfo">
              36 Swanston Street Kewell Victoria
              <div className="location-container__phone-number">
                +61 4 9928 3629
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
