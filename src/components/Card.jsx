import React from "react";

export default function Card({ specs }) {
  // map over the sizes and return a button for each
  const sizes = specs.sizeOptions.map((size) => <button>{size.label}</button>);

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
