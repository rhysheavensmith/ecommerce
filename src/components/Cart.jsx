import React from "react";
import CartItem from "./CartItem";

export default function Cart({
  cart,
  incrementCount,
  decrementCount,
  deleteItem,
}) {
  // Render a message if the cart is empty
  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  return (
    <div className="cart">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
          deleteItem={deleteItem}
        />
      ))}
      <h2>{`Total: $${totalPrice.toFixed(2)}`}</h2>
    </div>
  );
}
