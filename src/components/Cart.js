import React from "react";
import uniqid from "uniqid";

const Cart = ({ addToCart, cart, increment, decrement, itemAmount }) => {
  const renderCheckOut = () => {
    if (itemAmount !== 0) {
      return (
        <a id="checkoutbtn" href="/checkout">
          Complete Order
        </a>
      );
    } else {
      return;
    }
  };

  return (
    <div id="cart">
      <h1>shopping cart</h1>
      <span>amount of unique items: {itemAmount}</span>
      {cart.map((item) => {
        return (
          <div className="item" key={uniqid()}>
            <div id={item.name + "img"} className="smallimg"></div>
            <div className="info">
              <h3>{item.name}</h3>
              <button
                onClick={() => {
                  decrement(item);
                }}
                className="countbtn"
              >
                -
              </button>
              <span className="count">{item.amount}</span>
              <button
                onClick={() => {
                  increment(item);
                }}
                className="countbtn"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      {renderCheckOut()}
    </div>
  );
};

export default Cart;
