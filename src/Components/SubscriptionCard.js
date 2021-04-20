import React from "react";

const SubscriptionCard = (props) => {
  const { title, description, selectHandler, questionId, id } = props;
  return (
    <div
      onClick={() => {
        selectHandler(title, questionId);
      }}
      className="subscription__option-container"
    >
      <h4 className="subscription__option-title">{title}</h4>
      <div className="subscription__option-description">{description}</div>
      <div>{questionId}</div>
    </div>
  );
};

export default SubscriptionCard;
