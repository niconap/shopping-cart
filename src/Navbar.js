import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1>FurniShop</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
