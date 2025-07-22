import React from "react";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail?/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}
export default App;
