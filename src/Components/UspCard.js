import React from 'react'

const UspCard = (props) => {
    const { img, title, id, description } = props;
    return (
      <div className="usp-Container" key={id}>
        <img className="usp-Image" src={img} alt="Bag"></img>
        <h3>{title}</h3>
        <div className="usp-Container__Description">{description}</div>
      </div>
    );
  };
export default UspCard
