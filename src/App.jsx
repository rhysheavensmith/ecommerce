import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import "./App.css";

export default function App() {
  // Init state for the product and cart
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);
  // Fetch the data from the API and set the state to the product object
  useEffect(() => {
    fetch(
      `https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product`
    ).then((res) => res.json().then((data) => setProduct(data)));
  }, []);
  // Function to update the items in the cart
  function updateCart(newItem) {
    setCart((prevCart) => [...prevCart, newItem]);
  }

  useEffect(() => console.log(cart), [cart]);

  return (
    <div className="app">
      <Nav />
      <Card
        specs={product}
        key={product.id}
        updateCart={updateCart}
        cart={cart}
      />
    </div>
  );
}
