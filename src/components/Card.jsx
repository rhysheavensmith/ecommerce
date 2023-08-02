import React from "react";

export default function Card({ specs }) {
  // Check the data has loaded before trying to render the card
  if (!specs || !specs.sizeOptions) {
    return <div>Loading...</div>;
  }
  // map over the sizes and return a button for eachzz
  const sizes = specs.sizeOptions.map((size, index) => (
    <button key={index}>{size.label}</button>
  ));

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
        <button>ADD TO CART</button>
      </div>
    </div>
  );
}
