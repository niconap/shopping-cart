import React from "react";
import Item from "./Item";
import uniqid from "uniqid";

function Home({ addToCart, cart }) {
  const items = [
    { name: "couch", price: "€350" },
    { name: "chair", price: "€100" },
    { name: "bed", price: "€250" },
    { name: "table", price: "€200" },
    { name: "tablelamp", price: "€75" },
    { name: "desk", price: "€210" },
    { name: "bookshelf", price: "€430" },
    { name: "pictureframe", price: "€30" },
    { name: "clock", price: "€15" },
  ];

  return (
    <div id="home">
      <div id="shop">
        {items.map((item) => {
          return <Item item={item} addToCart={addToCart} key={uniqid()} />;
        })}
      </div>
    </div>
  );
}

export default Home;
