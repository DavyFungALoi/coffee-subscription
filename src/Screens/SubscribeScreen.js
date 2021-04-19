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
        <div className="subscription-container__step-tracking-container"></div>
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
