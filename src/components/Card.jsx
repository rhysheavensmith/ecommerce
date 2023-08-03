import React, { useState } from "react";

export default function Card({ specs, updateCart }) {
  // Check the data has loaded before trying to render the card
  if (!specs || !specs.sizeOptions) {
    return <div>Loading...</div>;
  }

  const [selectedSize, setSelectedSize] = useState(null);

  // map over the sizes and return a button for each
  const sizes = specs.sizeOptions.map((size) => (
    <button className="sizeBtn" key={size.id} onClick={() => pickSize(size)}>
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
      alert("Please select a size");
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
      <div className="product-details">
        <h1 className="title">{specs.title}</h1>
        <hr />
        <h2 className="price">{`$${specs.price.toFixed(2)}`}</h2>
        <hr />
        <p className="description">{specs.description}</p>
        <h3 className="sizeText">
          SIZE<span className="star">*</span>
        </h3>
        {sizes}
        <br />
        <button onClick={addToCart} className="addBtn">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
