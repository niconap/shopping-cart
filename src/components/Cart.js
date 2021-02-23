import React, { useState, useEffect } from "react";

const Cart = ({ addToCart, cart }) => {
  return (
    <div id="cart">
      <p>{cart}</p>
    </div>
  );
};

export default Cart;
