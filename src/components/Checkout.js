import React, { useEffect } from "react";

const Checkout = ({ emptyCart }) => {
  useEffect(() => {
    emptyCart();
  }, [emptyCart]);

  return (
    <div id="checkout">
      <h1>thank you for your purchase!</h1>
      <p>your order was succesful! enjoy your new furniture!</p>
      <div id="checkoutimg"></div>
    </div>
  );
};

export default Checkout;
