import React from "react";

const Item = (props) => {
  return (
    <div className="shopitem">
      <div id={props.item.name + "img"} className="bigimg"></div>
      <h3 className="itemname">{props.item.name}</h3>
      <p className="price">{props.item.price}</p>
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
