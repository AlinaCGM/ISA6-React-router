import React from "react";
import { Link } from "react-router-dom";

import "./Products.css";

export default function Products({ item }) {
  return (
    <div className="item">
      <h3>Name:{item.title} </h3>
      <p> {item.price} sek</p>
      <img className="image" src={item.image} alt="" />
      <Link to={`/products/${item.id}`}> more detail</Link>
    </div>
  );
}
