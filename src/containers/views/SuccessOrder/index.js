import React, { useState } from "react";
import { ROUTE_HOME } from "../../routes/routes";
const SuccessOrder = (props) => {
  const continueShopping = () => {
    props.history.push(ROUTE_HOME);
  };
  return (
    <div className="container">
      <p>Success Order</p>
      <div className="col-md-12">
        <h3 className="category-title">Success Order</h3>
        <p>Your order has successfully paid</p>
        <button
          type="button"
          className="category-btn"
          onClick={continueShopping}
        >
          continue Shopping
        </button>
      </div>
    </div>
  );
};
export default SuccessOrder;
