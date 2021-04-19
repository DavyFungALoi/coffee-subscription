import React from "react";
import coffeeheroimage from "../assets/home/desktop/image-hero-coffeepress.jpg";
import Product from "../Components/Product.js";
import productData from "../assets/productdata";
import UspCard from "../Components/UspCard.js";
import uspData from "../assets/uspdata";
import Step from "../Components/Step";
import stepData from "../assets/stepsdata.js";

const HomeScreen = () => {
  return (
    <div>
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
          <h2 className="usp-container__header">Why choose us?</h2>
          <div className="usp-container__micro-copy">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </div>
        </div>
        <div className="usp-container__card-container">
          {uspData.map((usp) => (
            <UspCard
              key={usp.id}
              title={usp.title}
              description={usp.description}
              id={usp.id}
              img={usp.img}
            ></UspCard>
          ))}
        </div>
      </div>
      <div className="how-it-works-container">
        <h4 className="how-it-works-container__header">How it works</h4>

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
      <button className="btn bottom" >Create your plan</button>
    </div>
  );
};

export default HomeScreen;
