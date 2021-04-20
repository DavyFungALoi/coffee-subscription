import React from "react";

const SubscriptionCard = (props) => {
  const { title, description } = props;
  return (
    <div className="subscription__option-container">
      <h4 className="subscription__option-title">{title}</h4>
      <div className="subscription__option-description">{description}</div>
    </div>
  );
};

export default SubscriptionCard;
