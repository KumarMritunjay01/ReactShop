import React from "react";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/product-detail?/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
export default App;
