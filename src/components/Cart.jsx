import React from "react";
import CartItem from "./CartItem";

export default function Cart({
  cart,
  incrementCount,
  decrementCount,
  deleteItem,
}) {
  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="cart-item">
          <h2 className="empty-cart">Your cart is empty</h2>
        </div>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            deleteItem={deleteItem}
          />
        ))
      )}
      <h2 className="total">{`Total: $${totalPrice.toFixed(2)}`}</h2>
    </div>
  );
}
