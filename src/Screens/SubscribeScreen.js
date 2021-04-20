import React from "react";
import blackcupheroimage from "../assets/plan/desktop/image-hero-blackcup.jpg";
import HowItworks from "../Components/HowItworks";
import SubScriptionCards from "../Components/SubscriptionCards";
import subscribeData from "../assets/subscriptionData";
import { useState } from "react";

const SubscribeScreen = () => {
  const howDrinkCoffeeQuestion = subscribeData[0];
  const typeCoffeeQuestion = subscribeData[1];
  const howMuchCoffeeQuestion = subscribeData[2];
  const grindCoffeeQuestion = subscribeData[3];
  const howOftenCoffeeQuestion = subscribeData[4];

  const [questionAnswer, setQuestionAnswer] = useState({
    howDrinkCoffee: "...",
    typeCoffee: "...",
    howMuchCoffee: "...",
    grindCoffee: "...",
    howOftenCoffee: "...",
  });

  const selectHandler = (title, questionId) => {
    switch (questionId) {
      case 1:
        const updatehowDrinkCoffee = {
          ...questionAnswer,
          howDrinkCoffee: title,
        };
        setQuestionAnswer(updatehowDrinkCoffee);
        break;
      case 2:
        const updateTypeCoffee = { ...questionAnswer, typeCoffee: title };
        setQuestionAnswer(updateTypeCoffee);
        break;
      case 3:
        const updateHowMuchCoffee = { ...questionAnswer, howMuchCoffee: title };
        setQuestionAnswer(updateHowMuchCoffee);
        break;
      case 4:
        const updateGrindCoffee = { ...questionAnswer, grindCoffee: title };
        setQuestionAnswer(updateGrindCoffee);
        break;
      case 5:
        const updateHowOftenCoffee = {
          ...questionAnswer,
          howOftenCoffee: title,
        };
        setQuestionAnswer(updateHowOftenCoffee);
        break;
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
            questionAnswer={questionAnswer}
            key={howDrinkCoffeeQuestion.id}
            question={howDrinkCoffeeQuestion.question}
            choices={howDrinkCoffeeQuestion.choices}
            questionId={howDrinkCoffeeQuestion.id}
          ></SubScriptionCards>
          <SubScriptionCards
            selectHandler={selectHandler}
            questionAnswer={questionAnswer}
            key={typeCoffeeQuestion.id}
            question={typeCoffeeQuestion.question}
            choices={typeCoffeeQuestion.choices}
            questionId={typeCoffeeQuestion.id}
          ></SubScriptionCards>
          <SubScriptionCards
            questionAnswer={questionAnswer}
            selectHandler={selectHandler}
            key={howMuchCoffeeQuestion.id}
            question={howMuchCoffeeQuestion.question}
            choices={howMuchCoffeeQuestion.choices}
            questionId={howMuchCoffeeQuestion.id}
          ></SubScriptionCards>
          <SubScriptionCards
            questionAnswer={questionAnswer}
            selectHandler={selectHandler}
            key={grindCoffeeQuestion.id}
            question={grindCoffeeQuestion.question}
            choices={grindCoffeeQuestion.choices}
            questionId={grindCoffeeQuestion.id}
          ></SubScriptionCards>
          <SubScriptionCards
            questionAnswer={questionAnswer}
            selectHandler={selectHandler}
            key={howOftenCoffeeQuestion.id}
            question={howOftenCoffeeQuestion.question}
            choices={howOftenCoffeeQuestion.choices}
            questionId={howOftenCoffeeQuestion.id}
          ></SubScriptionCards>
          <div className="order-summary-container">
            <div className="order-summary__header">Order Summary</div>
            <div className="order-summary__content">
              “I drink my coffee as
              <span>{` ${questionAnswer.howDrinkCoffee}`}</span>, with a
              <span>{` ${questionAnswer.typeCoffee}`} </span>type of bean.
              <span>{`  ${questionAnswer.howMuchCoffee}`}</span> ground ala
              <span>{` ${questionAnswer.grindCoffee}`}</span>, sent to me
              <span>{` ${questionAnswer.howOftenCoffee}`}</span>.”
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          className="btn"
          onClick={() => {
            testHandler();
          }}
        >
          TEST
        </button>
      </div>
    </div>
  );
};

export default SubscribeScreen;

/*
  howDrinkCoffee: "",
    typeCoffee: "",
    howMuchCoffee: "",
    grindCoffee: "",
    howOftenCoffee: "",
*/
