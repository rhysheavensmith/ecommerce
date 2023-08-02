import React, { useState } from "react";

export default function Card({ specs, updateCart }) {
  // Check the data has loaded before trying to render the card
  if (!specs || !specs.sizeOptions) {
    return <div>Loading...</div>;
  }

  const [selectedSize, setSelectedSize] = useState(null);

  // map over the sizes and return a button for each
  const sizes = specs.sizeOptions.map((size) => (
    <button key={size.id} onClick={() => pickSize(size)}>
      {size.label}
    </button>
  ));

  // Function to handle size selection and update size state
  function pickSize(size) {
    setSelectedSize(size);
  }

  // Function to handle adding product to the cart
  function addToCart() {
    // Make sure a size has been selected
    if (selectedSize === null) {
      console.log("Please select a size");
      return;
    }
    // Create a new item with the product information and selected size
    const item = { ...specs, selectedSize: selectedSize };
    // Add the new item to the cart
    updateCart(item);
  }

  return (
    <div className="card">
      <img src={specs.imageURL} alt="classic tee" />
      <div>
        <h1>{specs.title}</h1>
        <hr />
        <h2>{`$${specs.price}`}</h2>
        <hr />
        <p>{specs.description}</p>
        <h3>SIZE</h3>
        {sizes}
        <br />
        <button onClick={addToCart}>ADD TO CART</button>
      </div>
    </div>
  );
}
