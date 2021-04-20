import React from "react";
import { useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import arrow from "../assets/plan/desktop/icon-arrow.svg";

const SubscriptionCards = (props) => {
  const dropDownHandler = () => {
    setDisplayState((prevDisplayState) => !prevDisplayState);
  };
  const [displayState, setDisplayState] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const {
    question,
    choices,
    questionId,
    selectHandler,
    questionAnswer,
  } = props;

  const selectedIdHandler = (id) => {
    setSelectedId(id);
  };
  return (
    <div className="question-container">
      <div className="question-container__header">
        <h3 className="question-container__title">{question}</h3>
        <img
          onClick={() => {
            dropDownHandler();
          }}
          className="arrow"
          src={arrow}
          alt={"arrow"}
        ></img>
      </div>
      <div>
        {displayState ? (
          <div className="question-container__choices">
            {choices.map((choice) => (
              <SubscriptionCard
                questionAnswer={questionAnswer}
                selectHandler={selectHandler}
                title={choice.choiceTitle}
                description={choice.choiceDescription}
                id={choice.id}
                key={choice.id}
                questionId={questionId}
                selectedIdHandler={selectedIdHandler}
                selectedId={selectedId}
              ></SubscriptionCard>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCards;
