import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import arrow from "../assets/plan/desktop/icon-arrow.svg";

const SubscriptionCards = (props) => {
  const { question, choices, id } = props;
  return (
    <div className="question-container">
      <div className="question-container__header">
        <h3 className="question-container__title">{question}</h3>
        <img className="arrow" src={arrow} alt={"arrow"}></img>
      </div>
      <div className="question-container__choices">
        {choices.map((choice) => (
          <SubscriptionCard
            title={choice.choiceTitle}
            description={choice.choiceDescription}
            key={choice.id}
          ></SubscriptionCard>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCards;
