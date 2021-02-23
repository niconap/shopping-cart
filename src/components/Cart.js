import React, { useState, useEffect } from "react";

const Cart = ({ addToCart, cart }) => {
  return (
    <div id="cart">
      <p>
        {cart.map((item) => {
          return item.name;
        })}
      </p>
    </div>
  );
};

export default Cart;
