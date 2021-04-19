import React from "react";

const Step = (props) => {
  const { title, id, description, step } = props;
  return (
    <div className="step-container" key={id}>
      <div className="step-count">{step}</div>
      <h4>{title}</h4>
      <div className="step-container__description">{description}</div>
    </div>
  );
};

export default Step;
