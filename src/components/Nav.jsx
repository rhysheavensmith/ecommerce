import React from "react";

export default function Nav({ cart, setCartOpen }) {
  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  // Open the cart on click
  function handleCart() {
    setCartOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="navbar">
      <p onClick={handleCart}>My Cart ({totalItems})</p>
    </div>
  );
}
