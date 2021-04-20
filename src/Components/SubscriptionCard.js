import React, { useEffect } from "react";
import { useState } from "react";

const SubscriptionCard = (props) => {
  const {
    title,
    description,
    selectHandler,
    questionId,
    id,
    selectedIdHandler,
    questionAnswer,
    selectedId,
  } = props;

  const [colorState, setcolorState] = useState("");

  /*useEffect(() => {
    const currentAnswers = Object.values(questionAnswer);
    console.log(currentAnswers[0]);

    currentAnswers.forEach((answer) => {
      if (answer === title) {
        setcolorState("hello");
      }
      if ((currentAnswers[0] = !title)) {
        setcolorState("kappa");
        console.log("problem");
      }
    });
  }, [questionAnswer]);
 */

  return (
    <div
      onClick={() => {
        selectHandler(title, questionId);
        selectedIdHandler(id);
      }}
      className="subscription__option-container"
    >
      <h4 className="subscription__option-title">{title}</h4>
      <div className="subscription__option-description">{description}</div>
      <div>{colorState}</div>
      {selectedId === id ? <div>Hello</div> : <div>false</div>}
    </div>
  );
};

export default SubscriptionCard;
/*
  {colorState ? <div>test</div> : <div>test2</div>}
   currentAnswers.forEach((key) => {
      console.log(questionAnswer[key]);
      if (questionAnswer[key] == title) {
        console.log(questionAnswer[key]);
      }
    });
*/
