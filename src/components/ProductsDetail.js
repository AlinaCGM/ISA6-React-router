import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../App.css";

export default function ProductsDetail() {
  const productId = useParams();
  const url = `https://fakestoreapi.com/products/${productId.id}`;
  console.log(url, "Andrea");

  const [data, setData] = useState({});

  console.log(productId);
  useEffect(() => {
    function getData() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
    getData();
  }, [url]);

  console.log(data, "data");
  return (
    <div className="detail">
      <div>Title: {data.title}</div>
      <div>Title: {data.price}</div>
    </div>
  );
}
