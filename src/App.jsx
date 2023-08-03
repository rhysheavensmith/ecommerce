import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Cart from "./components/Cart";
import "./App.css";

export default function App() {
  // Init state for the product and cart
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch the data from the API and set the state to the product object
  useEffect(() => {
    fetch(
      `https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product`
    ).then((res) => res.json().then((data) => setProduct(data)));
  }, []);

  // Function to update the items in the cart and handle duplicates
  function updateCart(newItem) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.id === newItem.id &&
          item.selectedSize.id === newItem.selectedSize.id
      );
      if (existingItem) {
        // Item with the same size already exists, increment count
        existingItem.count++;
        return [...prevCart];
      } else {
        // Item doesn't exist, add it to the cart
        return [...prevCart, { ...newItem, count: 1 }];
      }
    });
  }

  // increment function for cart
  function incrementCount(item) {
    item.count++;
    setCart([...cart]);
  }

  // decrement function for cart
  function decrementCount(item) {
    item.count--;
    if (item.count === 0) {
      // If count is zero, remove the item from the cart
      const newCart = cart.filter((i) => i !== item);
      setCart(newCart);
    } else {
      setCart([...cart]);
    }
  }

  // Delete funciton for the cart
  function deleteItem(itemToRemove) {
    const newCart = cart.filter((item) => item !== itemToRemove);
    setCart(newCart);
  }

  return (
    <div className="app">
      <div className="cart-container">
        <Nav setCartOpen={setCartOpen} cart={cart} />
        {isCartOpen && (
          <Cart
            cart={cart}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            deleteItem={deleteItem}
          />
        )}
      </div>

      <Card
        specs={product}
        key={product.id}
        updateCart={updateCart}
        cart={cart}
      />
    </div>
  );
}
