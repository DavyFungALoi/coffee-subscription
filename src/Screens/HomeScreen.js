import React from "react";
import coffeeheroimage from "../assets/home/desktop/image-hero-coffeepress.jpg";
import Product from "../Components/Product.js";
import productData from "../assets/productdata";

const HomeScreen = () => {
  console.log(productData);
  return (
    <div
      className="intro-container"
      style={{ backgroundImage: `url(${coffeeheroimage})` }}
    >
      <div className="intro-container__content">
        <h1> Great Coffee made simple.</h1>
        <div className="intro-container__micro-copy">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </div>
        <a href="/subscribe">
          <button className="btn">Create your plan</button>
        </a>
      </div>
      <div className="collection-container">
        <h2 className="collection-container__background-header">
          our collection
        </h2>
        <div className="collection-container__product-container">
          {productData.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              description={product.description}
              id={product.id}
              img={product.img}
            ></Product>
          ))}
        </div>
      </div>
      <div className="usp-container">
        <div className="usp-container__usp-message-container">
          <h2 className="usp-container__header">Why Choose us</h2>
          <div className="usp-container__micro-copy">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </div>
        </div>
        <div className="usp-container__card-container"></div>
      </div>
    </div>
  );
};

export default HomeScreen;
