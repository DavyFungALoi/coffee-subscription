import React, { useEffect, useState } from "react";

const OrderSummaryModel = (props) => {
  const { questionAnswer } = props;
  const { howOftenCoffee } = questionAnswer;

  const [paymentModel, setPaymentModel] = useState();

  useEffect(() => {
    switch (howOftenCoffee) {
      case "Every week":
        setPaymentModel("€7.20/wk");
        break;
      case "Every 2 weeks":
        setPaymentModel("€9.60/2wk");
        break;
      case "Every month":
        setPaymentModel("€12.00/mo");
        break;
      default:
        console.log("nothing yet");
    }
  }, [howOftenCoffee]);

  return (
    <div className="order-modal-container">
      <div className="order-modal__header">Order Summary</div>
      <div className="order-modal__content">
        “I drink my coffee as
        <span>{` ${questionAnswer.howDrinkCoffee}`}</span>, with a
        <span>{` ${questionAnswer.typeCoffee}`} </span>type of bean.
        <span>{`  ${questionAnswer.howMuchCoffee}`}</span> ground ala
        <span>{` ${questionAnswer.grindCoffee}`}</span>, sent to me
        <span>{` ${questionAnswer.howOftenCoffee}`}</span>.”
      </div>
      <div className="order-modal__micro-copy">
        Is this correct? You can proceed to checkout or go back to plan
        selection if something is off. Subscription discount codes can also be
        redeemed at the checkout.
      </div>
      <div className="order-modal__checkout-container">
        <div className="order-modal__payment-model">{paymentModel}</div>
        <a href="/home">
          <button className="btn">Checkout</button>
        </a>
      </div>
    </div>
  );
};

export default OrderSummaryModel;
