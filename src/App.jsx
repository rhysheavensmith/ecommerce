import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import "./App.css";

export default function App() {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(
      `https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product`
    ).then((res) => res.json().then((data) => setProduct(data)));
  }, []);

  return (
    <div className="app">
      <Nav />
      <Card specs={product} />
    </div>
  );
}
