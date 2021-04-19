import React from "react";
import blackcupheroimage from "../assets/plan/desktop/image-hero-blackcup.jpg";
import HowItworks from "../Components/HowItworks";
import SubScriptionCards from "../Components/SubscriptionCards";
import subscribeData from "../assets/subscriptionData";

const SubscribeScreen = () => {
  console.log(subscribeData[0]);

  const question1 = subscribeData[0];
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
      <div className="subscription-container">
        <div className="subscription-container__step-tracking-container">
          <div className="subscription-container__step-track">
            <h4>01</h4>
            <h4>Preferences</h4>
          </div>
          <div className="subscription-container__step-track">
            <h4>02</h4>
            <h4>Bean Type</h4>
          </div>
          <div className="subscription-container__step-track">
            <h4>03</h4>
            <h4>Quantity</h4>
          </div>
          <div className="subscription-container__step-track">
            <h4>04</h4>
            <h4>Grind Option</h4>
          </div>
          <div className="subscription-container__step-track">
            <h4>05</h4>
            <h4>Deliveries</h4>
          </div>
        </div>
        <div className="subscription-container__step-container">
          <SubScriptionCards
            key={question1.id}
            question={question1.question}
            choices={question1.choices}
          ></SubScriptionCards>
        </div>
      </div>
    </div>
  );
};

export default SubscribeScreen;
