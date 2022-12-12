import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import ProductsList from "./components/ProductsList";
// import Products from "./components/Products";
import ProductsDetail from "./components/ProductsDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>

        <Route path="/products" element={<ProductsList />}></Route>
        <Route path="/products/:id" element={<ProductsDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
