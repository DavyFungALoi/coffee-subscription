import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const SubscriptionCards = (props) => {
  const { question, choices, id } = props;
  return (
    <div>
      <div>{question}</div>
      <div className="subscription__card-container">
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
