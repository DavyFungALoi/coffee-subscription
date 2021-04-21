import React from "react";

const Product = (props) => {
  const { img, title, id, description } = props;
  return (
    <div className="product-container" key={id}>
      <img className="product-image" src={img} alt="Bag"></img>
      <h3>{title}</h3>
      <div className="roduct-container__description">{description}</div>
    </div>
  );
};

export default Product;
