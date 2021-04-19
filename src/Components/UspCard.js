import React from "react";

const UspCard = (props) => {
  const { img, title, id, description } = props;
  return (
    <div className={`usp-card-container card-${id}`} key={id}>
      <img className="usp-card-container__image" src={img} alt="Bag"></img>
      <h3>{title}</h3>
      <div className="usp-card-container__description">{description}</div>
    </div>
  );
};
export default UspCard;
