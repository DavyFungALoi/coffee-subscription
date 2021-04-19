import React from "react";
import Step from "../Components/Step";
import stepData from "../assets/stepsdata.js";

const HowItworks = (props) => {
  const { screen } = props;

  return (
    <div className={`how-it-works-container ${screen}`}>
      <div className="how-it-works-container__steps-container">
        {stepData.map((step) => (
          <Step
            key={step.id}
            title={step.title}
            description={step.description}
            id={step.id}
            step={step.step}
          ></Step>
        ))}
      </div>
    </div>
  );
};

export default HowItworks;
