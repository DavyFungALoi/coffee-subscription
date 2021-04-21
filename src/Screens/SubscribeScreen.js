import React, { useEffect } from "react";
import blackcupheroimage from "../assets/plan/desktop/image-hero-blackcup.jpg";
import HowItworks from "../Components/HowItworks";
import SubScriptionCards from "../Components/SubscriptionCards";
import subscribeData from "../assets/subscriptionData";
import { useState } from "react";
import OrderSummaryModel from "../Components/OrderSummaryModel";

const SubscribeScreen = () => {
  const [questionAnswer, setQuestionAnswer] = useState({
    howDrinkCoffee: "...",
    typeCoffee: "...",
    howMuchCoffee: "...",
    grindCoffee: "...",
    howOftenCoffee: "...",
  });

  const orderSummaryHandler = () => {
    setOrderSummaryState((prevDisplayState) => !prevDisplayState);
  };
  const [orderSummaryState, setOrderSummaryState] = useState(false);
  const [orderSummaryButtonState, setOrderSummaryButtonState] = useState(true);

  useEffect(() => {
    const answerFilledinState = Object.values(questionAnswer);
    const someEmptyCheck = (filledValue) => filledValue === "...";
    const emptyCheckStatus = answerFilledinState.some(someEmptyCheck);

    if (!emptyCheckStatus) {
      setOrderSummaryButtonState(false);
    }
  }, [questionAnswer]);

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
      default:
        return;
    }
  };

  const confirmOrderModal = () => {
    orderSummaryHandler();
  };

  const buttonDisabled = {
    backgroundColor: "rgba(226, 222, 219, 1)",
    cursor: "not-allowed",
  };

  return (
    <div id="overlay">
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
          {subscribeData.map((subscription) => (
            <SubScriptionCards
              questionAnswer={questionAnswer}
              selectHandler={selectHandler}
              key={subscription.id}
              question={subscription.question}
              choices={subscription.choices}
              questionId={subscription.id}
            ></SubScriptionCards>
          ))}

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
          <div>
            <button
              style={orderSummaryButtonState ? buttonDisabled : {}}
              disabled={orderSummaryButtonState}
              className="btn btn-subscription"
              onClick={() => {
                confirmOrderModal();
              }}
            >
              Create my plan!
            </button>
          </div>
          {orderSummaryState ? (
            <OrderSummaryModel
              OrderSummaryHandler={confirmOrderModal}
              orderSummaryState={orderSummaryState}
              questionAnswer={questionAnswer}
            ></OrderSummaryModel>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscribeScreen;
