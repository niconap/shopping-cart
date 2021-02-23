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
      {itemAmount}
      {cart.map((item) => {
        return (
          <div className="item" key={uniqid()}>
            <h3>{item.name}</h3>
            <span>{item.amount}</span>
            <button
              onClick={() => {
                increment(item);
              }}
            >
              Increment
            </button>
            <button
              onClick={() => {
                decrement(item);
              }}
            >
              Decrement
            </button>
          </div>
        );
      })}
      {renderCheckOut()}
    </div>
  );
};

export default Cart;
