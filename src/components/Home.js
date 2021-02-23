import React from "react";
import Item from "./Item";
import uniqid from "uniqid";

function Home({ addToCart, cart }) {
  const items = [
    { name: "Couch", price: "€50" },
    { name: "Chair", price: "€50" },
  ];

  return (
    <div className="Home">
      <p>Hello from Home</p>

      <div id="shop">
        {items.map((item) => {
          return <Item item={item} addToCart={addToCart} key={uniqid()} />;
        })}
      </div>
    </div>
  );
}

export default Home;
