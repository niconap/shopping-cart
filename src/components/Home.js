import React from "react";

function Home({ addToCart, cart }) {
  return (
    <div className="Home">
      <p>Hello from Home</p>
      <button
        onClick={() => {
          addToCart();
        }}
      >
        Button
      </button>
      {cart}
    </div>
  );
}

export default Home;
