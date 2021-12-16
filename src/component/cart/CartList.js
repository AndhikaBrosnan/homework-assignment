import React from "react";
import Cart from "./Cart";
import "../../style/Cart.css";
import { Link } from "react-router-dom";

const CartList = () => {
  return (
    <div>
      <div className="ui container">
        <h1>Order Detail</h1>
        <div className="ui cards">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
        <div className="addmore">
          <Link to="/menu">
            <button className="ui basic button">
              <i className="icon shopping cart"></i>
              Add More
            </button>
          </Link>
        </div>
        <div id="paymentmethod">
          <h4>Payment Method</h4>
          <button
            className="ui inverted green button"
            style={{ width: "100%", marginBottom: "5%" }}
          >
            <i className="money bill alternate outline icon"></i>SELECT PAYMENT
            METHOD
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
