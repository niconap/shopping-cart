import React from "react";

const Item = (props) => {
  return (
    <div className="shopitem">
      <h3>{props.item.name}</h3>
      <span>{props.item.price}</span>
      <button
        onClick={() => {
          props.addToCart(props.item);
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Item;
