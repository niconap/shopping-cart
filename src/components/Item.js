import React from "react";

const Item = (props) => {
  return (
    <div className="shopitem">
      <div id={props.item.name + "img"}></div>
      <h3>{props.item.name}</h3>
      <span>{props.item.price}</span>
      <button
        className="addtocart"
        onClick={() => {
          props.addToCart(props.item);
        }}
      >
        add to cart
      </button>
    </div>
  );
};

export default Item;
