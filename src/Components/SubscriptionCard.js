import React from "react";

const SubscriptionCard = (props) => {
  const {
    title,
    description,
    selectHandler,
    questionId,
    id,
    selectedIdHandler,
    selectedId,
  } = props;

  const cardSelect = {
    backgroundColor: "#0E8784",
    color: "white",
  };
  const sameold = {};

  return (
    <div
      style={selectedId === id ? cardSelect : sameold}
      onClick={() => {
        selectHandler(title, questionId);
        selectedIdHandler(id);
      }}
      className="subscription__option-container"
    >
      <h4 className="subscription__option-title">{title}</h4>
      <div className="subscription__option-description">{description}</div>
    </div>
  );
};

export default SubscriptionCard;
