import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

export default function Menu() {
  return (
    <div>
      <Link className="link" to="/">
        back from Menu
      </Link>
    </div>
  );
}
