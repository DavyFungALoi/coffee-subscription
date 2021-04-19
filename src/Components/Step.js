import React from "react";

const Step = (props) => {
  const { title, id, description, step } = props;
  return (
    <div className="Step-Container" key={id}>
      <div className="Step-count">{step}</div>
      <h4>{title}</h4>
      <div className="Step-Container__Description">{description}</div>
    </div>
  );
};

export default Step;
