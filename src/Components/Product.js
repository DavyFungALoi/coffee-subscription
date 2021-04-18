import React from "react";

const Product = (props) => {
  const { img, title, id, description } = props;
  return (
    <div className="Product-Container" key={id}>
      <img className="Product-Image" src={img} alt="Bag"></img>
      <h3>{title}</h3>
      <div className="Product-Container__Description">{description}</div>
    </div>
  );
};

export default Product;
