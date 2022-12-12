import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="container-navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/products">Products </Link>
        </li>
      </ul>
    </div>
  );
}
