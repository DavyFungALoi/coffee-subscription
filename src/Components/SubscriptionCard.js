import React from "react";

const SubscriptionCard = (props) => {
  const { title, description } = props;
  return (
    <div>
      <h4>{title}</h4>
      <div>{description}</div>
    </div>
  );
};

export default SubscriptionCard;
