import React from "react";
import blackcupheroimage from "../assets/plan/desktop/image-hero-blackcup.jpg";
import HowItworks from "../Components/HowItworks";
import SubScriptionCards from "../Components/SubscriptionCards";
import subscribeData from "../assets/subscriptionData";
import { useState } from "react";

const SubscribeScreen = () => {
  const question1 = subscribeData[0];
  const question2 = subscribeData[1];

  const [question1Answer, setQuestion1Answer] = useState();
  const [question2Answer, setQuestion2Answer] = useState();
  const [questionAnswer, setQuestionAnswer] = useState({
    question1: "",
    question2: "",
  });

  const selectHandler = (title, questionId) => {
    //  setQuestion1Answer({ title });
    switch (questionId) {
      case 1:
        const updatedquestion = { ...questionAnswer, question1: title };

        setQuestionAnswer(updatedquestion);
        break;
      case 2:
        const updatedquestion2 = { ...questionAnswer, question2: title };
        setQuestionAnswer(updatedquestion2);
    }
  };

  const testHandler = () => {
    console.log(questionAnswer);
  };
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
            selectHandler={selectHandler}
            key={question1.id}
            question={question1.question}
            choices={question1.choices}
            questionId={question1.id}
          ></SubScriptionCards>
          <SubScriptionCards
            selectHandler={selectHandler}
            key={question2.id}
            question={question2.question}
            choices={question2.choices}
            questionId={question2.id}
          ></SubScriptionCards>
        </div>
      </div>
      <button
        onClick={() => {
          testHandler();
        }}
      >
        TEST
      </button>
      <div>{questionAnswer.question1}</div>
      <div>{questionAnswer.question2}</div>
    </div>
  );
};

export default SubscribeScreen;
